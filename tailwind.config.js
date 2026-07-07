/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#F4F3F0',
          100: '#E2E8F0',
          200: '#CBD5E1',
          300: '#969AA6',
          400: '#64748B',
          500: '#1F2C50',
          600: '#1F2C50',
          700: '#1F2C50',
          800: '#1F2C50',
          900: '#1F2C50',
          950: '#1F2C50',
          DEFAULT: '#1F2C50',
        },
        secondary: {
          50:  '#F8FCFF',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0F172A',
          900: '#0F172A',
          950: '#020617',
        },
        accent: {
          50:  '#fdfaf3',
          100: '#f9f3e1',
          200: '#f3e5c4',
          300: '#ebd39d',
          400: '#C59E5E', // Gold (Accent)
          500: '#B28F52', // Gold (Primary)
          600: '#937028', // Dark Gold
          700: '#7A5D21',
          800: '#614A1A',
          900: '#493714',
          950: '#30240D',
        },
        custom: {
          navy: '#1F2C50',
          gold: '#B28F52',
          goldAccent: '#C59E5E',
          darkGold: '#937028',
          offWhite: '#F4F3F0',
          silverGrey: '#969AA6',
        },
        success: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
        },
        error: {
          50:  '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'rotate-slow':  'rotateSlow 25s linear infinite',
        'marquee':      'marquee 28s linear infinite',
        'marquee-vertical': 'marqueeVertical 40s linear infinite',
        'marquee-vertical-reverse': 'marqueeVerticalReverse 40s linear infinite',
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'fade-in-up':   'fadeInUp 0.7s ease-out forwards',
        'ping-slow':    'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float:       { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        rotateSlow:  { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        marquee:     { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        marqueeVertical: { from: { transform: 'translateY(0)' }, to: { transform: 'translateY(-50%)' } },
        marqueeVerticalReverse: { from: { transform: 'translateY(-50%)' }, to: { transform: 'translateY(0)' } },
        fadeIn:      { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeInUp:    { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      boxShadow: {
        'soft':    '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        'soft-lg': '0 10px 40px -3px rgba(0,0,0,0.1), 0 4px 20px -2px rgba(0,0,0,0.05)',
        'glow':    '0 0 50px -10px rgba(37,99,235,0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
