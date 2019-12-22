// BASIC
import React from 'react'
import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.main`
	display: flex;
	width: 100vw;
	height: 100vh;
	
	${props =>
		props.default &&
		css`
			padding: 50px;
		`
	}

	${props =>
		props.small &&
		css`
			padding: 20px;
		`
	}

	${props =>
		props.list &&
		css`
			padding: 30px;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (max-width: 768px) {
				flex-direction: column;
				padding: 0 10px;
			}
		`
	}

	${props =>
		props.center &&
		css`
			text-align: center;
			align-items: center;
			flex-direction: column;
		`
	}

	${props =>
		props.scroll &&
		css`
			overflow-y: scroll;
			::-webkit-scrollbar {
				width: 0;
			}
		`
	}
`

// STYLES
export { Wrapper}
// COMPONENTS