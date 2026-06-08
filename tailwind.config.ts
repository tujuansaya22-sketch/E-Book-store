import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22C55E',
          50: '#eefcf2',
          100: '#d9f8df',
          200: '#b2f0bb',
          300: '#7ae68f',
          400: '#45cd5f',
          500: '#22C55E',
          600: '#17a245',
          700: '#13763a',
          800: '#115c30',
          900: '#0f4b27'
        }
      },
      boxShadow: {
        glow: '0 25px 80px rgba(34, 197, 94, 0.18)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.12)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(34, 197, 94, 0.24), transparent 38%), radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.14), transparent 30%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08), transparent 28%)'
      }
    }
  },
  plugins: []
}

export default config
