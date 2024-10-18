import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleAccent: "#6A0DAD",
        lightPurple: "#E6E6FA",
        darkText: "#333333",
      },
      fontFamily: {
        quantico: ["Quantico", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
        darkerGrotesque: ["Darker Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [daisyui, typography], // プラグインを追加
};
