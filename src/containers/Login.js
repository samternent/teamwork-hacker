import '../styles/login';

import React, {Component} from 'react';
import {
  Link,
  browserHistory
} from 'react-router';

import Loader from '../components/Loader'

import {
  getStore
} from 'tbg-flux-factory';
const authStore = getStore('auth');

class AllStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
  }
  componentWillMount() {
    authStore.addChangeListener(this.handleStoreUpdate);
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this.handleStoreUpdate);
  }

  componentDidMount() {
    authStore.Actions.getSession()
  }

  handleStoreUpdate() {
    this.setState(authStore.getState(), () => {
      if (!this.state.loggedIn) return false
      const { location } = this.props;

      if (location.state && location.state.nextPathname) {
        browserHistory.push(location.state.nextPathname)
      } else {
        browserHistory.push('/');

      }
    })
  }

  handleLogin(e) {
    e.preventDefault()

    const teamname = this.refs.teamname.value;
    const APIKey = this.refs.key.value;

    authStore.Actions.login({teamname, APIKey})
  }

  render() {
    return (
      <div className='main-app'>
        {(this.state.loading) ? <Loader /> : (
          <form>
            <input ref="teamname" className="login__input" placeholder="team name" type='text'/>
            <input ref="key" className="login__input" placeholder="API Key" type='text'/>
            <button className="btn login__button" onClick={this.handleLogin}>
              Login
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default AllStatus;
