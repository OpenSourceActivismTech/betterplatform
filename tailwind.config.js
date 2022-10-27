const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "better-purple": "#6F00D0",
        "better-yellow": "#FFEA9E",
        "better-blue": "#009DF6",
        "better-teal": "#5CEFDB",
        "better-red": "#BE123C",
        "strong-yellow": "#F9FC00",
        "better-green": "#166534",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ["1rem", "1.5"],
        "5xl": ["3rem", "1.2"],
      }, // need to define 2nd param for line-height explicitly, otherwise we end up with 1
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
