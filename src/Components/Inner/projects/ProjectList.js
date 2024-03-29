import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

class ProjectList extends Component {
	render() {
		let { projects } = this.props;
		return (
			<div className="project-list section">
				{ projects && projects.map(project => {
					return (
						<Link to={`/project/${project.id}`}>
							<ProjectSummary project={project} key={project.id} />
						</Link>
					)
				})}
			</div>
		);
	}
}

export default ProjectList