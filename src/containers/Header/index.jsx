import { css } from '@emotion/react'
import { size } from 'polished'
import SvgLogo from '../../components/svgs/SvgLogo'
import SvgMessage from '../../components/svgs/SvgMessage'
import SvgNotification from '../../components/svgs/SvgNotification'
import SvgSearch from '../../components/svgs/SvgSearch'
import THEME from '../../constants/theme'
import { navigation } from './constants'
import { RiContrastLine } from 'react-icons/ri'

function Header() {
	return (
		<div
			className='Header'
			css={css`
				box-shadow: ${THEME.boxShadow.card};
				background: ${THEME.colors.white[100]};
			`}
		>
			<div
				className='wrapper'
				css={css`
					display: flex;
					align-items: center;
					min-height: 70px;
					overflow: hidden;
					flex-wrap: wrap;
					padding: 0 12px;
					max-width: 1200px;
					margin: 0 auto;
				`}
			>
				<div
					className='logo'
					css={css`
						padding: 0 12px;
					`}
				>
					<SvgLogo />
				</div>

				<nav
					className='navigation'
					css={css`
						display: flex;
						color: ${THEME.colors.secondary};
						align-self: normal;
						flex: 0.8 0 auto;
						flex-wrap: wrap;

						a {
							color: currentColor;
							text-decoration: none;
							margin: 0 12px;
							font-size: 15px;
							display: flex;
							align-items: center;
						}

						a.active {
							color: ${THEME.colors.black[100]};
							font-weight: bold;
							/* border-bottom: 3px solid ${THEME.colors.primary}; */
							box-shadow: 0 -4px 0 ${THEME.colors.primary} inset;
						}
					`}
				>
					<a className='active' href='#33'>
						测试
					</a>
					{Object.values(navigation).map((item) => (
						<a href={item.value} key={item.value}>
							{item.title}
						</a>
					))}
				</nav>

				<div
					className='search'
					css={css`
						display: flex;
						align-items: center;
						flex: 1;
						margin-right: 12px;

						input {
							flex: 1;
							border: 1px solid ${THEME.colors.black[10]};
							border-radius: 100px;
							padding: 8px 16px;
							background-color: ${THEME.colors.black[6]};
							margin: 12px;
							font-size: 14px;
							background: ${THEME.colors.white[20]};
							color: ${THEME.colors.black[80]};
						}

						button {
							flex-shrink: 0;
						}
					`}
				>
					<input className='input' type='text' placeholder='搜索答案' />
					<SvgSearch
						size={15}
						css={css`
							margin-left: -40px;
							margin-right: 30px;
							color: ${THEME.colors.black[40]};
						`}
					/>
					<button
						type='button'
						css={css`
							padding: 8px 20px;
							background-color: ${THEME.colors.primary};
							border: none;
							border-radius: 100px;
							color: ${THEME.colors.white[100]};
							font-size: 14px;
						`}
					>
						提问
					</button>
				</div>

				<div
					className='toolbar'
					css={css`
						display: flex;
						align-items: center;
						color: ${THEME.colors.secondary};
						flex: 0.6;
						justify-content: flex-end;

						& > * {
							margin: 0 12px;
						}

						.avatar {
							${size(30)}
						}

						img {
							border-radius: 4px;
							width: 100%;
							height: 100%;
							object-fit: cover;
						}

						.theme {
							color: ${THEME.colors.secondary};
						}
					`}
				>
					<button className='theme'>
						<RiContrastLine size={22} />
					</button>
					<div className='notification'>
						<SvgNotification />
					</div>
					<div className='message'>
						<SvgMessage />
					</div>
					<a href='#avatar' className='avatar'>
						<img
							src='https://pic4.zhimg.com/v2-6c43e990734f5bc97e85774ee6ec0099_im.jpg'
							alt=''
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
