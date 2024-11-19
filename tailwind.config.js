/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#50276A",
      secondary: "#E3DBEB",
      white: "#FAFAFA",
      grey: "#404552",
      black: "#0F0F0F",
      orange: "#FADBC7",
      "dark-orange": "#C77A78",
      "light-green": "#D1EDE6",
      "dark-green": "#78B5A6",
      "light-yellow": "#FAF5E3",
      "dark-yellow": "#C99470",
      violet: "#756685",
    },
    fontFamily: {
      sans: ["Nunito", "sans"],
    },
    spacing: {
      1: "14px",
      2: "16px",
      2.5: "18px",
      3: "24px",
      4: "32px",
      5: "48px",
      6: "56px",
      6.5: "64px",
      7: "80px",
      8: "88px"
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      md: "24px",
      xl: "32px",
      '2xl': "48px",
    },
    extend: {
      backgroundImage: {
        "hero-slide-1": "url('/slide-image-1.png')",
        "hero-slide-2": "url('/slide-image-2.png')",
        "hero-slide-3": "url('/slide-image-3.png')",
        "hero-slide-4": "url('/slide-image-4.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '744px',
      // => @media (min-width: 744px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
