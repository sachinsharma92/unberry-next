import Head from 'next/head'
import HomeScreen from './home'

export default function Home() {
  return (
    <div>
      <Head prefix="og: https://ogp.me/ns#">
        <meta charset="utf-8" />
        <link rel="icon" href="../static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="4wMoS5YqfF0DyNHr--nI4Z5iWUdka8KPYiBiCQGv5EA" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="4wMoS5YqfF0DyNHr--nI4Z5iWUdka8KPYiBiCQGv5EA" />

        {/* Main Title */}
        <title>Unberry - Transforming the future of hiring and developing talent!</title>
        <meta name="title" content="Unberry - Transforming the future of hiring and developing talent."/>
        <meta name="description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent" />
        <meta name="image" content="https://unberry.com/static/og.png" />

        {/* OG Section  */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content="unberry.com" /> */}
        <meta property="og:title" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta property="og:url" content="https://unberry.com/static/og.png" />
        <meta property="og:description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent" />
        <meta property="og:image" content="https://unberry.com/static/og.png" />
        {/* <meta property="og:image:url" content="https://unberry.com/static/og.png" /> */}
        {/* <meta property="og:image:alt" content="Unberry - Transforming the future of hiring and developing talent."/>
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

        {/* Twitter OG Section  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Twitter @unberry.com" />
        <meta name="twitter:title" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta name="twitter:description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent" />
        <meta name="twitter:image" content="https://unberry.com/static/og.png" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-303682441"></script>
        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag("js", new Date());
              
                  gtag("config", "UA-303682441");
                  `,
          }}
        ></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZKKD686VB" ></script>
        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-8ZKKD686VB');
            `,
          }}
        ></script>

        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T929WHR');
            `,
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Unberry",
              "image": "",
              "@id": "",
              "url": "https://unberry.com/",
              "telephone": "9810046260",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Second Floor, S S Plaza, 218-220, Block A, Sector 47",
                "addressLocality": "Gurugram",
                "postalCode": "122018",
                "addressCountry": "India",
                "addressRegion": "Haryana"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/unberry/",
                "https://www.instagram.com/unberry_official/",
                "https://www.linkedin.com/in/vini-khabya-6a0aa419/",
                "https://www.linkedin.com/in/aakaargandhi/",
                "https://www.linkedin.com/in/anuj-birla-55a84822/",
                "https://www.linkedin.com/in/dhruv-goel-9042b824/"
              ]
            })
          }}
        >
        </script>
      </Head>
      <main>
        <HomeScreen />
      </main>
    </div>
  )
}
