import React from 'react';
import PropTypes from 'prop-types';
import {
	FaStar, FaUser, FaCodeBranch, FaExclamationTriangle,
} from 'react-icons/fa';
import Tooltip from './Tooltip.js';

function infoItem( label, icon, suffix = '' ) {
	return (
		<h5>{icon} {`${ label } ${ suffix }`} </h5>
	);
}

export default function RepoInfo( { repo, owner } ) {

	return (
		<>
			<Tooltip text={'Repo owner'}>
				{infoItem( owner.login, <FaUser color={'rgb(255, 191, 116)'} size={18} /> )}
			</Tooltip>
			{infoItem( repo.stargazers_count.toLocaleString(), <FaStar color={'rgb(255, 215, 0)'} size={18}/>, 'stars' )}
			{infoItem( repo.forks_count.toLocaleString(), <FaCodeBranch color={'rgb(129, 195, 245)'} size={18} />, 'forks' )}
			{infoItem( repo.open_issues_count.toLocaleString(), <FaExclamationTriangle color={'rgb(241, 138, 147)'} size={18} />, 'open issues' )}
		</>
	);
}

RepoInfo.propTypes = {
	repo: PropTypes.object.isRequired,
	owner: PropTypes.object.isRequired,
};
