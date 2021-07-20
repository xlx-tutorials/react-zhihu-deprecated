import { Link } from '@reach/router'
import { useState } from 'react'
import ContentWrapper from '../../components/ContentWrapper'
import { Page, PageTitle } from '../../components/Page'
import Header from '../Header'
import {
	ContentContainer,
	ContentItem,
	ContentText,
	ContentTitle,
	Tab,
	TabItem,
} from './components/styled'

const fakeTabs = [
	{ label: '关注', to: '/follow' },
	{ label: '推荐', to: '/' },
	{ label: '热榜', to: '/hot' },
	{ label: '视频', to: '/video' },
]

function HomePage({ title }) {
	// const [selectedIndex, setSelectedIndex] = useState()
	const [selectedValue, setSelectedValue] = useState(fakeTabs[0].label)

	return (
		<Page className='HomePage'>
			<PageTitle>{title}</PageTitle>
			<Header />

			<ContentWrapper>
				<ContentContainer>
					<Tab>
						{fakeTabs.map((tab) => (
							<TabItem
								as={Link}
								key={tab.label}
								to={tab.to}
								onClick={() => setSelectedValue(tab.label)}
							>
								{tab.label}
							</TabItem>
						))}
					</Tab>

					<ContentItem>
						<ContentTitle>
							“炮王”吴亦凡凉了：所有男神的末路，都有一个致命女人
						</ContentTitle>
						<ContentText>
							吴亦凡为什么这么多年都不凉？因为背后的资本利益纵横交错，他们花了钱扶持了艺人，当然还想继续靠着他赚钱。
						</ContentText>
					</ContentItem>

					<ContentItem>
						<ContentTitle>
							“炮王”吴亦凡凉了：所有男神的末路，都有一个致命女人
						</ContentTitle>
						<ContentText>
							吴亦凡为什么这么多年都不凉？因为背后的资本利益纵横交错，他们花了钱扶持了艺人，当然还想继续靠着他赚钱。
						</ContentText>
					</ContentItem>
				</ContentContainer>
			</ContentWrapper>
		</Page>
	)
}

export default HomePage
