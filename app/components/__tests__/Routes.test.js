import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';
import { battle } from '../../utils/api.js';

jest.mock( '../../utils/api.js' );

const renderWithRouter = ( ui, { route = '/' } = {} ) => {
	window.history.pushState( {}, 'Test page', route );
	return render( ui, { wrapper: MemoryRouter } );
};

test( 'should show still loading as a fallback for lazy render', () => {
	renderWithRouter( <App /> );
	expect( screen.getByText( 'Still Loading' ) ).toBeInTheDocument();
} );

test( 'should route 404 error', () => {
	renderWithRouter( <App />, { route: '/git-battle/#/asd' } );
	expect( screen.getByAltText( /The page you are looking for doesn't exist/ ) ).toBeInTheDocument();
	screen.getAllByRole( 'navigation' ).forEach( ( element ) => {
		expect( element ).not.toHaveClass( 'active' );
	} );
} );

test( 'should route to the battle component', async () => {
	renderWithRouter( <App />, { route: '/git-battle/#/battle' } );
	expect( await screen.findByText( 'Instructions' ) ).toBeInTheDocument();
} );

test( 'should route to the battle results component', async () => {
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
	renderWithRouter( <App />, { route: '/git-battle/#/battle/results?playerOne=asd&playerTwo=dsa' } );
	expect( await screen.findByText( 'Winner' ) ).toBeInTheDocument();
} );
