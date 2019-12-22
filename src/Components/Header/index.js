// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from '../Nav/index'

const HeaderElement = styled.header`
	display: flex;
	flex-direction: column;
	font-family: 'Merienda', cursive;
	background-color: #fff;
	padding: 20px;
`

const Title = styled.h1`
	font-size: 30px;
`

const Logo = styled.span`
	font-size: 60px;
	font-weight: 700;
	color: gray;
	padding: 0px;
	border-radius: 100px;
	margin-right: 10px;
`

const Letter = styled.span`
font-size: 70px;
	color: var(--color-decorative);
`

const Description = styled.p`
	display: block;
	font-size: 20px;
	margin: 0px;
`

class Header extends Component {
	render() {
		return (
			<div>
				<HeaderElement>
					<Title>
						<Logo><Letter>P</Letter>au<Letter>L</Letter>a</Logo>
						- życie po przeszczepie szpiku...
					</Title>
					{/* <Description>blog osobisty, lifestyle, kulinarny</Description> */}
				</HeaderElement>
				<Nav />
			</div>
		);
	}
}

export default Header