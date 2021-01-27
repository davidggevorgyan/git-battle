import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { battle } from '../utils/api.js';
import Card from './Card.js';
import ProfileInfo from './ProfileInfo.js';
import Loading from './Loading.js';

export default function BattleResults(props) {
	const [loading, setLoading] = React.useState(true);
	const [winner, setWinner] = React.useState(null);
	const [looser, setLooser] = React.useState(null);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		const urlParams = new URLSearchParams(props.location.search);
		const playerOne = urlParams.get('playerOne');
		const playerTwo = urlParams.get('playerTwo');
		battle([playerOne, playerTwo])
			.then((players) => {
				setWinner(players[0]);
				setLooser(players[1]);
				setLoading(false);
			})
			.catch((e) => {
				setError(e.message);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <h1 className="error">{error}</h1>;
	}

	return (
		<div className="battle-results">
			<div className="card-list">
				<Card
					header={winner.score === looser.score ? 'Tie' : 'Winner'}
					subheader={`Score: ${winner.score.toLocaleString()}`}
					avatar={winner.profile.avatar_url}
					href={winner.profile.html_url}
					name={winner.profile.login}
					id="playerLeft"
				>
					<ProfileInfo profile={winner.profile} />
				</Card>
				<Card
					header={winner.score === looser.score ? 'Tie' : 'Looser'}
					subheader={`Score: ${looser.score.toLocaleString()}`}
					avatar={looser.profile.avatar_url}
					href={looser.profile.html_url}
					name={looser.profile.login}
					id="playerRight"
				>
					<ProfileInfo profile={looser.profile} />
				</Card>
			</div>
			<Link to="/battle">
				<button>Reset</button>
			</Link>
		</div>
	);
}

BattleResults.propTypes = {
	location: PropTypes.shape({
		search: PropTypes.string.isRequired,
	}),
};
