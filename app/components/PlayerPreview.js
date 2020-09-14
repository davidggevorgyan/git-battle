import React from 'react';
import PropTypes from 'prop-types';
import { FaTimesCircle } from 'react-icons/fa';

export default function PlayerPreview( { username, onReset, label } ) {
	return (
		<div className='player-preview'>
			<p>{label}</p>
			<img
				src={`https://github.com/${ username }.png?size=200`}
				alt={`avatar for ${ username }`}
			/>
			<a
				href={`https://gihub.com/${ username }`}
			>
				{username}
			</a>
			<button onClick={onReset}>
				<FaTimesCircle color='#e63946' size='26' />
			</button>

		</div>
	);
}

PlayerPreview.propTypes = {
	username: PropTypes.string.isRequired,
	onReset: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
};
