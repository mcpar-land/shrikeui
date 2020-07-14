import React from 'react'
import { Container, Body1, Header1 } from '../src/index'

export default {
	title: 'Container',
	component: Container,
}

export const LargeContainer = () => {
	const lorem = (
		<Body1>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at eros
			lobortis, sodales leo ut, finibus urna. Curabitur aliquam blandit
			fermentum. Cras eu turpis at libero dignissim tempor. Nunc quis ante ex.
			Ut diam neque, placerat non commodo a, fermentum nec eros. Phasellus
			fringilla rhoncus odio, eget pulvinar lorem ultricies sagittis. Donec
			hendrerit, ante vitae facilisis venenatis, orci lorem aliquam massa, et
			tempus libero turpis eu odio. Orci varius natoque penatibus et magnis dis
			parturient montes, nascetur ridiculus mus. Vivamus ac auctor est, ac
			scelerisque nibh. Nulla consequat, nunc eget aliquam vulputate, felis
			turpis porta ipsum, id cursus orci tellus a erat. Donec et sem vehicula,
			viverra purus quis, mattis nisi. Phasellus porttitor, justo non lacinia
			venenatis, felis tellus condimentum leo, non porttitor enim orci eu
			mauris.
		</Body1>
	)

	return (
		<>
			<Container xl>
				<Header1>xl</Header1>
				{lorem}
			</Container>
			<Container lg>
				<Header1>lg</Header1>
				{lorem}
			</Container>
			<Container md>
				<Header1>md</Header1>
				{lorem}
			</Container>
			<Container sm>
				<Header1>sm</Header1>
				{lorem}
			</Container>
			<Container xs>
				<Header1>xs</Header1>
				{lorem}
			</Container>
		</>
	)
}

export const CenterContainer = () => {
	return (
		<Container.Center style={{ height: '100%' }}>
			<Header1>Centered Container</Header1>
			<p>A center container centers its content inside of it.</p>
		</Container.Center>
	)
}
