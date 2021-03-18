import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#dff8d5" />
          <meta name="theme-color" content="#dff8d5" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="TreeDAO.org: coming soon" />
          <meta charSet="utf-8" />
          <meta property="og:title" content="TreeDAO" />
          <meta property="og:description" content="TreeDAO.org: coming soon" />
          {/* <meta
            property="og:image"
            content=""
          /> */}
          <meta property="og:url" content="https://treedao.org/" />
          <meta property="og:site_name" content="TreeDAO" />
          <meta property="og:type" content="website"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
