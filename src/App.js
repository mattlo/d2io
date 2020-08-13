import React from 'react';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import {AppStateContext} from './state';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './Components/Pages/Homepage/Homepage';
import OAuthCallbackPage from './Components/Pages/OAuthCallbackPage/OAuthCallbackPage';

export const routes = [
  ['/d2io', Homepage],
  ['/d2io/auth', OAuthCallbackPage]
].map(([path, component]) => (
  <Route
    key={path}
    component={component}
    path={path}
    exact
  />
))

function App() {
  return (
    <AppStateContext.Provider>
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </AppStateContext.Provider>
  );
}

export default App;
