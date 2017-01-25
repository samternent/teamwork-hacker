import './styles/kanban';

import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router';

import Loader from '../../components/Loader';

import {
  getStore
} from 'tbg-flux-factory';
const appStore = getStore('app');

class Kanban extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillMount() {
    appStore.setState({smallHeader: true})
  }

  render() {
    return (
      <div className='main-app'>
        {(this.props.loading) ? <Loader /> : (
          <div>
            <h2>Kanban</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Kanban;
