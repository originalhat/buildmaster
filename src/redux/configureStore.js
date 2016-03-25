import { applyMiddleware, createStore } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'

/* PROD */
let socket = io('https://buildmaster.cfapps.io')

/* NON-PROD */
// let socket = io('http://localhost:4000')

let socketIOMiddleware = createSocketIoMiddleware(socket, 'server/')

export default function configureStore () {
  function reducer (state = {}, action) {
    switch (action.type) {
      case 'message':
        return Object.assign({}, {
          builds: limitBuildCount(
            combinedPayloadState(action.data.payload, state.builds)
          )
        })
      default:
        return state
    }
  }

  function combinedPayloadState (payload, builds) {
    return R.unionWith(R.eqBy(R.prop('branch')), [payload], builds)
  }

  function limitBuildCount (builds) {
    return R.slice(0, 3, builds)
  }

  const initialState = {builds: []}

  return applyMiddleware(socketIOMiddleware)(createStore)(reducer, initialState)
}
