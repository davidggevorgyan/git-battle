import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Tooltip from '../Tooltip.js';

it( 'should show a hover on a hover event', async () => {
	render(
		<>
			<Tooltip text={'Hover text'}>
				<li>A simple text</li>
			</Tooltip>
		</>,
	);
	expect( screen.getByText( 'A simple text' ) ).toBeInTheDocument();
	expect( screen.queryByRole( 'tooltip' ) ).toBeNull();

	await userEvent.hover( screen.getByText( 'A simple text' ) );
	expect( screen.getByRole( 'tooltip' ) ).toBeVisible();

	await userEvent.unhover( screen.getByText( 'A simple text' ) );
	expect( screen.queryByRole( 'tooltip' ) ).toBeNull();
} );
