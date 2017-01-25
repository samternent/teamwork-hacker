import '../styles/header';

import React, {Component} from 'react';
import {Link} from 'react-router';

import {getStore} from 'tbg-flux-factory';
const authStore = getStore('auth')
const appStore = getStore('app')

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
      smallHeader: false
    }
    this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
  }

  componentWillMount() {
    appStore.addChangeListener(this.handleStoreUpdate);
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this.handleStoreUpdate);
  }


  handleStoreUpdate() {
    this.setState(appStore.getState(), () => {

    })
  }

  handleLogout() {
    authStore.Actions.logout()
  }

  render () {
    return (
      <header className={`header ${this.state.smallHeader ? 'smaller' : ''}`}>
          <div className='header__user'>
            <div className='header__user__avatar' style={{backgroundImage: `url(${this.props.account['avatar-url']})`}} />
            <div onClick={this.handleLogout} className='header__logout'><i className="fa fa-power-off header__logout__icon" /></div>
          </div>
          <Link to="/">
            <svg className="header__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 150"><title>website-logo-inverted</title><path d="M135.05 35.14a12.06 12.06 0 0 0 2 3 10.13 10.13 0 0 0 2.63 2.12 7.44 7.44 0 0 0 3 .93 5.47 5.47 0 0 0 4.9-2.18 7.12 7.12 0 0 0 1.23-2.67 9.69 9.69 0 0 0 .18-3.34 11.86 11.86 0 0 0-1-3.48 12.15 12.15 0 0 0-1.89-3 10.33 10.33 0 0 0-2.56-2.16 7.62 7.62 0 0 0-3-1 5.69 5.69 0 0 0-2.85.38 5.5 5.5 0 0 0-2.19 1.67 7 7 0 0 0-1.3 2.71 9.65 9.65 0 0 0-.19 3.47 11.84 11.84 0 0 0 1.04 3.55zM158.77 102v-.82q-.11-1.87-.33-3.72c-.15-1.23-.31-2.47-.49-3.72s-.36-2.5-.53-3.78l-2.29-18.47-2.37-19.09a15.44 15.44 0 0 0-.36-1.92 11.94 11.94 0 0 0-.56-1.67 9.79 9.79 0 0 0-.76-1.44 8.68 8.68 0 0 0-.94-1.22 8.45 8.45 0 0 0-1.16-1 9.27 9.27 0 0 0-1.35-.83 10.93 10.93 0 0 0-1.53-.63 13.74 13.74 0 0 0-1.71-.43l-.71-.12-.74-.14-.71-.11-.71-.12-.53-.07-.47-.07h-.88a9.12 9.12 0 0 0-1.54 0 4.65 4.65 0 0 0-1.25.28 3.12 3.12 0 0 0-1 .59 3.28 3.28 0 0 0-.71.93 5 5 0 0 0-.37 1 8.28 8.28 0 0 0-.24 1.18 14.22 14.22 0 0 0-.11 1.42v1.68l2.09 22.76.48 4.83 1 10.93c.38 4 .77 8.15 1.08 11.42s.54 5.71.59 6.39c.09 1 .19 1.83.28 2.58a13.09 13.09 0 0 1 .11 1.93 2.39 2.39 0 0 1-.37 1.3 1.84 1.84 0 0 1-1.15.69h-.11a1.26 1.26 0 0 1-1.05-.93 9.61 9.61 0 0 1-.64-2.16c-.16-.79-.26-1.59-.32-2.18s-.09-1-.09-1c-.19-1.73-.43-3.8-.69-6.15s-.55-5-.86-7.83-.64-5.92-1-9.14-.71-6.61-1.08-10.09l-.39-3.7-.31-3.64-.37-3.44c-.12-1.12-.23-2.2-.35-3.24a20.91 20.91 0 0 0-.51-2.91 13.46 13.46 0 0 0-.93-2.59 9.94 9.94 0 0 0-1.46-2.21 9.48 9.48 0 0 0-2.1-1.78l-.28-.16-.28-.16-.29-.15-.3-.14a14.63 14.63 0 0 0-2-.76c-.68-.2-1.36-.36-2.05-.5s-1.38-.25-2.08-.37-1.4-.23-2.1-.37l-.6-.11-.59-.09-.57-.07h-.54a11.36 11.36 0 0 0-1.85 0 7.64 7.64 0 0 0-1.61.33 5.76 5.76 0 0 0-1.35.63 5.13 5.13 0 0 0-1.09.94 5.73 5.73 0 0 0-.89 1.38 8 8 0 0 0-.56 1.75 12.28 12.28 0 0 0-.23 2.12 19.47 19.47 0 0 0 .1 2.5q.22 2.12.41 4.24t.37 4.24q.18 2.12.34 4.24t.31 4.24c.11 1.59.36 4.38.69 7.8s.76 7.45 1.23 11.51 1 8.15 1.51 11.68a84.1 84.1 0 0 0 1.54 8.33c.17.64.32 1.23.48 1.86s.35 1.31.6 2.13.56 1.78 1 3 .94 2.64 1.6 4.4c-.53-.2-1.21-.27-2-.51a6.14 6.14 0 0 1-2.54-1.54 13.73 13.73 0 0 1-2.79-4.4 48.14 48.14 0 0 1-2.71-9.1c-.25-1.63-.5-3.52-.75-5.59s-.49-4.32-.72-6.67-.47-4.79-.69-7.25-.44-4.93-.64-7.33l-.2-2.36-.16-2.41q-.1-1.18-.19-2.36l-.19-2.36q-.17-2.15-.35-4.31t-.37-4.31q-.19-2.15-.39-4.31t-.43-4.31q-.12-1.16-.3-2.18t-.42-1.94a16 16 0 0 0-.56-1.75 12.53 12.53 0 0 0-.71-1.51 10.39 10.39 0 0 0-1.44-2 11 11 0 0 0-1.9-1.62 15.52 15.52 0 0 0-2.42-1.33 26.66 26.66 0 0 0-3-1.1c-.68-.21-1.33-.44-2.05-.59l-2.09-.53c-.7-.17-1.4-.32-2.11-.47s-1.42-.28-2.13-.4l-.67-.11-.65-.09h-1.25a15.77 15.77 0 0 0-3.46.1 9.28 9.28 0 0 0-2.81.86 7.34 7.34 0 0 0-2.18 1.66 9 9 0 0 0-1.56 2.49 13 13 0 0 0-.53 1.48q-.23.79-.4 1.67c-.11.59-.21 1.21-.28 1.87a19.31 19.31 0 0 0-.16 2v3.18a6.4 6.4 0 0 0 .06 1.07q.13 2 .23 4t.21 3.92q.1 2 .19 3.89t.18 3.88q.11 2.53.23 5t.25 5.06q.13 2.54.3 5.09t.35 5.21c.15 2 .27 4 .4 5.94s.26 4 .44 5.92.39 3.93.69 5.88a58.86 58.86 0 0 0 1.17 5.79 20.6 20.6 0 0 0 2 5.18 14.29 14.29 0 0 0 3.08 3.76 13.84 13.84 0 0 0 4.07 2.41 18.81 18.81 0 0 0 5 1.13l1.46.11h2.58l1.29-.09 1.37-.16 1.55-.22 1.79-.29 2.11-.35c2.18-.37 4.19-.69 6.08-1l5.36-.84c1.7-.27 3.36-.53 5-.81s3.31-.57 5-.89q3.73-.7 7.39-1.35l7.18-1.28 7-1.26q3.48-.63 6.76-1.31a11.45 11.45 0 0 0 3.88-1.5 9.21 9.21 0 0 0 2.74-2.66 12.48 12.48 0 0 0 1.71-3.79 22.86 22.86 0 0 0 .68-5v-3zm-48.91-63.53a13.35 13.35 0 0 0 2.32 3.35 11.63 11.63 0 0 0 3.09 2.35 8.91 8.91 0 0 0 3.51 1 6.89 6.89 0 0 0 3.28-.56 6.56 6.56 0 0 0 2.47-1.93 7.89 7.89 0 0 0 1.45-3 10.35 10.35 0 0 0 .21-3.76 12.72 12.72 0 0 0-1.12-3.92 13.38 13.38 0 0 0-2.2-3.3 11.9 11.9 0 0 0-3-2.4 9.17 9.17 0 0 0-3.49-1.13 7 7 0 0 0-3.35.43 6.53 6.53 0 0 0-2.58 1.88 7.78 7.78 0 0 0-1.54 3 10.32 10.32 0 0 0-.23 3.89 12.75 12.75 0 0 0 1.18 4.1zm-35.39-9a16 16 0 0 0 2.91 4 14.87 14.87 0 0 0 3.89 2.83 11.9 11.9 0 0 0 4.41 1.25 9.12 9.12 0 0 0 4.12-.6 8 8 0 0 0 3.1-2.22 8.91 8.91 0 0 0 1.82-3.49 11.4 11.4 0 0 0 .27-4.43 14.43 14.43 0 0 0-1.39-4.58 16.09 16.09 0 0 0-2.75-3.94 15.08 15.08 0 0 0-3.75-2.89 12.22 12.22 0 0 0-4.38-1.4 9.34 9.34 0 0 0-4.22.43 8.05 8.05 0 0 0-3.27 2.15 8.82 8.82 0 0 0-2 3.55 11.39 11.39 0 0 0-.3 4.59 14.51 14.51 0 0 0 1.54 4.72z" fill="#3facff"></path><path d="M23.99 17.56a17.49 17.49 0 0 0 2.9 3.64 13 13 0 0 0 3.56 2.47l.87.33c.29.11.58.2.87.28s.57.14.86.2.56.09.84.12a9.09 9.09 0 0 0 2.8-.15 8.23 8.23 0 0 0 2.46-1 7.83 7.83 0 0 0 2-1.67 8.06 8.06 0 0 0 1.36-2.28V19c.07-.22.13-.45.19-.68a5.55 5.55 0 0 0 .13-.71c0-.24.06-.49.08-.74s0-.5 0-.76v-1.17c0-.39.08-.76.08-1.15a6.29 6.29 0 0 0-.18-1.14c-.07-.38-.16-.75-.25-1.12a17.42 17.42 0 0 0-1.27-3.41 16.31 16.31 0 0 0-1.92-3 15.18 15.18 0 0 0-2.51-2.47 14.35 14.35 0 0 0-3-1.81L33.13.6l-.66-.22-.66-.17-.66-.11A9.23 9.23 0 0 0 29.6 0a8.77 8.77 0 0 0-1.5.16 8.58 8.58 0 0 0-1.42.41 8.29 8.29 0 0 0-1.31.64l-.1.06-.1.06-.1.07-.08.08-.2.14-.19.15-.19.15-.18.16-.24.25-.26.26-.24.27-.23.29-.15.2-.14.2-.14.21-.19.24a8.28 8.28 0 0 0-.41.79 8.61 8.61 0 0 0-.57 1.74 9.11 9.11 0 0 0-.15 1v1.2a15.81 15.81 0 0 0 .66 4.57 18.78 18.78 0 0 0 1.82 4.26zm42 111.61l-.57-.24-.43-.18-.49-.21-.28-.13-.53-.23-.5-.18-.28-.12a16.52 16.52 0 0 1-3.64-2 10.75 10.75 0 0 1-2.6-2.78 13.48 13.48 0 0 1-1.68-3.95 28 28 0 0 1-.81-5.27q-.1-2-.19-4t-.17-4q-.08-2-.15-4l-.14-4q-.1-2.88-.19-5.72t-.19-5.65q-.06-2.77-.16-5.51t-.23-5.49a11.11 11.11 0 0 1 0-2.35 3.24 3.24 0 0 1 .56-1.49 2.24 2.24 0 0 1 1.14-.78 5.71 5.71 0 0 1 1.79-.21h5a4.55 4.55 0 0 0 1.52-.23 3.82 3.82 0 0 0 1.22-.58 4.59 4.59 0 0 0 1-1.17 6.91 6.91 0 0 0 .67-1.61 8.72 8.72 0 0 0 .33-1.73 6.92 6.92 0 0 0-.06-1.64 6.41 6.41 0 0 0-.46-1.56 7.14 7.14 0 0 0-.88-1.47l-.12-.15-.12-.15-.13-.15-.13-.15a8.8 8.8 0 0 0-1.28-1.14 8.43 8.43 0 0 0-1.37-.81 9.71 9.71 0 0 0-1.45-.54 14.14 14.14 0 0 0-1.55-.34 21.91 21.91 0 0 1-3.69-.83A4.14 4.14 0 0 1 52.67 55a5.77 5.77 0 0 1-.9-2.67 38.89 38.89 0 0 1-.23-4.59v-2.08a12.29 12.29 0 0 0-.12-1.72c-.07-.57-.16-1.12-.27-1.67s-.25-1.08-.41-1.61-.35-1-.55-1.54a16.08 16.08 0 0 0-1.3-2.42 14.81 14.81 0 0 0-1.65-2.14 14 14 0 0 0-2-1.79 13.56 13.56 0 0 0-2.36-1.38q-2-.94-4.14-1.74t-4.27-1.43c-1.45-.42-2.91-.78-4.4-1.07a45.61 45.61 0 0 0-4.53-.65h-2a11.27 11.27 0 0 0-1.31 0 10.25 10.25 0 0 0-1.26.17 9.47 9.47 0 0 0-2.31.79 9.24 9.24 0 0 0-1.88 1.24 9.62 9.62 0 0 0-.82.79 9.72 9.72 0 0 0-.73.89 10.67 10.67 0 0 0-.84 1.36 11.55 11.55 0 0 0-.65 1.54 12.71 12.71 0 0 0-.49 1.72 14.2 14.2 0 0 0-.26 1.66q-.06.92-.09 1.85t-.05 1.86v3.72a12.81 12.81 0 0 1-.06 1.59c-.06.47-.05.88-.09 1.24a6.35 6.35 0 0 1-.17.94 2.5 2.5 0 0 1-.28.68 1.49 1.49 0 0 1-.59.55 2.77 2.77 0 0 1-.93.27 10.37 10.37 0 0 1-1.37.07h-1.9a7.42 7.42 0 0 0-1.7.14 6.93 6.93 0 0 0-1.55.5 6.8 6.8 0 0 0-1.36.83 7.06 7.06 0 0 0-1.56 1.72 1.93 1.93 0 0 0-.45.61c-.11.22-.22.46-.31.69s-.17.48-.25.74a5.19 5.19 0 0 0-.16.69c0 .23-.08.47-.11.72a1.44 1.44 0 0 0 0 .37v1.14a9.62 9.62 0 0 0 .74 3.2 8.85 8.85 0 0 0 1.74 2.65 9.57 9.57 0 0 0 2.68 1.95 12 12 0 0 0 3.52 1.08 7.17 7.17 0 0 1 2.15.63 3.69 3.69 0 0 1 1.36 1.13 4.42 4.42 0 0 1 .71 1.68 10.33 10.33 0 0 1 .19 2.29q0 3.45-.08 6.89T12.99 86v21.51c0 1.63.07 3.26.19 4.88s.27 3.22.5 4.81.51 3.16.88 4.71a44.88 44.88 0 0 0 1.32 4.57 16.89 16.89 0 0 0 1.53 3.28 13.66 13.66 0 0 0 2.06 2.6 13.29 13.29 0 0 0 2.55 2 15.6 15.6 0 0 0 3 1.37 20 20 0 0 0 2.64.69 22 22 0 0 0 2.65.34 25.75 25.75 0 0 0 2.65 0 16.78 16.78 0 0 0 2.64-.21h.14l.89-.12.88-.14.88-.16.88-.18q3.16-.67 6.26-1.37l6.12-1.4 6-1.41 5.91-1.39.84-.2.84-.2.83-.2.83-.19z" fill="#6ee549"></path></svg>
          </Link>
          <h1 className="header__title">{this.props.title}</h1>
      </header>
    );
  }
}

export default Header
