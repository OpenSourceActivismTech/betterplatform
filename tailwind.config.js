module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'better-purple': '#6F00D0',
        'better-yellow': '#FFEA9E',
        'better-blue': '#009DF6',
        'better-teal': '#5CEFDB',
        'better-red': '#FF2737',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
