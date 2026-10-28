import '../styles/globals.css'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Component {...pageProps} />
    </>
  )
}
