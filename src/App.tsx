import React, {ComponentType, ReactNode} from 'react';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import {AppStateContext, defaultState} from './state/globalContextState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './components/Pages/Homepage/Homepage';
import OAuthCallbackPage from './components/Pages/OAuthCallbackPage/OAuthCallbackPage';
import LoadoutOptimizerPage from './components/Pages/LoadoutOptimizerPage/LoadoutOptimizerPage';
import {withAuth} from './components/Auth/Auth';
import {useAppReducer} from './hooks/useAppReducer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export type TRouteItem = [string, ComponentType];

export const authRoutes : TRouteItem[] = [
  ['/d2io/optimizer', LoadoutOptimizerPage]
].map(([path, component]) => ([
  path as string,
  withAuth(component) as ComponentType
]));

export const routes : ReactNode[] = [
  ['/d2io', Homepage],
  ['/d2io/auth', OAuthCallbackPage],
  ...authRoutes
].map(([path, component] : any) => (
  <Route
    key={path}
    component={component}
    path={path}
    exact
  />
));

function App() {
  const [state, dispatch] = useAppReducer();

  return (
    <AppStateContext.Provider value={{state: JSON.parse(JSON.stringify(state)), dispatch}}>
      <ErrorBoundary>
        <Router>
          <Switch>
            {routes}
          </Switch>
        </Router>
      </ErrorBoundary>
    </AppStateContext.Provider>
  );
}

export default App;
