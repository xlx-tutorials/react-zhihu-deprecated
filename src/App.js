import React from 'react'
import GlobalCSS from './components/GlobalCSS'
import DARK_THEME from './constants/darkTheme'
import THEME from './constants/theme'
import { ThemeProvider } from './contexts/ThemeContext'
import Routes from './Routes'

function App() {
	return (
		<ThemeProvider
			themes={{
				theme: THEME,
				darkTheme: DARK_THEME,
			}}
			defaultThemeKey='theme'
		>
			<Routes />
			<GlobalCSS />
		</ThemeProvider>
	)
}

export default App
