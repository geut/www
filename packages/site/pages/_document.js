import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/static/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,600|Montserrat:200,400,600" rel="stylesheet" />

          <link href="/static/css/gridlex.min.css" media="all" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
