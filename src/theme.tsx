import React from 'react'
import './index'
import { ThemeProvider as SCTP, css } from 'styled-components'
import { DefaultTheme } from 'styled-components'
import { VariantNames } from './util/variant-builder'
import { colorVariants } from './types/color-variants'
import Color from 'color'

type TypographyTypes =
	| 'body1'
	| 'body2'
	| 'subtitle1'
	| 'subtitle2'
	| 'button'
	| 'caption'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'

declare module 'styled-components' {
	type ColorNames = VariantNames<typeof colorVariants>

	interface ThemeColors {
		/** Primary Color */
		basic: string
		primary: string
		secondary: string
		positive: string
		negative: string
		text: {
			/** Primary text color */
			primary: string
		}
		page: {
			background: string
		}
	}

	interface ThemeTypography {
		fontFamily: string[]
		fontSize: number
		fontWeight: number | string
		color: string
		unit: string
	}

	export interface DefaultTheme {
		borderRadius: number
		borderWidth: number
		/**
		 * @default 8
		 */
		spacingFactor: number
		breakpointsValues: {
			xs: number | null
			sm: number | null
			md: number | null
			lg: number | null
			xl: number | null
		}
		breakpoints: {
			up: (breakpoint: string) => string
			down: (breakpoint: string) => string
		}
		typographyValues: {
			base: ThemeTypography
			types: { [k in TypographyTypes]: Partial<ThemeTypography> }
		}
		typography: (t?: TypographyTypes) => ThemeTypography
		/** @default false */
		dark: boolean
		colorsLight: ThemeColors
		colorsDark: ThemeColors
		/** Get a multiple of the theme's current `spacingFactor` */
		spacing: (n?: number) => string
		/** Current theme colors, either light or dark. */
		colors: () => ThemeColors
		darkenedColor: (color: ColorNames, amount?: number) => string
		transparentColor: (color: ColorNames, amount?: number) => string
		textColorForBg: (color: string) => string
	}
}

const defaultTheme: DefaultTheme = {
	borderRadius: 6,
	borderWidth: 2,
	spacingFactor: 8,
	breakpointsValues: {
		xs: 600,
		sm: 960,
		md: 1280,
		lg: 1920,
		xl: null,
	},
	breakpoints: {
		up: (breakpoint: string) => {
			return ''
		},
		down: (breakpoint: string) => {
			return ''
		},
	},
	typography: function (t) {
		return t
			? {
					...this.typographyValues.base,
					...this.typographyValues.types[t],
			  }
			: this.typographyValues.base
	},
	typographyValues: {
		base: {
			fontSize: 12,
			fontFamily: ['Muli', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
			fontWeight: 500,
			color: '#060606',
			unit: 'pt',
		},
		types: {
			body1: {},
			body2: {
				fontSize: 0.83,
				unit: 'em',
			},
			subtitle1: {},
			subtitle2: {},
			button: {
				fontWeight: 700,
			},
			caption: {},
			h1: {
				fontSize: 2,
				fontWeight: 700,
				unit: 'em',
			},
			h2: {
				fontSize: 1.5,
				fontWeight: 700,
				unit: 'em',
			},
			h3: {
				fontSize: 1.17,
				fontWeight: 700,
				unit: 'em',
			},
			h4: {
				fontSize: 1,
				fontWeight: 700,
				unit: 'em',
			},
			h5: {
				fontSize: 0.83,
				fontWeight: 700,
				unit: 'em',
			},
			h6: {
				fontSize: 0.67,
				fontWeight: 700,
				unit: 'em',
			},
		},
	},
	dark: false,
	colorsLight: {
		basic: '#EADBCF',
		primary: '#4BCFD4',
		secondary: '#EC9324',
		positive: '#3E8259',
		negative: '#DC5A42',
		text: {
			primary: 'black',
		},
		page: {
			background: '#ffffff',
		},
	},
	colorsDark: {
		basic: '#EADBCF',
		primary: '#4BCFD4',
		secondary: '#EC9324',
		positive: '#3E8259',
		negative: '#DC5A42',
		text: {
			primary: 'white',
		},
		page: {
			background: '#2f3437',
		},
	},
	spacing: function (n?: number) {
		return this.spacingFactor * (n || 1) + 'px'
	},
	colors: function () {
		return this.dark ? this.colorsDark : this.colorsLight
	},
	darkenedColor: function (c, amt = 0.5) {
		let color = Color((this.colors() as any)[c])
		return color.darken(amt).rgb().string()
	},
	transparentColor: function (c, amt = 0.25) {
		let color = Color((this.colors() as any)[c])
		return color.alpha(amt).rgb().string()
	},
	textColorForBg: function (c) {
		let theme = Color(c).isDark() ? this.colorsDark : this.colorsLight
		return theme.text.primary
	},
}

const typographyMixin = (type: TypographyTypes) => css`
	font-family: ${p =>
		p.theme
			.typography(type)
			.fontFamily.map(f => `'${f}'`)
			.join(', ')};
	font-size: ${p =>
		p.theme.typography(type).fontSize + p.theme.typography(type).unit};
	font-weight: ${p => p.theme.typography(type).fontWeight};
	color: ${p => p.theme.typography(type).color};
`

const ThemeProvider: React.FC<{ theme?: Partial<DefaultTheme> }> = ({
	theme,
	children,
}) => {
	return <SCTP theme={Object.assign(defaultTheme, theme)}>{children}</SCTP>
}

export { defaultTheme, ThemeProvider, typographyMixin }
