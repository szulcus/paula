// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageLinkElement = styled(Link)`
	display: contents;
	color: var(--color-decorative);
	transition: opacity 0.2s ease;
	:hover {
		opacity: 0.5
	}
`

class PageLink extends Component {
	render() {
		return (
			<PageLinkElement to={this.props.to} title={this.props.title}>
				{this.props.content}
			</PageLinkElement>
		);
	}
}

export default PageLink