import React from 'react'
import {
	Menu,
	Container,
	Header4,
	Button,
	Icon,
	ButtonGroup,
} from '../src/index'
import styled from 'styled-components'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
	title: 'Menu',
	component: Menu,
	decorators: [withKnobs],
}

const CORNER_PIN_SIZE = 400

const CornerPinWrapper = styled.div`
	max-height: ${CORNER_PIN_SIZE}px;
	max-width: ${CORNER_PIN_SIZE}px;
	overflow: scroll;
`

const CornerPinInside = styled.div`
	width: ${CORNER_PIN_SIZE * 1.35}px;
	height: ${CORNER_PIN_SIZE * 1.35}px;
	position: relative;
`

export const BasicMenu = () => (
	<Container.Center style={{ minHeight: '400px' }}>
		<Menu>
			<Menu.Item>This is a menu item.</Menu.Item>
			<Menu.Item>This is another menu item.</Menu.Item>
			<Menu.Menu>
				<Menu.Item>This is a submenu item.</Menu.Item>
				<Menu.Item>This is another submenu item.</Menu.Item>
			</Menu.Menu>
		</Menu>
		<ButtonGroup solid>
			<Button>Menu Button Group</Button>
			<Menu
				anchor={
					<Button>
						<Icon name="caret-down" />
					</Button>
				}
			>
				<Menu.Item>This is a menu item.</Menu.Item>
				<Menu.Item>This is another menu item.</Menu.Item>
				<Menu.Menu>
					<Menu.Item>This is a submenu item.</Menu.Item>
					<Menu.Item>This is another submenu item.</Menu.Item>
				</Menu.Menu>
			</Menu>
		</ButtonGroup>
	</Container.Center>
)

const Pin = ({ style, name, arrow }) => (
	<div>
		<Header4>{name}</Header4>
		<CornerPinWrapper>
			<CornerPinInside>
				<Menu
					arrow={arrow}
					anchor={<h1 style={{ position: 'absolute', ...style }}>{name}</h1>}
				>
					<Menu.Item>This is a menu item.</Menu.Item>
					<Menu.Item>This is another menu item.</Menu.Item>
					<Menu.Menu>
						<Menu.Item>This is a submenu item.</Menu.Item>
						<Menu.Item>This is another submenu item.</Menu.Item>
					</Menu.Menu>
				</Menu>
			</CornerPinInside>
		</CornerPinWrapper>
	</div>
)

const PinWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export const MenuPinning = () => {
	let arrow = boolean('Arrow', false, '1')

	return (
		<PinWrapper>
			<Pin arrow={arrow} name="Top Left" />
			<Pin arrow={arrow} name="Top Right" style={{ right: '0px' }} />
			<Pin arrow={arrow} name="Bottom Left" style={{ bottom: '0px' }} />
			<Pin
				arrow={arrow}
				name="Bottom Right"
				style={{ bottom: '0px', right: '0px' }}
			/>
			<Pin arrow={arrow} name="Middle Left" style={{ bottom: '50%' }} />
		</PinWrapper>
	)
}
