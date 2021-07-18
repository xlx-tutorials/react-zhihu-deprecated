import Heading from '../../components/Heading'
import Text from '../../components/Text'

function DemoPage() {
	return (
		<div className='DemoPage'>
			<Text as='a'>Hello</Text>
			<Heading>Hello</Heading>
			<Heading as='h5'>Hello</Heading>
		</div>
	)
}

export default DemoPage
