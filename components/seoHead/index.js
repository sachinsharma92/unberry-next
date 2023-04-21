import Head from "next/head";

export default function SeoHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        key="description"
        name="description"
        content={props.description}
      />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />

      {/* Twitter OG Section  */}
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
    </Head>
  )
}

