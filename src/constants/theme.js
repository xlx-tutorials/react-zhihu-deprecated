import { rgba } from 'polished'

const PALETTE = {
	primary: 'rgb(0, 102, 255)',
	red: 'rgb(241, 64, 60)',
	textgray: '#8590a6',
	black: {
		100: '#121212',
		90: rgba('#121212', 0.9),
		80: rgba('#121212', 0.8),
		70: rgba('#121212', 0.7),
		60: rgba('#121212', 0.6),
		50: rgba('#121212', 0.5),
		40: rgba('#121212', 0.4),
		30: rgba('#121212', 0.3),
		20: rgba('#121212', 0.2),
		10: rgba('#121212', 0.1),
		6: rgba('#121212', 0.06),
	},
	white: {
		100: '#f0f2f7',
		90: rgba('#f0f2f7', 0.9),
		80: rgba('#f0f2f7', 0.8),
		70: rgba('#f0f2f7', 0.7),
		60: rgba('#f0f2f7', 0.6),
		50: rgba('#f0f2f7', 0.5),
		40: rgba('#f0f2f7', 0.4),
		30: rgba('#f0f2f7', 0.3),
		20: rgba('#f0f2f7', 0.2),
		10: rgba('#f0f2f7', 0.1),
	},
}

const colors = {
	primary: PALETTE.primary,
	danger: PALETTE.red,
	hint: PALETTE.textgray,
	black: PALETTE.black,
	white: PALETTE.white,
}

export const THEME = {
	colors,
}
