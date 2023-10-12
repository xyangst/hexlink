import { Config } from "tailwindcss"
import colors from "tailwindcss/colors"
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			black: colors.black,
			orange: colors.orange,
			gray: colors.stone
		},
		extend: {}
	},
	plugins: []
} as Config
