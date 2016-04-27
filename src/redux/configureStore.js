import { applyMiddleware, createStore } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'
import R from 'ramda'

/* PROD */
let socket = io('https://buildmaster.cfapps.io')

/* NON-PROD */
// let socket = io('http://localhost:4000')

let socketIOMiddleware = createSocketIoMiddleware(socket, 'server/')

export default function configureStore () {
  function reducer (state = {}, action) {
    let filterBuilds = R.compose(
      R.reverse,
      mastersFirst,
      limitBuildCount,
      removeGreenLatest,
      combinedPayloadState
    )

    switch (action.type) {
      case 'message':
        const newState = Object.assign({}, {
          builds: filterBuilds([action.data], state.builds)
        })

        window.localStorage.setItem('buildmasterBuilds', JSON.stringify(newState.builds))

        return newState

      case 'FETCH_BUILDS':
        return {builds: filterBuilds([], action.builds) || []}

      default:
        return state
    }
  }

  const mastersFirst = R.sortBy((build) => {
    if (R.propEq('branch', 'master', build)) {
      return 8640000000000000
    } else {
      return build.timestamp
    }
  })

  const limitBuildCount = R.take(30)

  const removeGreenLatest = R.reject(R.propEq('branch', 'green-latest'))

  function combinedPayloadState (payload, builds) {
    let isUniqueByRepoAndBranch = R.allPass([
      R.eqBy(R.prop('repo')),
      R.eqBy(R.prop('branch'))
    ])

    return R.unionWith(isUniqueByRepoAndBranch, payload, builds)
  }

  const initialState = {builds: []}

  return applyMiddleware(socketIOMiddleware)(createStore)(reducer, initialState)
}
