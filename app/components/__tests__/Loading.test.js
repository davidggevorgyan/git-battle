import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from '../Loading.js';

it( 'should render a card', async () => {
	expect.assertions( 3 );

	const message = 'In Progress';
	render( <Loading
		message={message}
	/> );

	expect( screen.getByRole( 'heading', { level: 2 } ) ).toHaveTextContent( message );
	expect( await screen.findByText( `${ message }...` ) ).toBeInTheDocument();
	expect( await screen.findByText( `${ message }` ) ).toBeInTheDocument();

} );
