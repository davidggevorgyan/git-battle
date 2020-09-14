import React from 'react';
import PropTypes from 'prop-types';

export default class PlayerInput extends React.Component {

	state = {
		username: '',
	}

	handleSubmit = ( event ) => {
		event.preventDefault();
		this.props.onSubmit( this.state.username );
	}

	handleChange = ( event ) => {
		event.preventDefault();
		this.setState( {
			username: event.target.value,
		} );
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='player-input'>
				<label htmlFor='username'>
					{this.props.label}
				</label>
				<input
					type='text'
					id='username'
					placeholder='GitHub username'
					autoComplete='off'
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<button
					type='submit'
					disabled={!this.state.username}
				>
					Submit
				</button>
			</form>
		);
	}

}

PlayerInput.propTypes = {
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};
