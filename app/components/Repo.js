/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import RepoInfo from './RepoInfo.js';

export default function Repo( { repositories } ) {
	return (
		<ul className='card-list'>
			{
				repositories.map( ( repo, index ) => {
					const {
						name, id, owner, html_url,
					} = repo;
					return (
						<Card
							key={id}
							header={`#${ index + 1 }`}
							avatar={owner.avatar_url}
							name={name}
							href={html_url}
						>
							<RepoInfo repo={repo} owner={owner}/>
						</Card>
					);
				} )
			}
		</ul>
	);
}

Repo.propTypes = {
	repositories: PropTypes.arrayOf( PropTypes.object ).isRequired,
};
