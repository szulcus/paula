// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
// KEYFRAMES
import {opacity} from '../../Styles/Keyframes'

const Background = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--color-white);
	opacity: 0.7;
	animation: opacity 0.2s ease;
	${props =>
		props.preview &&
		css`
			display: block;
		`
	}
`

const ImageElement = styled.div`
	margin: 50px 0;
	cursor: pointer;
`

const Img = styled.img`
	display: block;
	padding: 10px;
	border: 1px solid var(--color-decorative);
	margin: 0 auto;
	transition: height 0.3s ease;
	${props =>
		props.preview &&
		css`
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 90vmin;
		`
	}
`

class Image extends Component {
	state = {
		preview: false
	}
	preview = () => {
		this.state.preview ? this.setState({preview: false}) : this.setState({preview: true})
	}
	exit = () => {
		this.setState({preview: false})
	}
	render() {
		// window.addEventListener('scroll', this.exit);
		return (
			<div>
				<Background onClick={this.exit} preview={this.state.preview}/>
				<ImageElement >
					<Img
						onClick={this.preview}
						title="Kliknij, aby powiększyć"
						src={this.props.src}
						preview={this.state.preview}
					/>
				</ImageElement>
			</div>
		);
	}
}

export default Image