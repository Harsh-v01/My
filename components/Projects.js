import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { useInView } from './useInView'

const projects = [
  {
    index: '01',
    name: 'Samvad',
    tagline: 'Real-time communication app',
    desc: 'A communication app built around real-time messaging and accessible interaction. One of my bigger experiments in bringing together mobile development, Firebase, speech technologies, and a simple user experience.',
    stack: ['React Native', 'Firebase', 'Google Cloud', 'Speech API'],
    github: 'https://github.com/Harsh-v01/Samwaad_v02',
    live: 'https://chat-html-rapy.onrender.com/',
  },
  {
    index: '02',
    name: 'AI Academic Hub',
    tagline: 'OCR + AI workflow system',
    desc: 'An experiment in turning academic documents into something easier to work with - combining OCR, AI processing, and a web interface to extract and work with useful information.',
    stack: ['Python', 'FastAPI', 'Tesseract', 'OpenAI', 'React'],
    github: 'https://github.com/Harsh-v01/Padh.AI',
    live: 'https://padh-ai-umber.vercel.app/',
  },
  {
    index: '03',
    name: 'Certificate Generator',
    tagline: 'Automation tool with QR',
    desc: 'A tool I built to take the repetitive work out of generating certificates. It creates certificates in bulk, adds unique QR codes, and exports them as PDFs.',
    stack: ['Python', 'Pillow', 'qrcode', 'Flask'],
    github: 'https://github.com/Harsh-v01/Certi_generator',
    live: null,
  },
  {
    index: '04',
    name: 'Year Progress Dots',
    tagline: 'A visual way to see time passing',
    desc: 'A minimal Android app and home-screen widget that represents the progress of the year and week through simple dots - designed to make the passing of time visible at a glance.',
    stack: ['Android', 'Kotlin', 'UI/UX', 'Widgets'],
    github: 'https://github.com/Harsh-v01/YearProgressDots',
    live: 'https://harsh-v01.github.io/YearProgressDots/',
  },
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/50 p-7 transition-all duration-300 hover:border-[color:var(--border-strong)] hover:bg-[var(--surface)] hover:shadow-[var(--card-shadow-strong)]"
    >
      <span className="mb-5 font-mono text-xs tracking-widest text-[var(--gold)]">{project.index}</span>
      <h3 className="mb-1 font-display text-2xl font-light text-[var(--text)]">{project.name}</h3>
      <p className="mb-4 font-body text-sm text-[var(--text-soft)]">{project.tagline}</p>
      <div className="mb-5 h-px w-8 bg-[var(--divider)] transition-all duration-500 group-hover:w-16" />
      <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-[var(--text-muted)]">{project.desc}</p>

      <div className="mb-7 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[color:var(--border)] bg-[var(--soft-bg)] px-2.5 py-1 font-mono text-[11px] tracking-wide text-[var(--text-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3.5 py-1.5 text-xs font-body font-medium text-[var(--text-muted)] transition-colors hover:border-[color:var(--border-strong)] hover:text-[var(--text)]"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--text)] px-3.5 py-1.5 text-xs font-body font-medium text-[var(--surface)] transition-colors hover:bg-[var(--accent)]"
          >
            Live Demo
            <span>&nearr;</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="bg-[var(--bg)] py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Work"
            heading="Featured Projects"
            sub="Things I've built and shipped - each one a lesson."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group flex min-h-[300px] flex-col justify-between rounded-2xl border border-dashed border-[var(--divider)] bg-[var(--surface)]/30 p-7"
          >
            <div>
              <span className="font-mono text-xs tracking-widest text-[var(--gold)]">05 - NEXT</span>

              <div className="mt-8">
                <h3 className="mb-3 font-display text-2xl font-light italic text-[var(--text)]">
                  Currently building...
                </h3>

                <div className="mb-5 h-px w-8 bg-[var(--divider)] transition-all duration-500 group-hover:w-16" />

                <p className="font-body text-sm leading-relaxed text-[var(--text-soft)]">
                  There is always another idea somewhere between &quot;this could be useful&quot; and
                  &quot;let&apos;s see if I can build it.&quot;
                </p>
              </div>
            </div>

            <div className="mt-7">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--gold)]">MORE TO COME</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="group flex min-h-[300px] flex-col justify-between rounded-2xl border border-dashed border-[var(--divider)] bg-[var(--surface)]/30 p-7"
          >
            <div>
              <span className="font-mono text-xs tracking-widest text-[var(--gold)]">06 - OPEN</span>

              <div className="mt-8">
                <h3 className="mb-3 font-display text-2xl font-light italic text-[var(--text)]">What&apos;s next?</h3>
                <div className="mb-5 h-px w-8 bg-[var(--divider)] transition-all duration-500 group-hover:w-16" />

                <p className="font-body text-sm leading-relaxed text-[var(--text-soft)]">
                  Maybe the next project starts with a conversation. I&apos;m always interested in interesting
                  problems, collaborations, and things worth building.
                </p>
              </div>
            </div>

            <a
              href="mailto:contactharsh@gmail.com"
              className="mt-7 inline-flex items-center gap-2 text-sm font-body text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              Let&apos;s talk
              <span>&rarr;</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Harsh-v01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-body text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            View all on GitHub
            <span className="text-[var(--gold)]">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
