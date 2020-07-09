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
		<ButtonGroup positive outlined>
			<ButtonCollection />
		</ButtonGroup>
		<ButtonGroup horizontal solid>
			<ButtonCollection />
		</ButtonGroup>
		<div style={{ display: 'flex' }}>
			<ButtonGroup vertical>
				<ButtonCollection />
			</ButtonGroup>
			<ButtonGroup vertical outlined>
				<ButtonCollection />
			</ButtonGroup>
			<ButtonGroup vertical solid>
				<ButtonCollection />
			</ButtonGroup>
		</div>
		<hr />
		<ButtonGroup solid>
			<Button>Options</Button>
			<Button>
				<Icon name="caret-down" />
			</Button>
		</ButtonGroup>
		<hr />
		<h3>Default</h3>
		<ButtonGroup>
			<Button>Default</Button>
			<Button simple>Simple</Button>
			<Button outlined>Outlined</Button>
			<Button solid>Solid</Button>
		</ButtonGroup>
		<h3>Simple</h3>
		<ButtonGroup simple>
			<Button>Default</Button>
			<Button simple>Simple</Button>
			<Button outlined>Outlined</Button>
			<Button solid>Solid</Button>
		</ButtonGroup>
		<h3>Outlined</h3>
		<ButtonGroup outlined>
			<Button>Default</Button>
			<Button simple>Simple</Button>
			<Button outlined>Outlined</Button>
			<Button solid>Solid</Button>
		</ButtonGroup>
		<h3>Solid</h3>
		<ButtonGroup solid>
			<Button>Default</Button>
			<Button simple>Simple</Button>
			<Button outlined>Outlined</Button>
			<Button solid>Solid</Button>
		</ButtonGroup>
	</div>
)
