/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0D0518',
        'void-light': '#1A0F2E',
        'void-lighter': '#2A1548',
        'neon-green': '#FF2D6B',
        plasma: '#9B59FF',
        cyan: '#00D4FF',
        'hot-pink': '#FF2D6B',
        gold: '#FFD700',
        ghost: '#F0EFF4',
        'ghost-dim': '#9A8AAE',
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
