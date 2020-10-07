import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchPopularRepositories } from '../../utils/api.js';

import Popular from '../Popular.js';

jest.mock( '../../utils/api.js' );

it( 'should show popular repos with active selected language and cache fetch calls', async () => {
	const repos = [
		{
			name: 'First Repo',
			id: 1,
			owner: {
				login: 'First Owner',
				avatar_url: 'https://avatars0.githubusercontent.com/u/9892522?v=4',
			},
			html_url: 'https://github.com/first',
			open_issues_count: 1,
			forks_count: 2,
			stargazers_count: 3,
		},
		{
			name: 'Second Repo',
			id: 2,
			owner: {
				login: 'Second Owner',
				avatar_url: 'https://avatars0.githubusercontent.com/u/9892522?v=4',
			},
			html_url: 'https://github.com/second',
			open_issues_count: 2,
			forks_count: 3,
			stargazers_count: 4,
		},
	];
	fetchPopularRepositories.mockResolvedValue( repos );
	render(
		<Router>
			 <Popular languages={ ['All', 'JavaScript', 'Python'] }/>
		</Router>,
	);
	expect( screen.getByText( 'Fetching Repos' ) ).toBeInTheDocument();
	expect( await screen.findByText( 'All' ) ).toHaveClass( 'active' );
	expect( screen.getByText( 'JavaScript' ) ).not.toHaveClass( 'active' );
	// Switching back to a new tab
	await userEvent.click( screen.getByText( 'JavaScript' ) );
	expect( screen.getByText( 'All' ) ).not.toHaveClass( 'active' );
	expect( await screen.findByText( 'JavaScript' ) ).toHaveClass( 'active' );
	// Switching back to all tab
	await userEvent.click( screen.getByText( 'All' ) );
	expect( screen.getByText( 'All' ) ).toHaveClass( 'active' );
	expect( await screen.findByText( 'JavaScript' ) ).not.toHaveClass( 'active' );
	expect( fetchPopularRepositories ).toHaveBeenCalledTimes( 2 );
} );

it( 'should show an error when api call failed', async () => {
	fetchPopularRepositories.mockImplementationOnce( () => Promise.reject( new Error( 'Server is unavailable' ) ) );
	render(
		<Router>
			 <Popular languages={ ['All', 'JavaScript', 'Python'] }/>
		</Router>,
	);
	expect( screen.getByText( 'Fetching Repos' ) ).toBeInTheDocument();
	expect( await screen.findByText( 'Something went wrong' ) ).toHaveClass( 'error' );
} );
