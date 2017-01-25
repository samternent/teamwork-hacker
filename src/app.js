import './styles/main'

import React from "react";

import {
  render
} from "react-dom";

import {
  getStore
} from 'tbg-flux-factory';

// Init stores
import authStore from './state/auth';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';


// Import custom containers here
import App from "../src/containers/App";
import Home from '../src/containers/Home';
import Login from '../src/containers/Login';
import Kanban from '../src/apps/Kanban/Kanban';

function requireAuth(nextState, replace) {
  if (!authStore.getStateValue('loggedIn')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={requireAuth}>
        <IndexRoute component={Home} />
        {
          // Add App Routes below
          // Link to them on the Home Container or Nav
        }

        <Route path="kanban" component={Kanban} />
      </Route>
      <Route path="login" component={Login} />
    </Router>
  ),
  document.getElementById('main-app')
);
