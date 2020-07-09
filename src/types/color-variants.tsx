import React from 'react'
import { VariantSource } from '../util/variant-builder'

export const colorVariants = {
	default: 'basic',
	variants: {
		basic: 'basic',
		primary: 'primary',
		secondary: 'secondary',
		positive: 'positive',
		negative: 'negative',
	},
}

// export type ColorVariantNames =
// 	| 'basic'
// 	| 'primary'
// 	| 'secondary'
// 	| 'positive'
// 	| 'negative'

// export type ColorVariants = {
// 	[k in ColorVariantNames]?: boolean
// }

// export const getColorVariant: (
// 	props: ColorVariants
// ) => ColorVariantNames = props => {
// 	if (props.negative) return 'negative'
// 	else if (props.positive) return 'positive'
// 	else if (props.primary) return 'primary'
// 	else if (props.secondary) return 'secondary'
// 	else if (props.basic) return 'basic'
// 	else return 'basic'
// }
