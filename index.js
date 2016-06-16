import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// Containers and reducers
import App from './containers/App'
import quotesApp from './reducers'

// Routing
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Components
import Foo from './components/Foo'
import Tasks from './components/Tasks'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)
let store = createStoreWithMiddleware(quotesApp, window.devToolsExtension ? window.devToolsExtension() : f => f)

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
      <Router history={hashHistory} >
        <Route path="/" component={App}>
            <Route path="/tasks" component={Tasks}  />
        </Route>
    </Router>
  </Provider>,
  rootElement
)
