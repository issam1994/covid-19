// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    content: [
      './public/index.html',
      './src/**/*.js',
      './src/**/*.jsx',
    ],
  
    defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || []
  })
  
  module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nesting'),
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : []
    ]
  }