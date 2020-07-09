import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider, ShrikeStyle, defaultTheme } from '../src/index'
import { useDarkMode } from 'storybook-dark-mode'
import { withKnobs, color, number } from '@storybook/addon-knobs'

import { addParameters } from '@storybook/react'

addDecorator(withKnobs)
addParameters({
	darkMode: {
		stylePreview: true,
	},
})

/**
 * @param {string} name
 * @param {object} obj
 * @returns {import('styled-components').ThemeColors} */
const colorThemeKnobs = (obj, group) => {
	const ctk = (name, obj) => {
		let knobsObj = {}
		for (const k in obj) {
			if (typeof obj[k] == 'object') {
				knobsObj[k] = ctk(name + (name ? '→' : '') + k, obj[k])
			} else {
				knobsObj[k] = color(name + (name ? '→' : '') + k, obj[k], group)
			}
		}
		return knobsObj
	}
	return ctk('', obj)
}

/**
 * @returns {DefaultTheme}
 */
const themeKnobs = () => ({
	...defaultTheme,
	dark: useDarkMode(),
	colorsDark: colorThemeKnobs(defaultTheme.colorsDark, 'Colors (Dark)'),
	colorsLight: colorThemeKnobs(defaultTheme.colorsLight, 'Colors (Light)'),
	spacingFactor: number('Spacing Factor', defaultTheme.spacingFactor, {
		min: 0,
	}),
	borderRadius: number('Border Radius', defaultTheme.borderRadius, {
		min: 0,
	}),
})

addDecorator(storyFn => (
	<ThemeProvider
		// theme={{ ...object('theme', { ...defaultTheme }), dark: useDarkMode() }}
		theme={themeKnobs()}
	>
		<ShrikeStyle icons />
		{storyFn()}
	</ThemeProvider>
))
