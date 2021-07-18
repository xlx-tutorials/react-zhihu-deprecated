import { Router } from '@reach/router'
import HomePage from './containers/HomePage'
import DemoPage from './containers/DemoPage'

function Routes() {
	return (
		<Router>
			<HomePage path='/' />
			<DemoPage path='/demo' />
		</Router>
	)
}

export default Routes
