import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { battle } from '../utils/api.js';
import Card from './Card.js';
import ProfileInfo from './ProfileInfo.js';
import Loading from './Loading.js';

export default class BattleResults extends React.Component {

	state = {
		winner: null,
		looser: null,
		error: null,
		loading: true,
	}

	componentDidMount() {
		const urlParams = new URLSearchParams( this.props.location.search );
		const playerOne = urlParams.get( 'playerOne' );
		const playerTwo = urlParams.get( 'playerTwo' );
		battle( [playerOne, playerTwo] )
			.then( ( players ) => this.setState( {
				winner: players[0],
				looser: players[1],
				loading: false,
			} ) )
			.catch( ( error ) => this.setState( {
				error: error.message,
				loading: false,
			} ) );
	}

	render() {
		const {
			winner, looser, error, loading,
		} = this.state;

		if ( loading ) {
			return <Loading/>;
		}

		if ( error ) {
			return <h1 className='error'>{ error }</h1>;
		}

		return (
			<div className='battle-results'>
				<div className='card-list'>
					<Card
						header={( winner.score === looser.score ) ? 'Tie' : 'Winner'}
						subheader={`Score: ${ winner.score.toLocaleString() }`}
						avatar={ winner.profile.avatar_url }
						href={winner.profile.html_url}
						name={winner.profile.login}
						id='playerLeft'
					>
						<ProfileInfo profile={winner.profile}/>
					</Card>
					<Card
						header={( winner.score === looser.score ) ? 'Tie' : 'Looser'}
						subheader={`Score: ${ looser.score.toLocaleString() }`}
						avatar={ looser.profile.avatar_url }
						href={looser.profile.html_url}
						name={looser.profile.login}
						id='playerRight'
					>
						<ProfileInfo profile={looser.profile}/>
					</Card>
				</div>
				<Link to='/battle'>
					<button>Reset</button>
				</Link>
			</div>
		);
	}

}

BattleResults.propTypes = {
	location: PropTypes.shape( {
		search: PropTypes.string.isRequired,
	} ),
};
