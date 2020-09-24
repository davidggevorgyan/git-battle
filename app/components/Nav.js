import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
	const activeStyle = {
		color: '#e63946',
	};

	return (
		<nav>
			<ul>
				<li>
					<NavLink exact role='navigation' activeStyle={activeStyle} to="/">Popular</NavLink>
				</li>
				<li>
					<NavLink role='navigation' activeStyle={activeStyle} to="/battle">Battle</NavLink>
				</li>
			</ul>
		</nav>
	);

}
