import Head from 'next/head'
import Image from 'next/image'
import HomeScreen from './home'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="4wMoS5YqfF0DyNHr--nI4Z5iWUdka8KPYiBiCQGv5EA" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent"
        />
        <meta name="google-site-verification" content="4wMoS5YqfF0DyNHr--nI4Z5iWUdka8KPYiBiCQGv5EA" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-303682441"></Script>
        <Script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
      }
          gtag("js", new Date());

          gtag("config", "UA-303682441");
        </Script>

 
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZKKD686VB"></Script>
        <Script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8ZKKD686VB');
        </Script>
        <Script>
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T929WHR');
        </Script> */}

        <title>Unberry</title>
      </Head>

      <main>
        <HomeScreen />
      </main>
    </div>
  )
}
