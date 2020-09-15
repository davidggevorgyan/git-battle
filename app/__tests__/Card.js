import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Card from '../components/Card.js';

let container = null;
beforeEach( () => {
	// setup a DOM element as a render target
	container = document.createElement( 'div' );
	document.body.appendChild( container );
} );

afterEach( () => {
	// cleanup on exiting
	unmountComponentAtNode( container );
	container.remove();
	container = null;
} );

it( 'should render a card', () => {
	act( () => {
		render( <Card
			header="Test Header"
			subheader="Test Subheader"
			avatar="https://avatars3.githubusercontent.com/u/46099506?v=4"
			href="https://github.com/davidggevorgyan"
			name="davidggevorgyan"
		/>, container );
	} );
	expect( container.querySelectorAll( '.card' ).length ).toBeGreaterThanOrEqual( 1 );

} );
