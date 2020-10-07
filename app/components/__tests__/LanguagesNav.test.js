import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

import LanguagesNav from '../LanguagesNav.js';

it( 'should show languages navbar', async () => {
	const onClickFunction = () => 5;
	render( <Router>
		<LanguagesNav languages={['All', 'JS', 'Java']} selectedLanguage='JS' onUpdateLanguage={onClickFunction}/>
	</Router> );

	expect( screen.getByText( 'All' ) ).toBeInTheDocument();
	expect( screen.getByText( 'JS' ) ).toHaveClass( 'active' );
	expect( screen.getByText( 'Java' ) ).not.toHaveClass( 'active' );
} );
