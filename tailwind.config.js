module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FFD54C",

          "secondary": "#333333",

          "accent": "#F6F6F6",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#FD511A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
