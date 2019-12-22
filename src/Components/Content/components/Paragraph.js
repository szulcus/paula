// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const ParagraphElement = styled.p`
	margin: 20px 0;
	margin: ${props => `${props.margins}px 0`};
	color: ${props => props.color || "black"};
	font-size: 25px;
	font-size: ${props => `${props.size}px`};
	${props =>
		props.center &&
		css`
			text-align: center;
		`
	}
	${props =>
		props.justify &&
		css`
			text-align: justify;
		`
	}
	${props =>
		props.italic &&
		css`
			font-style: italic;
		`
	}
	${props =>
		props.bold &&
		css`
			font-weight: bold;
		`
	}
	${props =>
		props.underline &&
		css`
			text-decoration: underline;
		`
	}
	${props =>
		props.noSpace &&
		css`
			margin-bottom: -20px;
		`
	}
`

class Paragraph extends Component {
	render() {
		return (
			<ParagraphElement
				size={this.props.size}
				color={this.props.color}
				center={this.props.center}
				justify={this.props.justify}
				italic={this.props.italic}
				bold={this.props.bold}
				underline={this.props.underline}

				margins={this.props.margins}
				noSpace={this.props.noSpace}
			>
				{this.props.content}
			</ParagraphElement>
		);
	}
}

export default Paragraph