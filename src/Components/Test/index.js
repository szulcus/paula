// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import {Editor as DraftEditor, EditorState, RichUtils, convertToRaw} from 'draft-js'
import Toolbar from './components/Toolbar'

const EditorWrapper = styled.div`
	width: 700px;
	display: flex;
	margin: 0 auto;
	height: fit-content;
	flex-direction: column;
	margin-top: 30px;
`
const EditorContainer = styled.div`
	display: flex;
	min-height: 90px;
	border-radius: 0 0 3px 3px;
	background-color: #fff;
	padding: 5px;
	font-size: 17;
	font-weight: 300;
	box-shadow: 0 0 3px 1px rgba(15, 15 0, 0.17);
`

class Test extends Component {
	state = {
		admin: true,
		editorState: EditorState.createEmpty()
	}
	
	updateEditorState = (editorState) => {
		this.setState({editorState})
		console.log(this.state.editorState);
	}
	makeBold = () => {
		this.handleChange(RichUtils.toggleInlineStyle(
			this.state.editorState,
			'BOLD'
		))
	}
	addAdmin = () => {
		this.setState({admin: false});
	}
	render() {
		let raw = convertToRaw(this.state.editorState.getCurrentContent())
		return (
			<EditorWrapper>
				<Toolbar editorState={this.state.editorState} updateEditorState={this.updateEditorState} />
				<EditorContainer>
					<DraftEditor
						readOnly={this.state.isAdmin}
						spellCheck={true}
						placeholder="Wpisz text..."
						onChange={this.updateEditorState}
						editorState={this.state.editorState}
					/>
				</EditorContainer>
				<button onClick={this.addAdmin}>Add admin</button>
			</EditorWrapper>
		);
	}
}

export default Test