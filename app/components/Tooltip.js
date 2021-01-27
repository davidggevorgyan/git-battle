import React from 'react';
import PropTypes from 'prop-types';
import '../styles/tooltip.scss';
import useHover from '../hooks/useHover.js';

export default function Tooltip({ text, children }) {
	const [hovering, attrs] = useHover();

	return (
		<div {...attrs} className="container">
			{hovering && (
				<div role="tooltip" className="tooltip">
					{text}
				</div>
			)}
			{children}
		</div>
	);
}

Tooltip.propTypes = {
	children: PropTypes.node,
	text: PropTypes.string.isRequired,
};
