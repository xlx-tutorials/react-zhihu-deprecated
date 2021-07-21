import { css } from '@emotion/react'
import { desaturate, size as pSize, tint } from 'polished'
import { useState } from 'react'

function Switch({
	size = 40,
	open,
	defaultOpen,
	onChange = () => {},
	...props
}) {
	let [toggle, setToggle] = useState(defaultOpen)

	// detect error
	if (open !== undefined && defaultOpen !== undefined) {
		return new Error('open and defaultOpen can not be used at sametime.')
	}

	// if open is defined, replace state.
	if (open !== undefined) {
		toggle = open
		setToggle = onChange
	}

	function handleClick() {
		const newState = !toggle
		setToggle(newState)
		onChange(newState)
	}

	return (
		<div
			className='Switch'
			css={css`
				background-color: lavender;
				border-radius: 1000px;
				display: inline-flex;
				padding: 4px;
				width: ${size * 2}px;
				cursor: pointer;
				user-select: none;
				box-sizing: content-box;
			`}
			onClick={handleClick}
			{...props}
		>
			<div
				className='circle'
				css={[
					css`
						${pSize(size)};
						border-radius: 1000px;
						background-color: slateblue;
						transition: 0.3s cubic-bezier(0.34, 0.15, 0.02, 1.44);
					`,
					!toggle &&
						css`
							transform: translateX(${size}px);
							background-color: ${tint(0.2, desaturate(0.3, 'slateblue'))};
						`,
				]}
			/>
		</div>
	)
}

export default Switch
