import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
