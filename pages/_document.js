import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Harsh Kumar — Software Engineer building useful digital products." />
        <meta property="og:title" content="Harsh Kumar — Software Engineer" />
        <meta property="og:description" content="Building useful digital products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
