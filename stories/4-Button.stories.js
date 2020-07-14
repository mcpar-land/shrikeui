import React from 'react'
import { action, actions } from '@storybook/addon-actions'
import { Button, ButtonGroup, Icon } from '../src/index'

export default {
	title: 'Button',
	component: Button,
}

const e = actions('onClick', 'onFocus')

const ButtonCollection = ({ outlined, solid }) => (
	<>
		<Button {...e} outlined={outlined} solid={solid}>
			Default
		</Button>
		<Button {...e} outlined={outlined} solid={solid} basic>
			Basic
		</Button>
		<Button {...e} outlined={outlined} solid={solid} primary>
			Primary
		</Button>
		<Button {...e} outlined={outlined} solid={solid} secondary>
			Secondary
		</Button>
		<Button {...e} outlined={outlined} solid={solid} positive>
			Positive
		</Button>
		<Button {...e} outlined={outlined} solid={solid} negative>
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
			<Button {...e}>Default</Button>
			<Button {...e} simple>
				Simple
			</Button>
			<Button {...e} outlined>
				Outlined
			</Button>
			<Button {...e} solid>
				Solid
			</Button>
		</ButtonGroup>
		<h3>Simple</h3>
		<ButtonGroup simple>
			<Button {...e}>Default</Button>
			<Button {...e} simple>
				Simple
			</Button>
			<Button {...e} outlined>
				Outlined
			</Button>
			<Button {...e} solid>
				Solid
			</Button>
		</ButtonGroup>
		<h3>Outlined</h3>
		<ButtonGroup outlined>
			<Button {...e}>Default</Button>
			<Button {...e} simple>
				Simple
			</Button>
			<Button {...e} outlined>
				Outlined
			</Button>
			<Button {...e} solid>
				Solid
			</Button>
		</ButtonGroup>
		<h3>Solid</h3>
		<ButtonGroup solid>
			<Button {...e}>Default</Button>
			<Button {...e} simple>
				Simple
			</Button>
			<Button {...e} outlined>
				Outlined
			</Button>
			<Button {...e} solid>
				Solid
			</Button>
		</ButtonGroup>
	</div>
)
