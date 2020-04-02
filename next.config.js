const withFonts = require('next-fonts')
module.exports = withFonts({
  webpack(config, options){
    return config
  }
})

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
})