module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // 1
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },  
  plugins: [require('daisyui'),], // 3
};
