import React, {Component} from 'react';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Inner
import Navbar from './Components/Inner/layout/Navbar'
import Dashboard from './Components/Inner/dashboard/Dashboard';
import ProjectDetails from './Components/Inner/projects/ProjectDetails';
import SignIn from './Components/Inner/auth/SignIn'
import SignUp from './Components/Inner/auth/SignUp';
import CreateProject from './Components/Inner/projects/CreateProject';
// Blog
import Header from './Components/Header'
import Content from './Components/Content'
import bgImage from './Components/Images/background.png'
import Create from './Components/Create'
import Editor from './Components/Editor'
import Test from './Components/Test'

import Login from './Components/Login/LoginApp'
import Registration from './Components/Login/Registration'
import UserProfile from './Components/Login/UserProfile'

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Itim|Merienda:400,700&display=swap&subset=latin-ext');
	body {
		margin: 0;
		padding: 0;
		height: 100wh;
		/* background-image: url(${bgImage}); */
		background-color: lightgray;
		background-size: cover;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;

		font-family: 'Itim', cursive;
	}
		*, *::after, *::before {
			box-sizing: border-box;
		}
		* {
			--color-decorative: #8a1b51;
			--color-decorative-dark: #790a40;
			--color-white: #fff;
			--color-black: #000;
		}
`

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{/* <Navbar/> */}
				<Global />
					<Header />
					<Switch>
						<Route exact path='/' component={Content}/>
						<Route exact path='/create' component={Create}/>
						<Route exact path='/editor' component={Editor}/>
						<Route exact path='/test' component={Test}/>

						<Route path="/login" exact component={Login}/>
						<Route path="/rejestracja" exact component={Registration}/>
						<Route path="/users/:id" exact component={UserProfile}/>
						{/* <Route exact path='/' component={Dashboard}/>
						<Route path='/project/:id' component={ProjectDetails}/>
						<Route path='/signin' component={SignIn} />
						<Route path='/signup' component={SignUp} />
						<Route path='/create' component={CreateProject} /> */}
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
