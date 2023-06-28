/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@300;400;500&family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet" />

        {/* <title>Transforming the future of hiring and developing talent.</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="unberry" />
        <meta property="og:title" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta property="og:url" content="https://www.unberry.com" />
        <meta property="og:image" content="https://www.unberry.com/ogImage.png" />
        <meta property="og:image:url" content="https://www.unberry.com/ogImage.png" />
        <meta property="og:image:alt" content="Unberry - Transforming the future of hiring and developing talent" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="images/png" />
        <meta property="og:description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent" />


        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Twitter @Unberry" />
        <meta name="twitter:title" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta name="twitter:description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent" />
        <meta name="twitter:image" content="https://www.unberry.com/ogImage.png" />


        <meta name="name" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta name="description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent" />
        <meta name="image" content="https://www.unberry.com/ogImage.png" /> */}

        {/* Animations JS */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js" async />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js" async />
        <script src="lazysizes.min.js" async />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}