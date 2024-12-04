/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#BEAA9B',  
        secondary: '#582f0e', 
        accent: '#532E14',    
        light: '#532E14',     
        background: '#ffda47',
      },
      boxShadow: {
        s1: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
        s2: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        s3: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
};