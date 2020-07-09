import React from 'react'
import { IconNames } from '../types/icons'
import styled from 'styled-components'
import { icons } from '../types/icons'

const iconSizes = {
	xs: 'xs',
	sm: 'sm',
	lg: 'lg',
	x2: '2x',
	x4: '4x',
	x5: '5x',
	x6: '6x',
	x7: '7x',
	x8: '8x',
	x9: '9x',
	x10: '10x',
}

type IconSizeVariants = keyof typeof iconSizes

type IconSizes = {
	[k in IconSizeVariants]?: boolean
}

type IconProps = { name: IconNames } & IconSizes

const IconBase = styled.i<{ name: IconNames; size?: IconSizes }>`
	color: ${p => p.theme.colors().text.primary};

	&.dark {
		color: ${p => p.theme.colorsDark.text.primary};
	}

	&.light {
		color: ${p => p.theme.colorsLight.text.primary};
	}
`

export const Icon = styled(IconBase).attrs<{
	name: IconNames
	size?: IconSizes
	dark?: boolean
	light?: boolean
}>(({ name, size, theme, dark, light }) => ({
	className: `${icons[name]} fa-${name} ${size ? `fa-${size}` : ''} ${
		dark ? 'dark' : light ? 'light' : theme.dark ? 'dark' : 'light'
	}`.trim(),
}))``
