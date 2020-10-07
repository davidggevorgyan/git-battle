import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Repo from '../Repo.js';

it( 'should render a repo info', () => {
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
	render( <Repo
		repositories={repos}
	/> );
	expect( screen.getByText( '#1' ) ).toBeInTheDocument();
	expect( screen.getByText( '#2' ) ).toBeInTheDocument();
	expect( screen.getAllByRole( 'list' ).length ).toBe( 1 );
	expect( screen.getAllByRole( 'listitem' ).length ).toBe( 2 );
	expect( screen.getAllByAltText( /avatar for/ ).length ).toBe( 2 );
	expect( screen.getByText( 'First Owner' ) ).toBeInTheDocument();
	expect( screen.getByText( '2 forks' ) ).toBeInTheDocument();
	expect( screen.getByText( '4 stars' ) ).toBeInTheDocument();
	expect( screen.getByText( '2 open issues' ) ).toBeInTheDocument();
} );
