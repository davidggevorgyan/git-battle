import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route, HashRouter as Router, Redirect, Switch,
} from 'react-router-dom';
import './styles/index.scss';
import Loading from './components/Loading.js';
import Nav from './components/Nav.js';
import NotFound from './components/NotFound.js';

const Battle = React.lazy( () => import( './components/Battle.js' ) );
const BattleResults = React.lazy( () => import( './components/BattleResults.js' ) );
const Popular = React.lazy( () => import( './components/Popular.js' ) );

export default function App() {
	return (
		<Router basename="/">
			<Nav/>
			<React.Suspense fallback={<Loading message='Still Loading'/>} >
				<Switch>
					<Route exact path="/index.html">
						<Redirect to="/" />
					</Route>
					<Route exact path='/' render={ () => ( <Popular languages={ ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'] }/> )}/>
					<Route exact path='/battle' component={Battle} />
					<Route path='/battle/results' component={BattleResults}/>
					<Route><NotFound/></Route>
				</Switch>
			</React.Suspense>
		</Router>
	);

}

ReactDOM.render(
	<App/>,
	document.getElementById( 'app' ),
);
