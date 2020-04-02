import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'Industry';
    src: url('/public/fonts/Industry-Bold.woff2') format('woff2');
         /* url('../public/static/fonts/Industry-Bold.woff') format('woff'),
         url('../public/static/fonts/Industry-Bold.ttf') format('truetype'); */
    font-weight: bold;
    font-style: normal;
  }

  /* @font-face{
    font-family: 'Industry';
    src: url('../public/static/fonts/Industry-Medium.woff2') format('woff2'),
         url('../public/static/fonts/Industry-Medium.woff') format('woff'),
         url('../public/static/fonts/Industry-Medium.ttf') format('truetype'),
         url('../public/static/fonts/Industry-Medium.svg#Industry-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  } */

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