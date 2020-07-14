import React from 'react'
import { Menu, Container, Header4 } from '../src/index'
import styled from 'styled-components'

export default {
	title: 'Menu',
	component: undefined,
}

const CORNER_PIN_SIZE = 400

const CornerPinWrapper = styled.div`
	max-height: ${CORNER_PIN_SIZE}px;
	max-width: ${CORNER_PIN_SIZE}px;
	overflow: scroll;
`

const CornerPinInside = styled.div`
	width: ${CORNER_PIN_SIZE * 2}px;
	height: ${CORNER_PIN_SIZE * 2}px;
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
	</Container.Center>
)

const Pin = ({ style, name }) => (
	<>
		<Header4>{name}</Header4>
		<CornerPinWrapper>
			<CornerPinInside>
				<Menu
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
	</>
)

export const MenuTopRight = () => (
	<>
		<Pin name="Top Left" />
		<Pin name="Top Right" style={{ right: '0px' }} />
		<Pin name="Bottom Left" style={{ bottom: '0px' }} />
		<Pin name="Bottom Right" style={{ bottom: '0px', right: '0px' }} />
		<Pin name="Middle Left" style={{ bottom: '50%' }} />
	</>
)
