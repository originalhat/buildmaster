import React from 'react'
import { connect } from 'react-redux'
import classes from './HomeView.scss'

export class HomeView extends React.Component {
  render () {
    return (
      <div className={classes['HomeView']}>
        <h1>Buildmaster™</h1>
      </div>
    )
  }
}

export default connect(
  (state) => { return state },
  {}
)(HomeView)
