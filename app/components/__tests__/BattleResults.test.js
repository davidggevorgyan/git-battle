import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { battle } from '../../utils/api.js';

import BattleResults from '../BattleResults.js';

jest.mock( '../../utils/api.js' );

it( 'should show winner and looser', async () => {
	const users = [
		{
			score: 1,
			profile: {
				login: 'winner',
				avatar_url: 'https://avatars3.githubusercontent.com/u/46099506?v=4',
				name: 'user',
				html_url: 'https://gevorgyan.dev',
				location: 'Yerevan',
				public_repos: 6,
				public_gists: 0,
				followers: 3,
				following: 2,
			},
		},
		{
			score: 2,
			profile: {
				login: 'looser',
				avatar_url: 'https://avatars3.githubusercontent.com/u/46099506?v=4',
				name: 'user',
				html_url: 'https://gevorgyan.dev',
				location: 'Yerevan',
				public_repos: 6,
				public_gists: 0,
				followers: 3,
				following: 2,
			},
		},
	];
	battle.mockResolvedValueOnce( users );
	render(
		<Router>
			<BattleResults location={ { search: 'playerOne=davidggevorgyan&playerTwo=dsa' }} />
		</Router>,
	);
	expect( screen.getByText( 'Loading' ) ).toBeInTheDocument();
	expect( battle ).toHaveBeenCalledTimes( 1 );
	expect( battle ).toHaveBeenCalledWith( ['davidggevorgyan', 'dsa'] );
	await waitFor( () => expect(
		screen.getByText( 'Winner' ),
	).toBeInTheDocument() );
} );

it( 'should throw an catch and display the error in case of exception', async () => {
	battle.mockImplementationOnce( () => Promise.reject( new Error( 'Server is unavailable' ) ) );
	render(
		<Router>
			<BattleResults location={ { search: 'playerOne=davidggevorgyan&playerTwo=dsa' }} />
		</Router>,
	);
	expect( screen.getByText( 'Loading' ) ).toBeInTheDocument();
	expect( battle ).toHaveBeenCalledTimes( 1 );
	expect( battle ).toHaveBeenCalledWith( ['davidggevorgyan', 'dsa'] );
	await waitFor( () => expect(
		screen.getByText( 'Server is unavailable' ),
	).toBeInTheDocument() );
} );

it( 'should show tie if you are comparing same user twice', async () => {
	const user = {
		score: 1,
		profile: {
			login: 'tie',
			avatar_url: 'https://avatars3.githubusercontent.com/u/46099506?v=4',
			name: 'user',
			html_url: 'https://gevorgyan.dev',
			location: 'Yerevan',
			public_repos: 6,
			public_gists: 0,
			company: 'twitter',
			followers: 3,
			following: 2,
		},
	};
	battle.mockResolvedValueOnce( [user, user] );
	render(
		<Router>
			<BattleResults location={ { search: 'playerOne=tie&playerTwo=tie' }} />
		</Router>,
	);
	expect( screen.getByText( 'Loading' ) ).toBeInTheDocument();
	expect( battle ).toHaveBeenCalledTimes( 1 );
	expect( battle ).toHaveBeenCalledWith( ['tie', 'tie'] );
	await waitFor( () => expect(
		screen.getAllByRole( 'heading', { level: 2 } ).length,
	).toBe( 2 ) );
} );
