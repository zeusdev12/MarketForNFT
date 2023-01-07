module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy-Regular", "sans-serif"],
        gilroyMedium: ["Gilroy-Medium", "sans-serif"]
      }
    },
    screens: {
      'ssm': '500px',
      // => @media (min-width: 1536px)
      sm: '640px',
      // => @media (min-width: 640px)
      md: '768px',
      // => @media (min-width: 768px)
      lg: '1024px',
      // => @media (min-width: 1024px)
      xl: '1280px',
      // => @media (min-width: 1280px)
      '2xl': '1536px',
      // => @media (min-width: 1536px)
      '3xl': '1700px',
      // => @media (min-width: 1536px)
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
};
