import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from '../Card.js';

it( 'should render a card', () => {
	const {
		header, subheader, avatar, href, name,
	} = {
		header: 'Test Header',
		subheader: 'Test Subheader',
		avatar: 'https://avatars3.githubusercontent.com/u/48942249?v=4',
		href: 'https://github.com/davidggevorgyan',
		name: 'davidggevorgyan',
	};
	render( <Card
		header={header}
		subheader={subheader}
		avatar={avatar}
		href={href}
		name={name}
	>
		<h1>A child</h1>
	</Card> );
	expect( screen.getByRole( 'listitem' ) ).toHaveClass( 'card' );
	expect( screen.getByRole( 'heading', { level: 2 } ) ).toHaveTextContent( header );
	expect( screen.getByRole( 'heading', { level: 4 } ) ).toHaveTextContent( subheader );
	expect( screen.getByRole( 'img' ) ).toBeVisible();
	expect( screen.getByRole( 'heading', { level: 3 } ) ).toHaveTextContent( name );
	expect( screen.getByRole( 'heading', { level: 3 } ) ).toContainElement( screen.getByRole( 'link' ) );
	expect( screen.getByRole( 'heading', { level: 1 } ) ).toHaveTextContent( 'A child' );
} );
