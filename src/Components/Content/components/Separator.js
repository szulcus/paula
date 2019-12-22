// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const SeparatorElement = styled.hr`
	display: block;
	max-width: 1000px;
	margin: 50px auto;
	border: 1px solid var(--color-decorative);
`

class Separator extends Component {
	render() {
		return (
			<SeparatorElement />
		);
	}
}

export default Separator