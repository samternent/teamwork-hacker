import {createStore} from 'tbg-flux-factory';
import request from 'reqwest';

const appStore = createStore({
  name: 'app',
  data: {
    loading: false,
    smallHeader: false
  },
  actions: {
    server: {},
    view: {}
  }
});

export default appStore;
