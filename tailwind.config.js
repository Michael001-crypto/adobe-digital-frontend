/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ✅ Correctly placed outside the content array
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        dark: "#1f2937",    // Gray-800
        light: "#f9fafb",   // Gray-50
        accent: "#ec4899",  // Pink
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
