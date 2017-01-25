import '../styles/home';

import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router';

import Loader from '../components/Loader';

import {
  getStore
} from 'tbg-flux-factory';

const appStore = getStore('app');

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillMount() {
    appStore.setState({smallHeader: false})
  }

  render() {
    return (
      <div className='main-app'>
        {(this.props.loading) ? <Loader /> : (
          // add home view here
          <div></div>
        )}
      </div>
    );
  }
}

export default Home;
