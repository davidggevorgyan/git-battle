import React from 'react';
import PropTypes from 'prop-types';
import '../styles/loading.scss';

export default class Loading extends React.Component {

	state = {
		message: this.props.message,
	}

	componentDidMount() {
		this.interval = window.setInterval( () => {
			// eslint-disable-next-line no-unused-expressions
			this.state.message !== `${ this.props.message }...`
				? this.setState( { message: `${ this.state.message }.` } )
				: this.setState( { message: this.props.message } );
		}, 300 );
	}

	componentWillUnmount() {
		window.clearInterval( this.interval );
	}

	render() {
		return (
			<h2 className='loading'>
				{this.state.message}
			</h2>
		);
	}

}

Loading.defaultProps = {
	message: 'Loading',
};

Loading.propTypes = {
	message: PropTypes.string,
};
