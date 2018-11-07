import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/3.9.3/antd.min.css' />
          <link rel="shortcut icon" type="image/svg" sizes="16x16" href="../static/images/logos/OrderUp-logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://js.stripe.com/v3/" />
        </body>
      </html>
    )
  }
}

export default MyDocument;
