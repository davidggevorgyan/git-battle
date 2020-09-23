function getErrorMsg( message, object ) {
	if ( message === 'Not found' ) {
		return `${ object } doesn't exist`;
	}
	return message;
}

export function fetchPopularRepositories( language ) {
	const endpoint = window.encodeURI( `https://api.github.com/search/repositories?q=stars:>1+language:${ language }&sort=stars&order=desc&type=Repositories` );

	return fetch( endpoint )
		.then( ( res ) => res.json() )
		.then( ( data ) => {
			if ( !data.items ) {
				throw new Error( getErrorMsg( data.message, language ) );
			}
			return data.items;
		} );
}

function getProfile( username ) {
	return fetch( `https://api.github.com/users/${ username } ` )
		.then( ( res ) => res.json() )
		.then( ( profile ) => {
			if ( profile.message ) {
				throw new Error( `${ getErrorMsg( profile.message, username ) }: Can't get ${ username }` );
			}
			return profile;
		} );
}

function getRepos( username ) {
	return fetch( `https://api.github.com/users/${ username }/repos?per_page=100` )
		.then( ( res ) => res.json() )
		.then( ( repos ) => {
			if ( repos.message ) {
				throw new Error( `${ getErrorMsg( repos.message ) }: Can't get ${ username } repos` );
			}
			return repos;
		} );
}

function getStarsCount( repos ) {
	return repos.reduce( ( stars, repo ) => stars + repo.stargazers_count, 0 );
}

function calculateScore( followers, repos ) {
	return ( followers * 3 ) + getStarsCount( repos );
}

function getUserData( player ) {
	return Promise.all( [
		getProfile( player ),
		getRepos( player ),
	] )
		.then( ( [profile, repos] ) => ( {
			profile,
			score: calculateScore( profile.followers, repos ),
		} ) );
}

function sortPlayers( players ) {
	return players.sort( ( a, b ) => b.score - a.score );
}

export function battle( players ) {
	return Promise.all( [
		getUserData( players[0] ),
		getUserData( players[1] ),
	] )
		.then( ( results ) => sortPlayers( results ) );
}
