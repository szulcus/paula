// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const WebLinkElement = styled.a`
	display: contents;
	color: var(--color-decorative);
	transition: opacity 0.2s ease;
	:hover {
		opacity: 0.5
	}
`

class WebLink extends Component {
	render() {
		return (
			<WebLinkElement href={this.props.href} alt={this.props.content} title={this.props.title} target="_blank">
				{this.props.content}
			</WebLinkElement>
		);
	}
}

export default WebLink