import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, ButtonGroup, Icon } from '../src/index'

export default {
	title: 'Button',
	component: Button,
}

const ButtonCollection = ({ outlined, solid }) => (
	<>
		<Button outlined={outlined} solid={solid}>
			Default
		</Button>
		<Button outlined={outlined} solid={solid} basic>
			Basic
		</Button>
		<Button outlined={outlined} solid={solid} primary>
			Primary
		</Button>
		<Button outlined={outlined} solid={solid} secondary>
			Secondary
		</Button>
		<Button outlined={outlined} solid={solid} positive>
			Positive
		</Button>
		<Button outlined={outlined} solid={solid} negative>
			Negative
		</Button>
	</>
)

export const Basic = () => (
	<div>
		<div>
			<ButtonCollection />
		</div>
		<div>
			<ButtonCollection outlined />
		</div>
		<div>
			<ButtonCollection solid />
		</div>
		<hr />
		<div style={{ display: 'flex' }}>
			<div
				style={{ display: 'flex', margin: '0px 20px', flexDirection: 'column' }}
			>
				<ButtonCollection />
			</div>
			<div
				style={{ display: 'flex', margin: '0px 20px', flexDirection: 'column' }}
			>
				<ButtonCollection outlined />
			</div>
			<div
				style={{ display: 'flex', margin: '0px 20px', flexDirection: 'column' }}
			>
				<ButtonCollection solid />
			</div>
		</div>
	</div>
)

export const ButtonGroups = () => (
	<div>
		<ButtonGroup>
			<ButtonCollection />
		</ButtonGroup>
		<ButtonGroup>
			<ButtonCollection outlined />
		</ButtonGroup>
		<ButtonGroup>
			<ButtonCollection solid />
		</ButtonGroup>
		<div style={{ display: 'flex' }}>
			<ButtonGroup vertical>
				<ButtonCollection />
			</ButtonGroup>
			<ButtonGroup vertical>
				<ButtonCollection outlined />
			</ButtonGroup>
			<ButtonGroup vertical>
				<ButtonCollection solid />
			</ButtonGroup>
		</div>
		<hr />
		<ButtonGroup>
			<Button solid>Options</Button>
			<Button solid>
				<Icon name="caret-down" />
			</Button>
		</ButtonGroup>
	</div>
)
