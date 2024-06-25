/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      smallLink: '14px',
      splitCard: '16px',
      titleCard: '20px',
      subTitleCard: '19px',
      headingCard: '24px',
      // sm: '0.8rem',
      base: '1rem',
      xl: '1.5rem',
      '2xl': '1.65rem',
      // '3xl': '1.953rem',
      // '4xl': '2.441rem',
      '5xl': '3.052rem',

    },
    lineHeight: {
      // 'extra-loose': '2.5',
      '12': '3.15rem',
    },
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      // Text
      proxiePrimary: '#030733',
      proxieSecondary: '#6E6E8D',
      disabled: '#A8A8BF',
      warning: '#FFCC30',
      alert: '#FF5151',
      successGreen: '#40C787',
      fab: '#7A11A4',


      // Brand Colors
      primaryBlack: '#030733',
      secondaryBlack: '#38395F',
      primaryBlue: '#5964F7',
      blueLight: '#B3B8FB',
      purple: '#BA22F7',
      white: '#FFFFFF',

      //Status
      lightGray: '#ESE5F2',
      lightBlue: '#E0E2FD',
      lightPurple: '#F3D4FF',
      lightGreen: '#E6FFF4',
      turquoise: '#ACFAFF',
      //Input BG's
      grayLightest: '#F4F4FB',
      // BG

      outlineGrey: '#E5E5F2',

      customRed: '#ff5151',
      customGreen: '#40c787',
      // cardRed: '#FF5151',
      // tahiti: {
      //   100: '#cffafe',
      //   200: '#a5f3fc',
      //   300: '#67e8f9',
      //   400: '#22d3ee',
      //   500: '#06b6d4',
      //   600: '#0891b2',
      //   700: '#0e7490',
      //   800: '#155e75',
      //   900: '#164e63',
      // },

      // ...
    },

    extend: {
      maxWidth: {
        '1000': '1000px',
      },
      boxShadow: {
        'test': '0 4px 10px 0 rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-blue-light': '#59cef7',
        'custom-blue-dark': '#596df7',
        'custom-blue-middle': '#5999f7',
      },
      margin: {
        '15p': '15%',
        '33p': '33%'
      },
      opacity: {
        '20': '0.2',
      },
      objectFit: {
        'cover': 'cover',
      },
    },
  },
  plugins: [require("daisyui")],
}
