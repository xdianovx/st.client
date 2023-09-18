/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
      colors: {
        black: "#1f1f1f",
        gray: "#858585",
        grayBorder: "#C8C8C8",
        grayLight: "#EBEBEB",
      },
    },
    container: {
      center: true,
      padding: "40rem",
    },

    screens: {
      xl: { max: "1680rem" },
      lg: { max: "1520px" },
      md: { max: "1240px" },
      sm: { max: "1024px" },
      xs: { max: "680px" },
    },
  },

  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "1740rem",
          // "@screen xl": {
          //     maxWidth: "1560px",
          // },
          // "@screen lg": {
          //     maxWidth: "1280px",
          // },
          // "@screen md": {
          //     maxWidth: "1054px",
          //     padding: "0 15px",
          // },
          // "@screen sm": {
          //     maxWidth: "882px",
          // },
          // "@screen xs": {
          //     maxWidth: "520px",
          // },
        },
      });
    },
  ],
};
