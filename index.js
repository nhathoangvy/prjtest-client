import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducer/redux'
import App from './router/App'
import Playlist from './router/Playlists'
import Songs from './router/Songs'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')

import { Router, Route, browserHistory } from 'react-router'

render(
   <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/playlists" component={Playlist}/>
    <Route path="/play" component={Songs}/>
  </Router>
  </Provider>,
	
   rootElement
)