// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavElement = styled.nav`
	width: 100vw;
	background-color: var(--color-decorative);
`
const List = styled.ul`
	display: flex;
	margin: 0;
	list-style: none;
	text-align: center;
	justify-content: center;
	color: var(--color-white);
	font-size: 20px;
`
const Go = styled(Link)`
	text-decoration: none;
	color: var(--color-white);
	:last-child {
		border: none
	}
	transition: all 0.2s ease;
	:hover {
		background-color: var(--color-decorative-dark);
	}
`

const ListItem = styled.li`
	padding: 10px;
	
`


class Nav extends Component {
	render() {
		return (
			<NavElement>
				<List>
					<Go to='/'>
						<ListItem>Strona Główna</ListItem>
					</Go>
					<Go to='/'>
						<ListItem>Spis Treści</ListItem>
					</Go>
					<Go to='/'>
						<ListItem>Przeszczep szpiku kostnego</ListItem>
					</Go>
					<Go to='/'>
						<ListItem>Po wypisie ze szpitala</ListItem>
					</Go>
					<Go to='/'>
						<ListItem>Dieta poprzeszczepowa</ListItem>
					</Go>
					<Go to='/'>
						<ListItem>Inne wpisy</ListItem>
					</Go>
				</List>
			</NavElement>
		);
	}
}

export default Nav