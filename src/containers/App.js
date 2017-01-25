import '../state/app';

import React, {
  Component,
  cloneElement
} from 'react';

import {
  browserHistory
} from 'react-router';

import Header from '../components/Header'

import {
  getStore,
  addChangeListener
} from 'tbg-flux-factory';

const appStore = getStore('app');
const authStore = getStore('auth');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, appStore.getState(), authStore.getState(), {});

    this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
  }
  componentWillMount() {
    appStore.addChangeListener(this.handleStoreUpdate);
    authStore.addChangeListener(this.handleStoreUpdate);
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this.handleStoreUpdate);
    authStore.removeChangeListener(this.handleStoreUpdate);
  }

  handleStoreUpdate() {
    this.setState(Object.assign({}, appStore.getState(), authStore.getState()), () => {
      if (!this.state.loggedIn) {
        browserHistory.push('/login')
      }
    });
  }

  render() {
    return (
      <div>
        <Header title='Teamwork Hacker' account={this.state.account} />
        {cloneElement(this.props.children, this.state)}
        <footer className='footer'></footer>
      </div>
    );
  }
}

export default App;

App.contextTypes = {
  router: React.PropTypes.object
};
