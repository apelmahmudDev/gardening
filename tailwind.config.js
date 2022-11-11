/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				nunito: ["sans-serif", "Nunito Sans"],
			},
			colors: {
				primary: "#209E2E",
				secondary: "#252525",
				mutated: "#808080",
				light: "#F4F4F4",
			},
		},
	},
	plugins: [],
};
