import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  /*  USE FOR DEVELOPMENT */
  @font-face{
    font-family: 'Industry';
    src: url('/static/fonts/Industry-Bold.woff2') format('woff2'),
         url('/static/fonts/Industry-Bold.woff') format('woff'),
         url('/static/fonts/Industry-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face{
    font-family: 'Industry';
    src: url('/static/fonts/Industry-Medium.woff2') format('woff2'),
         url('/static/fonts/Industry-Medium.woff') format('woff'),
         url('/static/fonts/Industry-Medium.ttf') format('truetype'),
         url('/static/fonts/Industry-Medium.svg#Industry-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  /*  USE FOR PRODUCTION */  
  @font-face{
    font-family: 'Industry';
    src: url('/portal/jct-frontend/static/fonts/Industry-Bold.woff2') format('woff2'),
         url('/portal/jct-frontend/static/fonts/Industry-Bold.woff') format('woff'),
         url('/portal/jct-frontend/static/fonts/Industry-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face{
    font-family: 'Industry';
    src: url('/portal/jct-frontend/static/fonts/Industry-Medium.woff2') format('woff2'),
         url('/portal/jct-frontend/static/fonts/Industry-Medium.woff') format('woff'),
         url('/portal/jct-frontend/static/fonts/Industry-Medium.ttf') format('truetype'),
         url('/portal/jct-frontend/static/fonts/Industry-Medium.svg#Industry-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }
  
  body{
    font-family: 'Industry', sans-serif;
  }
`

export default function MyApp({ Component, pageProps }){
  return(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}