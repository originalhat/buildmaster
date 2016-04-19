import R from 'ramda'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ProjectBuild from '../ProjectBuild/ProjectBuild.js'

import classes from './ProjectBuilds.css'

export class ProjectBuilds extends React.Component {
  static propTypes = {
    builds: PropTypes.array,
    params: PropTypes.shape({
      repo: PropTypes.string
    })
  };

  render () {
    const onlySelectedRepo = (build) => this.props.params.repo ? R.propEq('repo', this.props.params.repo, build) : true
    return (
      <div className={classes['ProjectBuilds']}>
        {this.props.builds.filter(onlySelectedRepo).map((build, index) => {
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
