/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',    
        secondary: '#ffcc00',  
        background: '#f5f5f5',
        text: '#333333',  
        highlight: '#00bfa6', 
        muted: '#aaaaaa',      
        error: '#e63946',   
      }
    },
  },
  plugins: [],
}

