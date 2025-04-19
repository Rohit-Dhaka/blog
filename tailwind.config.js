/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      center:true,
      padding:'12px',
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
      }

    },
    fontFamily:{
      Inter :[ "Inter, sans-serif"],
    },
    boxShadow:{
      card:'0 12px 16px -4px #10182820',
      
    },
    extend: {
    
    },
  },
  plugins: [],
};
