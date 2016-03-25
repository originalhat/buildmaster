import { applyMiddleware, createStore } from 'redux'
// import { syncHistory } from 'react-router-redux'
// import thunk from 'redux-thunk'
// import rootReducer from './rootReducer'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'

// export default function configureStore ({ initialState = {}, history }) {
//   // Sync with router via history instance (main.js)
//   const routerMiddleware = syncHistory(history)

//   // Compose final middleware and use devtools in debug environment
//   let middleware = applyMiddleware(thunk, routerMiddleware)
//   if (__DEBUG__) {
//     const devTools = window.devToolsExtension
//       ? window.devToolsExtension()
//       : require('containers/DevTools').default.instrument()
//     middleware = compose(middleware, devTools)
//   }

//   // Create final store and subscribe router in debug env ie. for devtools
//   const store = middleware(createStore)(rootReducer, initialState)
//   if (__DEBUG__) routerMiddleware.listenForReplays(store, ({ router }) => router.location)

//   if (module.hot) {
//     module.hot.accept('./rootReducer', () => {
//       const nextRootReducer = require('./rootReducer').default

//       store.replaceReducer(nextRootReducer)
//     })
//   }
//   return store
// }

/* PROD */
// let socket = io('http://buildmaster.cfapps.io')

/* NON-PROD */
let socket = io('http://localhost:4000')

let socketIOMiddleware = createSocketIoMiddleware(socket, 'server/')

export default function configureStore () {
  function reducer (state = {}, action) {
    switch (action.type) {
      case 'message':
        return Object.assign({}, {builds: state.builds.concat(action.data.payload)})
      default:
        return state
    }
  }

  const initialState = {builds: []}

  return applyMiddleware(socketIOMiddleware)(createStore)(reducer, initialState)
}
