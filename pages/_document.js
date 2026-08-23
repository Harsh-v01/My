import { Html, Head, Main, NextScript } from 'next/document'

const themeScript = `
(function () {
  try {
    const stored = window.localStorage.getItem('theme')
    // Dark is the primary, designed-for aesthetic of this portfolio —
    // default to it unless the visitor has explicitly picked light mode.
    const isDark = stored ? stored === 'dark' : true
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
  } catch (error) {}
})()
`

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="description" content="Harsh Kumar - Software Engineer building useful digital products." />
        <meta property="og:title" content="Harsh Kumar - Software Engineer" />
        <meta property="og:description" content="Building useful digital products." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
