import React from 'react'

import {
	Header1,
	Header2,
	Header3,
	Header4,
	Header5,
	Header6,
	Body1,
	Body2,
	Caption,
	Subtitle1,
	Subtitle2,
} from '../src/index'

export default {
	title: 'Typography',
	component: [
		Header1,
		Header2,
		Header3,
		Header4,
		Header5,
		Header6,
		Body1,
		Body2,
		Caption,
		Subtitle1,
		Subtitle2,
	],
}

export const All = () => (
	<div style={{ padding: '10px' }}>
		<Header1>Header 1</Header1>
		<Header2>Header 2</Header2>
		<Header3>Header 3</Header3>
		<Header4>Header 4</Header4>
		<Header5>Header 5</Header5>
		<Header6>Header 6</Header6>
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
		<Body2>
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
		</Body2>
		<Caption>Caption</Caption>
		<br />
		<Subtitle1>Subititle 1</Subtitle1>
		<br />
		<Subtitle2>Subtitle 2</Subtitle2>
	</div>
)
