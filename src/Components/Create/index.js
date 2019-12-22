// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createProject } from '../../Store/actions/projectActions'
import {MdNoteAdd} from 'react-icons/md'
import ReactHtmlParser from 'react-html-parser';



const CreateElement = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Card = styled.div`
	width: 300px;
	margin: 20px;
	padding: 10px;
	border: 1px solid var(--color-decorative);
	border-radius: 10px;
`
const Menu = styled.div`
	display: flex;
`
const Add = styled.div`
	margin: 0 10px;
	text-align: center;
`
const Title = styled.h3`
	display: flex;
	align-items: center;
	font-weight: normal;
	color: var(--color-decorative);
`
const Icon = styled(MdNoteAdd)`
	font-size: 25px;
	margin-left: 5px;
	:hover {
		cursor: pointer;
	}
`

class Create extends Component {
	state={
		element1: [
			'paragraph',
			'loreeee'
		],
		element2: [
			'paragraph',
			'loreeeemix'
		],
		element3: [
			'paragraph',
			`<span>Paragraph<br/>And inner paragraph</span>`,
		],
	}
	updateState = (e) => {
		e.persist()
		// console.log(e.target.parentElement.id);
		// const expWord = /[a-zą-żó ,\-'()/]+\n\n/gi;
		this.setState(
			() => {
				return {
					[e.target.parentElement.id]: e.target.value
					// .replace(/(-.*-)*/gi, (x) => x.replace('-', '<b>').replace('-', '</b>'))
					// .replace(/(\/.*\/)*/gi, (x) => x.replace('/', '<i>').replace('/', '</i>'))
				}
			},
			() => {
				
				console.log(this.state.paragraph);
				console.log(this.state.image);
				console.log(this.state.pageLink);
				console.log(this.state.webLink);
			}
		)
	}
	replace = () => {
		// let element = document.createElement("h1");
		// console.log(window.getSelection().getRangeAt(0));
		// document.document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), x => x.toUpperCase());

		var selection = window.getSelection()
 
	var span = '<b>' + selection + '</b>';
	console.log(span);
 
    // document.getElementById('text').innerHTML = document.getElementById('text').innerHTML.replace(new RegExp(highlight , 'g'), span);
	}
	addParagraphToContent = (e) => {
		// let content =+ <Card>fff</Card>
		// this.setState({content: `${this.state.content}${this.state.paragraph}`});
		// let contentElement =+ this.state
		// this.setState((state) => {
		// 	return {content: state.content + this.state.paragraph}
		//   });
		let content = this.state.content;
		this.props.createProject(this.state);
		document.getElementById('paragraphArea').value = '';
	}

	render() {
		// let code = '<Card>coś</Card>';
		document.addEventListener('mouseup', () => {
			console.log(window.getSelection().getRangeAt(0));
			console.log(window.getSelection().toString());
			let element = document.createElement("i");
			window.getSelection().getRangeAt(0).surroundContents(element);
			// i.setAttribute('class', 'hlt')
			// i.appendChild(selectedText);
		})
		// window.addEventListener("mouseup", function(e){console.log(e)});
		return (
			<CreateElement onMouseUp={this.replace}>
				<Menu>
					<Add id="paragraph">
						<Title>Akapit<Icon onClick={this.addParagraphToContent} /></Title>
						<textarea id="paragraphArea" onChange={this.updateState} />
					</Add>
					<Add id="image">
						<Title>Zdjęcie<Icon/></Title>
						<textarea />
					</Add>
					<Add id="pageLink">
						<Title>Link<Icon/></Title>
						<textarea>coś bla bla</textarea>
					</Add>
					<Add id="webLink">
						<Title>Odnościk<Icon/></Title>
						<textarea>coś bla bla</textarea>
					</Add>
				</Menu>
				{/* <Card value={this.state.paragraph}/> */}
				<Card>
					<h3>Akapit</h3>
					<p>
						{ReactHtmlParser(this.state.paragraph)}
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem harum id, quasi provident officia repellendus aperiam quo, odio itaque animi repudiandae consectetur commodi veniam! Fugit sed natus voluptatum atque quibusdam!
					</p>
				</Card>
				<div>{ReactHtmlParser(this.state.element3[1])}</div>
				<textarea id='text' defaultValue="blah blah blah blah blah "></textarea>
			</CreateElement>
		);
	}
}


const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createProject: project => dispatch(createProject(project))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)