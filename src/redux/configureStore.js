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
    switch (action.type) {
      case 'message':
        let filterBuilds = R.compose(
          mastersFirst,
          R.sortBy(R.prop('timestamp')),
          limitBuildCount,
          removeGreenLatest,
          combinedPayloadState
        )

        const newState = Object.assign({}, {
          builds: filterBuilds([action.data], state.builds)
        })

        window.localStorage.setItem('buildmasterBuilds', JSON.stringify(newState.builds))

        return newState

      case 'FETCH_BUILDS':
        return {builds: action.builds || []}

      default:
        return state
    }
  }

  const mastersFirst = R.sort(R.ifElse(
    R.propEq('branch', 'master'),
    R.always(-1),
    R.always(1))
  )

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
