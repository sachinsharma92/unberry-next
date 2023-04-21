/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicons */}
          <link rel="icon" href="../static/favicon.ico" />

          {/* Meta Details */}
          <meta property="og:title" content="Unberry - Transforming the future of hiring and developing talent." />
          <meta property="og:description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent" />

          {/* OG Section  */}
          <meta property="og:url" content="https://unberry.com/static/ogImage.png" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="546555445835110" />
          <meta property="og:image" content="https://unberry.com/static/ogImage.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="author" content="Unberry" />

          {/* Twitter OG Section  */}
          <meta
            name="twitter:image"
            content="https://unberry.com/static/ogImage.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
