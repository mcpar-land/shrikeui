import React from 'react'

import { Icon, icons } from '../src/index'

export default {
	title: 'Icon',
	component: Icon,
}

export const AllIcons = () => (
	<div>
		{Object.keys(icons).map(icon => (
			<Icon name={icon} key={icon} style={{ margin: '3px' }} />
		))}
	</div>
)

export const IconSizes = () => (
	<div>
		{[
			'xs',
			'sm',
			'lg',
			'2x',
			'3x',
			'4x',
			'5x',
			'6x',
			'7x',
			'8x',
			'9x',
			'10x',
		].map(size => (
			<Icon name="car" size={size} key={size} />
		))}
	</div>
)
