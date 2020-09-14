import React from 'react';
import PropTypes from 'prop-types';
import {
	FaStar, FaUser, FaCodeBranch, FaExclamationTriangle,
} from 'react-icons/fa';
import Tooltip from './Tooltip.js';

export default function RepoInfo( { repo, owner } ) {

	return (
		<>
			<Tooltip text={'Repo owner'}>
				<h5><FaUser color={'rgb(255, 191, 116)'} size={18} /> {owner.login}</h5>
			</Tooltip>
			<h5><FaStar color={'rgb(255, 215, 0)'} size={18}/> {repo.stargazers_count.toLocaleString()} stars</h5>
			<h5><FaCodeBranch color={'rgb(129, 195, 245)'} size={18} /> {repo.forks_count.toLocaleString()} forks</h5>
			<h5><FaExclamationTriangle color={'rgb(241, 138, 147)'} size={18} /> {repo.open_issues_count.toLocaleString()} open issues</h5>
		</>
	);
}

RepoInfo.propTypes = {
	repo: PropTypes.object.isRequired,
	owner: PropTypes.object.isRequired,
};
