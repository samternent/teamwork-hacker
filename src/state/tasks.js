import {createStore, getStore} from 'tbg-flux-factory';
import request from 'reqwest';

var authStore = getStore('auth');

function fetchTasks () {
  const { baseURL, auth_token } = authStore.getState()

  return request({
    url: `${baseURL}/tasks.json`,
    type: 'json',
    method: 'get',
    contentType: 'application/json',
    headers: {
      "Authorization": "BASIC " +  auth_token,
    },
    crossOrigin: true,
  })
}

const tasks = createStore({
  name: 'tasks',
  data: {
    loading: false,
    tasks: []
  },
  actions: {
    server: {
      getTasks() {
        this.setState({ loading: true })

        fetchTasks()
        .then((resp) => {
          this.setState({ tasks: resp.events })
        })
        .always( () => {
          this.setState({ loading: false })
        })
      }
    },
    view: {}
  }
});

export default webhooks;
