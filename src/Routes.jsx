import { Router } from '@reach/router'
import HomePage from './containers/HomePage'
import DemoPage from './containers/DemoPage'
import { CountProvider } from './containers/DemoPage/contexts/CountCountext'

function Routes() {
	return (
		<Router>
			<HomePage path='/' title='首页 - 知乎' />
			<HomePage path='/follow' title='首页 - 知乎' />
			<CountProvider path='/'>
				<DemoPage path='/demo' />
			</CountProvider>
		</Router>
	)
}

export default Routes
