import React, { useEffect } from 'react'
import { ThemeProvider, ShrikeStyle } from '../src'

import './preview.css'

export const PreviewWrapper = ({ theme, children }) => {
	useEffect(() => {}, [theme])

	return (
		<ThemeProvider theme={theme}>
			<ShrikeStyle icons theme={theme} />
			{children}
		</ThemeProvider>
	)
}
