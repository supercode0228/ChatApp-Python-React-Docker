import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import configureStore from './store';
import routes from './routes';

import {API_URL} from './constants';

import io from 'socket.io-client';

class App extends Component {

	componentDidMount() {
		const socket = io.connect(API_URL);
		socket.emit('connected');
	}

	render() {
		return (
			<Provider store={configureStore()}>
				<BrowserRouter>
					<Switch>
						{
							routes.map(route => {
								return(
									<Route
										path={route.path}
										component={route.component}
										key={route.name}
									/>
								);
							})
						}
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
