import React from 'react';
import PropTypes from 'prop-types';
import {
	FaUsers, FaCompass, FaBriefcase, FaUserFriends, FaCodeBranch,
} from 'react-icons/fa';
import Tooltip from './Tooltip.js';

export default function ProfileInfo( { profile } ) {
	return (
		<>
			<Tooltip text={'User\'s followers'}>
				<h5><FaUsers color={'rgb(255, 215, 0)'} size={18}/>{profile.followers.toLocaleString()} followers</h5>
			</Tooltip>
			<Tooltip text={'User\'s location'}>
				{profile.location && (
					<h5><FaCompass color={'rgb(144, 115, 255)'} size={18}/>{profile.location}</h5>
				) }
			</Tooltip>
			<Tooltip text={'User\'s company'}>
				{profile.company && (
					<h5><FaBriefcase color={'#795548'} size={18}/>{profile.company}</h5>
				) }
			</Tooltip>
			<Tooltip text={'User follows'}>
				<h5><FaUserFriends color={'rgb(64, 183, 95)'} size={18}/>{profile.following.toLocaleString()} following</h5>
			</Tooltip>
			<Tooltip text={'User\'s public repositories'}>
				<h5><FaCodeBranch color={'rgb(129, 195, 245)'} size={18} />{profile.public_repos.toLocaleString()} repos</h5>
			</Tooltip>
		</>
	);
}

ProfileInfo.propTypes = {
	profile: PropTypes.object.isRequired,
};
