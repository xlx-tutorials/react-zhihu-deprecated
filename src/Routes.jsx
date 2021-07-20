import { Router } from '@reach/router'
import HomePage from './containers/HomePage'
import DemoPage from './containers/DemoPage'

function Routes() {
	return (
		<Router>
			<HomePage path='/' title='首页 - 知乎' />
			<HomePage path='/follow' title='首页 - 知乎' />
			<DemoPage path='/demo' />
		</Router>
	)
}

export default Routes
