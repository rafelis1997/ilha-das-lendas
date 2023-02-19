/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      filter: {
        'text': "drop-shadow(3px 3px 3px var(--colors-lime-500))",
      },
      textShadow: {
        sm: '0 1px 2px rgb(0,0,0,0.4)',
        DEFAULT: '0 2px 4px rgb(0,0,0,0.4)',
        lg: '0 8px 16px rgb(0,0,0,0.4)',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)),url('https://cdn.beacons.ai/user_content/axaWeR0asKVRTHo2uxedx5HnC8R2/backgrounds/home/background_ilhadaslendas.png?t=1674843222900')",
        'hero-background': "url('/src/assets/hero-img.jpg')",
      },
    },
    clipPath: {
      cardClip: 'url(#clipSvg)',
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
