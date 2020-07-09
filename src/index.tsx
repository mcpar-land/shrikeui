import React, { useEffect } from 'react'
export { Button } from './components/button'
export { ButtonGroup } from './components/button-group'
export { ThemeProvider, defaultTheme } from './theme'
export { Icon } from './components/icon'
export { icons } from './types/icons'
import { createGlobalStyle } from 'styled-components'

const ShrikeGlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;

		font-family: 'Muli', 'Roboto', 'Arial', 'Helvetica', sans-serif;
		background: ${p => p.theme.colors().page.background}
	}
`

const injectScript = (doit: boolean, src: string) => () => {
	if (!doit) return () => {}

	const script = document.createElement('link')

	script.rel = 'stylesheet'
	script.href = src

	document.head.appendChild(script)
	console.log('INJECTED', src)

	return () => {
		document.head.removeChild(script)
	}
}

export const ShrikeStyle: React.FC<{ icons?: boolean }> = ({
	icons = true,
}) => {
	useEffect(
		injectScript(
			icons,
			'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css'
		),
		[icons]
	)
	useEffect(
		injectScript(
			icons,
			'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/brands.min.css'
		),
		[icons]
	)

	useEffect(() => {
		const fontStyle = document.createElement('style')
		fontStyle.innerHTML = `
		@import url(https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,200;0,400;0,600;0,700;1,200;1,400;1,600;1,700&display=swap);
		`
		document.head.appendChild(fontStyle)
		return () => {
			document.head.removeChild(fontStyle)
		}
	}, [])

	return <ShrikeGlobalStyle />
}
