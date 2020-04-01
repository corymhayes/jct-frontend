import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'Industry';
    src: url('/public/fonts/Industry-Bold.eot');
    src: url('/public/fonts/Industry-Bold.eot?#iefix') format('embedded-opentype'),
        url('/public/fonts/Industry-Bold.woff2') format('woff2'),
        url('/public/fonts/Industry-Bold.woff') format('woff'),
        url('/public/fonts/Industry-Bold.ttf') format('truetype'),
        url('/public/fonts/Industry-Bold.svg#Industry-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face{
    font-family: 'Industry';
    src: url('/public/fonts/Industry-Medium.eot');
    src: url('/public/fonts/Industry-Medium.eot?#iefix') format('embedded-opentype'),
        url('/public/fonts/Industry-Medium.woff2') format('woff2'),
        url('/public/fonts/Industry-Medium.woff') format('woff'),
        url('/public/fonts/Industry-Medium.ttf') format('truetype'),
        url('/public/fonts/Industry-Medium.svg#Industry-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return(
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
