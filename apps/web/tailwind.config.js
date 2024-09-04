/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./index.html",
		"../../packages/components/**/*.{tsx,ts,jsx,js}",
		"../../packages/**/*.{tsx,ts,jsx,js}",
		"../../node_modules/@locoworks/**/*.{tsx,ts,jsx,js}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter var"],
				sans: ["Open Sans"],
			},
			height: {
				maxheight72minus: "calc(100vh - 72px)",
			},
			backgroundImage: {
				"hero-section-background":
					"url('https://open.ieee.org/wp-content/uploads/ieee-open-hero-bg.jpg')",
				"radial-gradient":
					"radial-gradient(45.6% 29.08% at 12.81% 28.48%, #FFF 0%, #F0F3F8 100%)",
				backgroundShimmerGradient:
					"linear-gradient(83deg, #EEE 18.91%, #F3F3F3 32.65%, #F3F3F3 37.75%, #F3F3F3 40.89%, #EEE 58.72%)",
			},
			boxShadow: {
				boxShadow:
					"0px -16px 75px 0px rgba(0, 0, 0, 0.10), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
				box: " 0px 16px 75px 0px rgba(0, 0, 0, 0.10), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
				boxShadow2: "0px 23px 50px 0px rgba(0, 0, 0, 0.10)",
				menu: "0px 36px 75px 0px rgba(0, 0, 0, 0.14), 0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
				sidebar: "2px 0px 10px 0px rgba(0, 0, 0, 0.10);",
			},
			colors: {
				"primary-blue": "#00629b",
				"secondry-black-2": "#0a0909",
				"luminous-orange": "#ff6900",
			},
			fontSize: {
				25: "25px",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
