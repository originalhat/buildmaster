import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ProjectBuild from '../ProjectBuild/ProjectBuild.js'

import classes from './ProjectBuilds.css'

export class ProjectBuilds extends React.Component {
  static propTypes = {
    builds: PropTypes.array
  };

  render () {
    return (
      <div className={classes['ProjectBuilds']}>
        {this.props.builds.map((build, index) => {
          return (
            <ProjectBuild
              key={index}
              outcome={build.outcome}
              branch={build.branch}
              author={build.author}
              coauthor={build.coauthor}
              repo={build.repo}
            />
          )
        })}
      </div>
    )
  }
}

export default connect(
  (state) => { return state },
  {}
)(ProjectBuilds)
