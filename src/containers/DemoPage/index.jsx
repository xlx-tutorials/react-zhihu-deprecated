import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from './components/Button'

function DemoPage() {
	return (
		<div className='DemoPage'>
			<Text as='a'>Hello</Text>
			<Heading>Hello</Heading>
			<Heading as='h5'>Hello</Heading>
			<Button count={100} />
		</div>
	)
}

export default DemoPage
