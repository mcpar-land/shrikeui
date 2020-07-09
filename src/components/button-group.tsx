import React from 'react'
import styled from 'styled-components'
import { Button } from './button'

type ButtonGroupProps = {
	vertical?: boolean
}

let noneVert = (p: any) => (p.vertical ? '0px' : 'default')
let noneHor = (p: any) => (p.vertical ? 'default' : '0px')

const ButtonGroupBase = styled.div<ButtonGroupProps>`
	display: flex;
	flex-direction: ${p => (p.vertical ? 'column' : 'row')};

	--none-vert: ${p => (p.vertical ? '0px' : 'default')};
	--none-hor: ${p => (p.vertical ? 'default' : '0px')};

	& ${Button}:first-child {
		border-bottom-right-radius: 0px;
		border-top-right-radius: ${noneHor};
		margin-right: ${noneHor};
		border-bottom-left-radius: ${noneVert};
		margin-bottom: ${noneVert};
	}

	& ${Button}:not(:first-child):not(:last-child) {
		border-radius: 0px;
		margin-top: ${noneVert};
		margin-bottom: ${noneVert};
		margin-left: ${noneHor};
		margin-right: ${noneHor};
	}

	& ${Button}:last-child {
		border-top-left-radius: 0px;
		border-top-right-radius: ${p => (!p.vertical ? 'default' : '0px')};
		margin-left: ${noneHor};
		border-bottom-left-radius: ${p => (!p.vertical ? '0px' : 'default')};
		margin-top: ${noneVert};
	}

	&.horizontal ${Button}.outlined:first-child:before {
		border-right: none;
	}

	&.horizontal ${Button}.outlined:not(:first-child):not(:last-child):before {
		border-left: none;
		border-right: none;
	}

	&.horizontal ${Button}.outlined:last-child:before {
		border-left: none;
	}

	&.vertical ${Button}.outlined:first-child:before {
		border-bottom: none;
	}

	&.vertical ${Button}.outlined:not(:first-child):not(:last-child):before {
		border-top: none;
		border-bottom: none;
	}

	&.vertical ${Button}.outlined:last-child:before {
		border-top: none;
	}
`

const ButtonGroup = styled(ButtonGroupBase).attrs<ButtonGroupProps>(props => ({
	className: props.vertical ? 'vertical' : 'horizontal',
}))``

export { ButtonGroup }
