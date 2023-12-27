import Document, { Head, Html, Main, NextScript } from "next/document";

const date = new Date();
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from Gallery and the After Party."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="See pictures from Gallery and the After Party."
          />
          <meta
            property="og:title"
            content={`Gallery ${date.getFullYear()} Pictures`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`Gallery ${date.getFullYear()} Pictures`}
          />
          <meta
            name="twitter:description"
            content="See pictures from Gallery and the After Party."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
