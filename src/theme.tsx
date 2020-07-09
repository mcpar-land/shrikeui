import React from 'react'
import './index'
import { ThemeProvider as SCTP } from 'styled-components'
import { DefaultTheme } from 'styled-components'
import { VariantNames } from './util/variant-builder'
import { colorVariants } from './types/color-variants'
import Color from 'color'

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

	export interface DefaultTheme {
		borderRadius: number
		/**
		 * @default 8
		 */
		spacingFactor: number
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
	spacingFactor: 8,
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

const ThemeProvider: React.FC<{ theme?: Partial<DefaultTheme> }> = ({
	theme,
	children,
}) => {
	return (
		<SCTP
			theme={{
				...defaultTheme,
				...theme,
			}}
		>
			{children}
		</SCTP>
	)
}

export { defaultTheme, ThemeProvider }
