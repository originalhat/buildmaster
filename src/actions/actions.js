export const RECEIVE_BUILDS = 'RECEIVE_BUILDS'
export const FETCH_BUILDS = 'FETCH_BUILDS'

export function addBuild (build) {
  return {
    type: RECEIVE_BUILDS,
    build
  }
}

export function fetchBuildsFromLocalStorage (builds) {
  return {
    type: FETCH_BUILDS,
    builds: builds
  }
}
