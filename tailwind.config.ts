import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		container :{
			center : true,
			padding: "i5px"
		},
  		colors: {
  			accent:"#08E95E",
  		},
  	},
  },
  plugins: [],
};
export default config;
