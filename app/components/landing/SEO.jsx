import Head from "next/head";
// import Landing from "../../public/images/wallpaper.jpg";

function SEO() {
  return (
    <Head>
      <title>Mathew Opoola</title>
      <meta name="title" content="Mathew Opoola" />
      <meta name="author" content="Matthew Opoola" />
      <meta name="description" content="Showcase of my work" />
      <meta
        name="keywords"
        content="software, develeoper, frontend, engineer"
      />
      <link rel="canonical" href="mathewopoola.netilify.app" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="mathewopoola.netilify.app" />
      <meta property="og:title" content="Mathew Opoola portfolio" />
      <meta property="og:description" content="Showcase of my work" />
      {/* <meta property="og:image" content={Landing} /> */}
      <meta property="og:site_name" content="Mathew Opoola portfolio" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="mathewopoola.netilify.app" />
      <meta property="twitter:title" content="Mathew Opoola portfolio" />
      <meta property="twitter:description" content="Showcase of my work" />
      {/* <meta property="twitter:image" content={Landing} /> */}
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />
      {/* Favicon
      <link rel="apple-touch-icon" sizes="120x120" href={Landing} />
      <link rel="icon" type="image/png" sizes="32x32" href={Landing} />
      <link rel="icon" type="image/png" sizes="16x16" href={Landing} /> */}
    </Head>
  );
}

export default SEO;
