import React from 'react';
import PropTypes from 'prop-types';
import Hover from './Hover.js';
import '../styles/tooltip.scss';

export default function Tooltip( { text, children } ) {
	return (
		<Hover render={ ( hovering ) => (
			<div className='container'>
				{hovering && <div className='tooltip'>{text}</div>}
				{children}
			</div> )
		}></Hover>
	);
}

Tooltip.propTypes = {
	children: PropTypes.node,
	text: PropTypes.string.isRequired,
};
