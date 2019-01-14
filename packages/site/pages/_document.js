import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="./static/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="./static/css/gridlex.min.css" media="all" rel="stylesheet" type="text/css" />
          <link href="./static/css/btns.min.css" media="all" rel="stylesheet" type="text/css" />
          <link href="./static/css/font-awesome.css" media="all" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
