import { css } from '@emotion/react'
import { size } from 'polished'
import { RiContrastLine } from 'react-icons/ri'
import SvgLogo from '../../components/svgs/SvgLogo'
import SvgMessage from '../../components/svgs/SvgMessage'
import SvgNotification from '../../components/svgs/SvgNotification'
import SvgSearch from '../../components/svgs/SvgSearch'
import { useDarkMode, useTheme } from '../../contexts/ThemeContext'
import { navigation } from './constants'

function Header() {
	const { theme } = useTheme()
	const { toggle } = useDarkMode()

	return (
		<div
			className='Header'
			css={css`
				box-shadow: ${theme.boxShadow.card};
				background: ${theme.colors.block};
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
						color: ${theme.colors.secondary};
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
							color: ${theme.colors.text};
							font-weight: bold;
							/* border-bottom: 3px solid ${theme.colors.primary}; */
							box-shadow: 0 -4px 0 ${theme.colors.primary} inset;
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
							border: 1px solid ${theme.colors.black[10]};
							border-radius: 100px;
							padding: 8px 16px;
							background-color: ${theme.colors.black[6]};
							margin: 12px;
							font-size: 14px;
							background: ${theme.colors.white[20]};
							color: ${theme.colors.black[80]};
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
							color: ${theme.colors.black[40]};
						`}
					/>
					<button
						type='button'
						css={css`
							padding: 8px 20px;
							background-color: ${theme.colors.primary};
							border: none;
							border-radius: 100px;
							color: ${theme.colors.white.base};
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
						color: ${theme.colors.secondary};
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
							color: ${theme.colors.secondary};
						}
					`}
				>
					<button className='theme' onClick={toggle}>
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
