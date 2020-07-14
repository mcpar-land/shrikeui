import React, { useEffect } from 'react'
export { Container } from './components/container'
export { Button } from './components/button'
export { ButtonGroup } from './components/button-group'
export { ThemeProvider, defaultTheme } from './theme'
export { Icon } from './components/icon'
export { icons } from './types/icons'
export { Menu } from './components/menu'
export {
	Header1,
	Header2,
	Header3,
	Header4,
	Header5,
	Header6,
	Body1,
	Body2,
	Caption,
	Subtitle1,
	Subtitle2,
} from './components/typography'
import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './theme'

const ShrikeGlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;

		font-size: ${p => p.theme.typography().fontSize}pt;
		font-family: ${p =>
			p.theme
				.typography()
				.fontFamily.map(f => `'${f}'`)
				.join(', ')};
		font-weight: ${p => p.theme.typography().fontWeight};
		color: ${p => p.theme.typography().color};
		background: ${p => p.theme.colors().page.background};
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
	...props
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

	return <ShrikeGlobalStyle {...props} />
}
