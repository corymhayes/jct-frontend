import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
    background-color: #292929;
    font-family: 'Industry', sans-serif;
  }
  
  #__next{
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
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