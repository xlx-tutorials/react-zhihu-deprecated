import { css } from '@emotion/react'
import React from 'react'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import { useDarkMode, useTheme } from '../../contexts/ThemeContext'
import Button from './components/Button'
import Count from './components/Count'
import Switch from './components/Switch'
import { useCount } from './contexts/CountCountext'
import useSwitch from './hooks/useSwitch'

function DemoPage() {
	const { bind, open, setOpen, toggle } = useSwitch()
	const { count, setCount } = useCount()

	const { theme, switchTheme } = useTheme()
	const { toggle: toggleTheme } = useDarkMode()

	// vue
	// open = ''

	// react
	// 自定义钩子
	// open   setOpen()

	return (
		<>
			<div
				className='DemoPage'
				css={css`
					color: ${theme.colors.primary};
				`}
			>
				<button onClick={toggleTheme}>toggle theme</button>
				<Text as='a'>Hello</Text>
				<Heading>Hello</Heading>
				<Heading as='h5'>Hello</Heading>
				<Button count={100} />
				<br />
				<br />
				<br />

				<h3>{open ? 'open' : 'close'}</h3>

				<button onClick={toggle}>toggle</button>

				<div style={{ margin: 20 }}>
					<Switch {...bind()} />
				</div>

				<br />
				<br />
				<br />
				<br />
				<Count />
				<h3>{count}</h3>

				{/* React Context API */}
			</div>
		</>
	)
}

export default DemoPage
