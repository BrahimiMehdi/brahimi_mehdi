
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-screen snap-always  scrollbar-thin scrollbar-track-blue scrollbar-thumb-orange">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument