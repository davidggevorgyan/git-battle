import React from 'react';
import PropTypes from 'prop-types';
import LanguagesNav from './LanguagesNav.js';
import Repo from './Repo.js';
import { fetchPopularRepositories } from '../utils/api.js';
import Loading from './Loading.js';

export default function Popular({ languages }) {
	const [selectedLanguage, setSelectedLanguage] = React.useState('All');
	const [repositories, setRepositories] = React.useState({});
	const [error, setError] = React.useState(null);

	const onUpdateLanguage = (l) => {
		setSelectedLanguage(l);
		setError(null);

		if (!repositories[l]) {
			fetchPopularRepositories(l)
				.then((data) => {
					setRepositories({
						...repositories,
						[l]: data,
					});
				})
				.catch(() => setError('Something went wrong'));
		}
	};

	React.useEffect(() => {
		onUpdateLanguage(selectedLanguage);
	}, []);

	const isLoading = () => !repositories[selectedLanguage] && error === null;

	return (
		<>
			<LanguagesNav
				onUpdateLanguage={onUpdateLanguage}
				languages={languages}
				selectedLanguage={selectedLanguage}
			/>
			{isLoading() && <Loading message="Fetching Repos" />}
			{error && <h1 className="error">{error}</h1>}
			{repositories[selectedLanguage] && (
				<Repo repositories={repositories[selectedLanguage]} />
			)}
		</>
	);
}

Popular.propTypes = {
	languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
