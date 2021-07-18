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
		100: '#fff',
		90: rgba('#fff', 0.9),
		80: rgba('#fff', 0.8),
		70: rgba('#fff', 0.7),
		60: rgba('#fff', 0.6),
		50: rgba('#fff', 0.5),
		40: rgba('#fff', 0.4),
		30: rgba('#fff', 0.3),
		20: rgba('#fff', 0.2),
		10: rgba('#fff', 0.1),
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
