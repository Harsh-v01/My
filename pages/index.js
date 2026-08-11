import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Journey from '../components/Journey'
import Experiments from '../components/Experiments'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Harsh Kumar - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="theme-transition bg-[var(--bg)] text-[var(--text)]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Experiments />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
