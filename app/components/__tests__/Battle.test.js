import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

import Battle from '../Battle.js';

it( 'should render the battle page and handle click and reset events for both players', async () => {
	const user1 = 'tylermcginnis';
	const user2 = 'itexz';
	render( <Router>
		<Battle/>
	</Router> );

	await userEvent.type( screen.getByLabelText( 'Player one:' ), user1 );
	await userEvent.click( screen.getAllByRole( 'button' )[0] );

	await userEvent.type( screen.getByLabelText( 'Player two:' ), user2 );
	await userEvent.click( screen.getAllByRole( 'button' )[1] );

	expect( screen.queryByRole( 'textbox' ) ).toBeNull();

	expect( screen.getByAltText( `avatar for ${ user1 }` ) ).toHaveAttribute( 'src', `https://github.com/${ user1 }.png?size=200` );
	expect( screen.getByAltText( `avatar for ${ user2 }` ) ).toHaveAttribute( 'src', `https://github.com/${ user2 }.png?size=200` );
	expect( screen.getByText( user1 ) ).toBeInTheDocument();
	expect( screen.getByText( user2 ) ).toBeInTheDocument();
	expect( screen.getAllByTitle( 'Clear selected user' ).length ).toBe( 2 );
	expect( screen.getByTestId( 'battle-users' ) ).toHaveAttribute( 'href', `/battle/results?playerOne=${ user1 }&playerTwo=${ user2 }` );

	await userEvent.click( screen.getAllByTitle( 'Clear selected user' )[1] );
	expect( screen.getAllByRole( 'textbox' ).length ).toBe( 1 );
	await userEvent.click( screen.getAllByTitle( 'Clear selected user' )[0] );
	expect( screen.getAllByRole( 'textbox' ).length ).toBe( 2 );
} );
