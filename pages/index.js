import Head from 'next/head'
import HomeScreen from './home'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="../static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="4wMoS5YqfF0DyNHr--nI4Z5iWUdka8KPYiBiCQGv5EA" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent"
        />
        <meta name="google-site-verification" content="4wMoS5YqfF0DyNHr--nI4Z5iWUdka8KPYiBiCQGv5EA" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZKKD686VB"></Script>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-8ZKKD686VB');
            `,
          }}
        />

        <Script
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
        />

        <title>Unberry</title>

        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        >
        </Script>
      </Head>
      <main>
        <HomeScreen />
      </main>
    </div>
  )
}
