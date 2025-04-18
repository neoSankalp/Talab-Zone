/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bitterRose: ["bitterRose", "sans-serif"],
        chillax: ["chillax", "sans-serif"],
        CabinetGrotesk: ["CabinetGrotesk", "sans-serif"],
        KaushanScript: ["KaushanScript", "sans-serif"],
        merienda: ["merienda", "sans-serif"],
        noto_sans_jp: ["noto-sans-jp", "sans-serif"],
        Roboto: ["Roboto-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
