import { fetchPopularRepositories, battle } from '../api.js';

global.fetch = jest.fn( () => Promise.resolve( {
	json: () => Promise.resolve( { rates: { CAD: 1.42 } } ),
} ) );

const user = {
	login: 'davidggevorgyan',
	avatar_url: 'https://avatars3.githubusercontent.com/u/46099506?v=4',
	name: 'user',
	blog: 'https://gevorgyan.dev',
	location: 'Yerevan',
	public_repos: 6,
	public_gists: 0,
	followers: 3,
	following: 2,
};

const repos = [
	{
		id: 295379554,
		name: 'git-battle',
		stargazers_count: 1,
	},
	{
		id: 287004026,
		name: 'tetris-js-flex',
		stargazers_count: 3,
	},
];

it( 'should get popular repos for specified language', async () => {
	fetch.mockImplementationOnce( () => Promise.resolve( { json: () => ( { items: [] } ) } ) );
	const data = await fetchPopularRepositories( 'JavaScript' );
	expect( Array.isArray( data ) ).toEqual( true );
} );

it( 'should throw an error if Popular repos are not returned', async () => {
	let message = 'A test message';
	expect.assertions( 2 );
	fetch.mockReturnValue( Promise.resolve( { json: () => ( { message } ) } ) );

	try {
		await fetchPopularRepositories( 'JavaScript' );
	} catch ( e ) {
		expect( e.message ).toEqual( message );
	}

	message = 'Not found';
	try {
		await fetchPopularRepositories( 'JS' );
	} catch ( e ) {
		expect( e.message ).toEqual( 'JS doesn\'t exist' );
	}
} );

it( 'should throw an error if user repos are not returned', async () => {
	const message = 'A test message';
	const userName = 'asd';

	expect.assertions( 1 );
	fetch.mockReturnValue( Promise.resolve( { json: () => ( { message } ) } ) );

	try {
		await battle( ['asd', 'dsa'] );
	} catch ( e ) {
		expect( e.message ).toEqual( `${ message }: Can't get ${ userName }` );
	}

} );

it( 'should throw an error if user info is not returned', async () => {
	const message = 'A test message';
	const userName = 'asd';

	expect.assertions( 1 );

	fetch
		.mockReturnValueOnce( Promise.resolve( {
			json: () => user,
		} ) )
		.mockReturnValueOnce( Promise.resolve( {
			json: () => ( { message } ),
		} ) );

	try {
		await battle( ['asd', 'dsa'] );
	} catch ( e ) {
		expect( e.message ).toEqual( `${ message }: Can't get ${ userName } repos` );
	}

} );

it( 'should get winner first and looser second', async () => {
	const winner = { ...user };
	winner.followers += 100;
	winner.name = 'winner';
	fetch
		.mockReturnValueOnce( Promise.resolve( {
			json: () => user,
		} ) )
		.mockReturnValueOnce( Promise.resolve( {
			json: () => repos,
		} ) )
		.mockReturnValueOnce( Promise.resolve( {
			json: () => winner,
		} ) )
		.mockReturnValueOnce( Promise.resolve( {
			json: () => repos,
		} ) );
	const battleResults = await battle( ['asd', 'dsa'] );
	expect( battleResults[0].profile.name ).toBe( 'winner' );
	expect( battleResults[1].profile.name ).toBe( 'user' );
} );
