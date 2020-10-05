import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import App from '../App.js';

// test( 'landing on a bad page', async () => {
// 	const history = createMemoryHistory();
// 	history.push( '/git-battle/#/asd' );
// 	render(
// 		<Router history={history}>
// 			<App />
// 		</Router>,
// 	);
// 	await waitFor( () => expect(
// 		screen.getByAltText( 'The page you are looking for doesn\'t exist' ),
// 	).toBeInTheDocument() );
// } );

const renderWithRouter = ( ui, { route = '/' } = {} ) => {
	window.history.pushState( {}, 'Test page', route );

	return render( ui, { wrapper: MemoryRouter } );
};

test( 'full app rendering/navigating', () => {
	renderWithRouter( <App /> );
	expect( screen.getByText( 'Still Loading' ) ).toBeInTheDocument();
} );

test( '404 error', () => {
	renderWithRouter( <App />, { route: '/git-battle/#/asd' } );
	expect( screen.getByAltText( /The page you are looking for doesn't exist/ ) ).toBeInTheDocument();
} );
