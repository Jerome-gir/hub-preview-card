import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "var(--yellow)",
      },
      dropShadow: {
        "custom-black": "10px 5px 2px rgba(0, 0, 0, 1)", // Ombre noire
        "custom-black-hover": "15px 5px 4px rgba(0, 0, 0, 1)", // Ombre noire hover
      },
    },
  },
  plugins: [],
}
export default config
