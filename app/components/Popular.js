import React from 'react';
import PropTypes from 'prop-types';
import LanguagesNav from './LanguagesNav.js';
import Repo from './Repo.js';
import { fetchPopularRepositories } from '../utils/api.js';
import Loading from './Loading.js';

export default class Popular extends React.Component {

	state = {
		selectedLanguage: 'All',
		repositories: {},
		error: null,
	}

	componentDidMount() {
		this.onUpdateLanguage( this.state.selectedLanguage );
	}

	onUpdateLanguage = ( selectedLanguage ) => {
		this.setState( {
			selectedLanguage,
			error: null,
		} );

		if ( !this.state.repositories[selectedLanguage] ) {
			fetchPopularRepositories( selectedLanguage )
				.then( ( data ) => {
					this.setState( ( { repositories } ) => ( {
						repositories: {
							...repositories,
							[selectedLanguage]: data,
						},
					} ) );
				} )
				.catch( () => {
					this.setState( {
						error: 'Something went wrong',
					} );
				} );
		}
	}

	isLoading = () => {
		const { selectedLanguage, repositories, error } = this.state;
		return !repositories[selectedLanguage] && error === null;
	}

	render() {
		const { selectedLanguage, repositories, error } = this.state;
		return (
			<>
				<LanguagesNav
					onUpdateLanguage = { this.onUpdateLanguage }
					languages = {this.props.languages}
					selectedLanguage = { selectedLanguage }
				/>
				{ this.isLoading() && <Loading message='Fetching Repos'/> }
				{ error && <h1 className='error'>{error}</h1> }
				{ repositories[selectedLanguage] && <Repo repositories={repositories[selectedLanguage]} /> }
			</ >
		);
	}

}

Popular.propTypes = {
	languages: PropTypes.arrayOf( PropTypes.string ).isRequired,
};
