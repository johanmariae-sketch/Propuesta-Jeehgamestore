/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0A14',
        'void-light': '#12121F',
        'void-lighter': '#1A1A2E',
        'neon-green': '#39FF14',
        plasma: '#7B61FF',
        cyan: '#00D4FF',
        'hot-pink': '#FF2D6B',
        gold: '#FFD700',
        ghost: '#F0EFF4',
        'ghost-dim': '#8A8A9A',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
}
