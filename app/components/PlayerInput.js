import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerInput(props) {
	const [username, setUsername] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(username);
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUsername(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className="player-input">
			<label htmlFor="username">{props.label}</label>
			<input
				type="text"
				id="username"
				placeholder="GitHub username"
				autoComplete="off"
				value={username}
				onChange={handleChange}
			/>
			<button type="submit" disabled={!username}>
				Submit
			</button>
		</form>
	);
}

PlayerInput.propTypes = {
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};
