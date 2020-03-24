const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      spacing: {
        ...(() => {
          const spacing = {}
          for (let i = 0; i <= 128; i++) {
            spacing[`${i}`] = (0.25 * i) + 'rem'
          }
          console.log("updated spacing utilities")
          return spacing
        })()
      },
      fontSize: {
        app: {
          sm: ".75rem",
          md: "1rem",
          lg: "1.25rem",
          xl: "1.50rem",
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    plugin(({ addUtilities, theme }) => {
      const gradients = {
        '.gradient': {
          background: `linear-gradient(to right, ${theme('colors.red.600')},${theme('colors.green.600')})`
        },
      }
      addUtilities(gradients)
    })
  ],
}