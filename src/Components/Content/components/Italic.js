// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const ItalicElement = styled.span`
	font-style: italic;
`

class Italic extends Component {
	render() {
		return (
			<ItalicElement>
				{this.props.content}
			</ItalicElement>
		);
	}
}

export default Italic