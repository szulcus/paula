import React from 'react'
import styled, {css} from 'styled-components'
import {inlineStyles} from './constants'
import { RichUtils } from 'draft-js'

const Container = styled.div`
	display: flex;
	margin-right: 7px;
`

const ToolbarItem = styled.div`
	width: 28px;
	height: 27px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	${props =>
		props.isActive &&
		css`
			transform: translateY(1px);
			color: #34495e;
			border: 1px solid var(--color-decorative);
		`
	}
	:hover {
		transform: translateY(1px);
		color: #34495e;
	}
`


export function RenderInlineStyles(props) {
	const {editorState, updateEditorState} = props;
	const applyStyle = (style) => {
		updateEditorState(RichUtils.toggleInlineStyle(editorState, style))
	}
	const isActive = style => {
		const currentStyle = editorState.getCurrentInlineStyle();
		return currentStyle.has(style)
	}
	return <Container>
		{inlineStyles.map((item, idx) => {
			return (
				<ToolbarItem
					isActive={isActive(item.style)}
					key={`${item.label}-${idx}`}
					onClick={() => applyStyle(item.style)}
				>
					{item.icon || item.label}
				</ToolbarItem>
			);
		})}
	</Container>
}