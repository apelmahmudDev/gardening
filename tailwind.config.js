/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
			},
			colors: {
				primary: "#209E2E",
				secondary: "#252525",
				mutated: "#808080",
				light: "#F4F4F4",
				border: "#282828",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "0rem",
			},
			screens: {
				sm: "600px",
				md: "900px",
				lg: "1200px",
				// xl: "1536px",
			},
		},
	},
	plugins: [],
};
