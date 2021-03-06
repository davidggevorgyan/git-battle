import React from 'react';
import { Link } from 'react-router-dom';

import PlayerInput from './PlayerInput.js';
import PlayerPreview from './PlayerPreview.js';

import TwoUsers from '../assets/undraw_playing_cards_cywn.svg';
import Compare from '../assets/undraw_contrast_vb82.svg';
import Winner from '../assets/undraw_winners_ao2o.svg';

export default function Battle() {
	const [playerOne, setPlayerOne] = React.useState(null);
	const [playerTwo, setPlayerTwo] = React.useState(null);

	const handleReset = (id) => {
		if (id === 'playerOne') {
			setPlayerOne(null);
		} else if (id === 'playerTwo') {
			setPlayerTwo(null);
		}
	};

	const handleSubmit = (id, p) => {
		if (id === 'playerOne') {
			setPlayerOne(p);
		} else if (id === 'playerTwo') {
			setPlayerTwo(p);
		}
	};

	return (
		<div className="battle gray-bg">
			<h2>Instructions</h2>
			<ul>
				<li>
					<h3>1. Enter two github users</h3>
					<img src={TwoUsers} alt="Two users" className="drawing" />
				</li>
				<li>
					<h3>2. Battle</h3>
					<img src={Compare} alt="Battle" className="drawing" />
				</li>
				<li>
					<h3>3. See the winner</h3>
					<img src={Winner} alt="See the winner" className="drawing" />
				</li>
			</ul>
			<div className="players">
				{playerOne === null ? (
					<PlayerInput
						label="Player one: "
						onSubmit={(p) => handleSubmit('playerOne', p)}
					/>
				) : (
					<PlayerPreview
						username={playerOne}
						onReset={() => handleReset('playerOne')}
						label="Player one: "
					/>
				)}
				{playerTwo === null ? (
					<PlayerInput
						label="Player two: "
						onSubmit={(p) => handleSubmit('playerTwo', p)}
					/>
				) : (
					<PlayerPreview
						username={playerTwo}
						onReset={() => handleReset('playerTwo')}
						label="Player two: "
					/>
				)}
			</div>
			{playerOne && playerTwo ? (
				<Link
					data-testid="battle-users"
					to={{
						pathname: '/battle/results',
						search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
					}}
				>
					<button>Battle!</button>
				</Link>
			) : null}
		</div>
	);
}
