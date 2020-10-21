module.exports = {
  theme: {
    extend: {
      colors: {
        black: "#212121",
        white: "#FAFAFA",
        gray: {
          100: "#2E2E2E",
          200: "#474747",
          300: "#6E6E6E",
          400: "#949494",
          500: "#C2C2C2",
          600: "#E0E0E0",
          700: "#F2F2F2",
        },
      },
      // Adds a new breakpoint in addition to the default breakpoints
      // screens: {
      //   "2xl": "1440px",
      // },
    },
    container: {
      center: true,
    },
    fontFamily: {
      body: [
        "Poppins",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Poppins",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "Caladea",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.88rem",
      base: "1rem",
      md: "1.13rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.88rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "3.75rem",
      "6xl": "4.5rem",
    },
  },
  variants: {},
  plugins: [],
}