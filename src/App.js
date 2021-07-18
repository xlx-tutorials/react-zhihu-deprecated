import { css, Global } from '@emotion/react'
import { normalize } from 'polished'
import React from 'react'
import Routes from './Routes'

function App() {
	return (
		<>
			<Routes />
			<Global
				styles={css`
					${normalize()}
					
					html {
						box-sizing: border-box;
					}
					*,
					*:before,
					*:after {
						box-sizing: inherit;
					}
				`}
			/>
		</>
	)
}

export default App
