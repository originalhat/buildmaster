import { applyMiddleware, createStore } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'
import R from 'ramda'
import request from 'superagent'

/* PROD */
let socket = io('https://buildmaster.cfapps.io')

/* NON-PROD */
// let socket = io('https://7454bb99.ngrok.io')

socket.on('connect', () => {
  request
    .post('/connecttoroom')
    .send({
      socketId: socket.io.engine.id,
      room: window.location.pathname.slice(1, -1)
    })
    .end(function (err, res) {
      if (res.statusCode = 200) {
        return
      } else if (res.statusCode === 403) {
        window.alert("oops, you're not authorized")
      } else {
        window.alert("unexpected error " + res.statusCode)
        console.log(res)
        console.log(err)
      }
    })
})

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

        const key = window.location.pathname.slice(1, -1) + ':buildmasterBuilds'
        window.localStorage.setItem(key, JSON.stringify(newState.builds))

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
