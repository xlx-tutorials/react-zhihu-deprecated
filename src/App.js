import { css, Global } from '@emotion/react'
import { normalize } from 'polished'
import React from 'react'
import { THEME } from './constants/theme'
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

					html,
					body {
						background-color: rgb(246, 246, 246);
						color: ${THEME.colors.black[100]};
					}
				`}
			/>
		</>
	)
}

export default App
