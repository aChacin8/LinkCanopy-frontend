/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 
            './src/**/*.{js,ts,jsx,tsx}' /*Permitimos que taildwind se ejecute en todos los archivos donde sea ocupado */
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

