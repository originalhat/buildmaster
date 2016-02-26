import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export class ProjectBuilds extends React.Component {
  static propTypes = {
    builds: PropTypes.array
  };

  render () {
    console.log('props: ', this.props.builds[0])
    return (
      <ol>
        {this.props.builds.map((build) => {
          return (<li>{build.branch}</li>)
        })}
      </ol>
    )
  }
}

export default connect(
  (state) => { return state },
  {}
)(ProjectBuilds)
