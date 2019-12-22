import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SignedInLinks'
import SingedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends Component {
	render() {
		const { auth, profile } = this.props;
		const links = auth.uid ? <SingedInLinks profile={profile} /> : <SingedOutLinks />;
		console.log(auth);
		return (
			<nav className="nav-wrapper grey darken-3">
				<div className="container">
					<Link to="/" className="brand-logo">MarioPlan</Link>
					{links}
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Navbar)