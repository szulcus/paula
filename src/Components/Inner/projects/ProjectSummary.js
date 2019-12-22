import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/pl.js'

class ProjectSummary extends Component {
	render() {
		let { project } = this.props;
		moment.locale('pl');
		return (
			<div className="card z-deph-0 project-summary">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title">{project.title}</span>
					<p>Posted by {project.authorFirstName} {project.authorLastName}</p>
					<p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
				</div>
			</div>
		);
	}
}

export default ProjectSummary