import Head from 'next/head';

export default function SEO({ title, description, canonical }) {
  return (
    <Head>
      <title>{title ? `${title} | Vescavia` : 'Vescavia'}</title>
      <meta name="description" content={description || 'Vescavia services and solutions'} />
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Add more meta tags if needed */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Open Graph tags for social media */}
      <meta property="og:title" content={title ? `${title} | Vescavia` : 'Vescavia'} />
      <meta property="og:description" content={description || 'Vescavia services and solutions'} />
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Vescavia` : 'Vescavia'} />
      <meta name="twitter:description" content={description || 'Vescavia services and solutions'} />
    </Head>
  );
}
