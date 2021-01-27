import React from 'react';
import PropTypes from 'prop-types';
import {
	FaUsers,
	FaCompass,
	FaBriefcase,
	FaUserFriends,
	FaCodeBranch,
} from 'react-icons/fa';
import { infoItem } from './Card.js';

export default function ProfileInfo({ profile }) {
	return (
		<>
			{infoItem(
				profile.followers.toLocaleString(),
				<FaUsers color={'rgb(255, 215, 0)'} size={18} />,
				'followers',
				"User's followers"
			)}
			{profile.location &&
				infoItem(
					profile.location,
					<FaCompass color={'rgb(144, 115, 255)'} size={18} />,
					'',
					"User's location"
				)}
			{profile.company &&
				infoItem(
					profile.company,
					<FaBriefcase color={'#795548'} size={18} />,
					'',
					"User's company"
				)}
			{infoItem(
				profile.following.toLocaleString(),
				<FaUserFriends color={'rgb(64, 183, 95)'} size={18} />,
				'following',
				'User follows'
			)}
			{infoItem(
				profile.public_repos.toLocaleString(),
				<FaCodeBranch color={'rgb(129, 195, 245)'} size={18} />,
				'repos',
				"User's public repositories"
			)}
		</>
	);
}

ProfileInfo.propTypes = {
	profile: PropTypes.object.isRequired,
};
