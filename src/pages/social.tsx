import Head from 'next/head'
import SocialMediaPage from '@/components/SocialMediaPage'

export default function Social() {
  return (
    <>
      <Head>
        <title>greyCarnation_blog</title>
        <meta name="description" content="blog for artist greyCarnation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <SocialMediaPage />
        </>
      </main>
    </>
  )
}
