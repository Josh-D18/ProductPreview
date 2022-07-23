module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  fontFamily: {
    primary: ["Montserrat", ...defaultTheme.fontFamily.sans],
    secondary: ["Fraunces", ...defaultTheme.fontFamily.sans],
  },
};
