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
import { useContent } from '../lib/useContent'
import PortfolioAtmosphere from '../components/PortfolioAtmosphere'
export default function Home() {
  const { content } = useContent()

  return (
    <>
      <Head>
        <title>{`${content.hero.firstName} ${content.hero.lastName} - ${content.hero.role}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar content={content} />

      <main className="relative theme-transition bg-[var(--bg)] text-[var(--text)]">
      <PortfolioAtmosphere />
        <Hero content={content.hero} resume={content.resume} />
        <About content={content.about} />
        <Projects projects={content.projects} />
        <Skills categories={content.skills} />
        <Journey milestones={content.journey} />
        <Experiments items={content.experiments} />
        <Contact content={content.contact} />
      </main>

      <Footer content={content} />
    </>
  )
}
