import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../Store/actions/authActions'

class SignedInLinks extends Component {
	render() {
		return (
			<ul className="right">
				<li>
					<NavLink to="/create">New Project</NavLink>
				</li>
				<li>
					<a onClick={this.props.signOut}>Log Out</a>
				</li>
				<li>
					<NavLink to="/" className="btn btn-floating pink lighten-1">{this.props.profile.initials}</NavLink>
				</li>
			</ul>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInLinks)