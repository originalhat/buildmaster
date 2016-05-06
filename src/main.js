import React from 'react'
import ReactDOM from 'react-dom'
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import makeRoutes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import * as actions from './actions/actions'

const historyConfig = { basename: __BASENAME__ }
const history = useRouterHistory(createHistory)(historyConfig)

const initialState = window.__INITIAL_STATE__
const store = configureStore({ initialState, history })

const routes = makeRoutes(store)

const key = window.location.pathname.slice(1, -1) + ':buildmasterBuilds'
const savedItems = JSON.parse(localStorage.getItem(key))
store.dispatch(actions.fetchBuildsFromLocalStorage(savedItems))

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
