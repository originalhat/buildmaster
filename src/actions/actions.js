export const RECEIVE_BUILDS = 'RECEIVE_BUILDS'

export function addBuild (build) {
  return {
    type: RECEIVE_BUILDS,
    build
  }
}
