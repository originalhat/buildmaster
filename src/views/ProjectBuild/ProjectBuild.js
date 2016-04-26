import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'

import classes from './ProjectBuild.css'

export class ProjectBuild extends React.Component {
  static propTypes = {
    repo: React.PropTypes.string,
    outcome: React.PropTypes.string,
    branch: React.PropTypes.string,
    author: React.PropTypes.string,
    coauthor: React.PropTypes.string,
    timestamp: React.PropTypes.number
  };

  render () {
    const projectBuildClasses = {
      [classes['ProjectBuild']]: true,
      [classes['ProjectBuild--success']]: this.props.outcome === 'success',
      [classes['ProjectBuild--failure']]: this.props.outcome === 'failure'
    }

    return (
      <div className={cn(projectBuildClasses)}>
        <div className={classes['ProjectBuild__branch']}>{this.props.branch}</div>
        <div className={classes['ProjectBuild__repo']}>{this.props.repo}</div>
        <div className={classes['ProjectBuild__author']}>
          {this.authorString_(this.props.author, this.props.coauthor)}
        </div>
        <div className={classes['ProjectBuild__time']}>
          {(new Date(this.props.timestamp)).toGMTString()}
        </div>
      </div>
    )
  }

  authorString_ (author, coauthor) {
    if (author === coauthor) {
      return author
    } else {
      return `${author} and ${coauthor}`
    }
  }
}

export default connect(
  (state) => { return state },
  {}
)(ProjectBuild)
