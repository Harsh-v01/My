import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'
import { defaultContent } from '../lib/defaultContent'

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="group relative h-full">
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none absolute -inset-3 rounded-2xl
          bg-[radial-gradient(circle,var(--hero-glow-warm),transparent_65%)]
          opacity-0 blur-2xl transition-opacity duration-500
          group-hover:opacity-[0.12]
          dark:group-hover:opacity-[0.18]
        "
      />

      <motion.article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="
          relative flex h-full flex-col overflow-hidden rounded-2xl
          border border-[color:var(--border)]
          bg-[color:var(--soft-bg)]
          shadow-sm
          dark:shadow-[0_15px_45px_rgba(0,0,0,0.18)]
        "
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--soft-bg)]">
          <motion.img
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-full w-full object-contain"
            animate={{ scale: hovered ? 1.035 : 1 }}
            transition={{ duration: 0.65 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <span
            className="
              absolute left-3 top-3 flex h-8 min-w-8 items-center
              justify-center rounded-full border border-white/20
              bg-black/45 px-2 font-mono text-[10px]
              tracking-widest text-white/80 backdrop-blur-md
            "
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 5 }}
            transition={{ duration: 0.25 }}
            className="absolute right-4 top-4 text-sm text-[var(--accent)]"
          >
            ↗
          </motion.span>
        </div>

        {/* Content */}
        <div className="flex min-h-[300px] flex-1 flex-col p-5">
          <h3 className="font-display text-xl font-semibold text-[color:var(--text)]">
            {project.name}
          </h3>

          <p className="mt-1 truncate text-xs text-[color:var(--text-muted)]">
            {project.tagline}
          </p>

          <div className="mt-4 h-px w-9 bg-[var(--gold)]" />

          <p className="mt-4 min-h-[72px] line-clamp-4 text-xs leading-[18px] text-[color:var(--text-soft)]">
            {project.desc}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="
                  whitespace-nowrap rounded-full
                  border border-[color:var(--border)]
                  bg-[color:var(--page-bg)]
                  px-2.5 py-1 font-mono text-[9px]
                  text-[color:var(--text-muted)]
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-2 pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5 rounded-full
                  border border-[color:var(--border)]
                  px-3.5 py-2 text-[10px]
                  text-[color:var(--text-soft)]
                  transition hover:border-[color:var(--text-muted)]
                  hover:text-[color:var(--text)]
                "
              >
                <GithubIcon />
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5 rounded-full
                  bg-[color:var(--text)]
                  px-3.5 py-2 text-[10px] font-medium
                  text-[color:var(--page-bg)]
                  transition hover:bg-[var(--accent)] hover:text-white
                "
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

        <div
          className="
            pointer-events-none absolute inset-0 rounded-2xl
            border border-[var(--accent)]
            opacity-0 transition-opacity duration-300
            group-hover:opacity-30
          "
        />
      </motion.article>
    </div>
  )
}

export default function Projects({
  projects = defaultContent.projects,
}) {
  const [ref, inView] = useInView()
  const projectSet = projects.slice(0, 5)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || projectSet.length <= 1) return

    const timer = setInterval(() => {
      setMobileIndex((i) => (i + 1) % projectSet.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [paused, projectSet.length])

  const changeSlide = (direction) => {
    setMobileIndex((i) =>
      Math.max(
        0,
        Math.min(projectSet.length - 1, i + direction)
      )
    )
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[color:var(--page-bg)] py-24 lg:py-32"
    >
      <div
        className="
          pointer-events-none absolute -left-40 top-24
          h-[500px] w-[500px] rounded-full blur-3xl
          opacity-[0.05] dark:opacity-[0.08]
        "
        style={{
          background:
            'radial-gradient(circle,var(--hero-glow-warm),transparent 70%)',
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              index="02"
              eyebrow="Work"
              heading="Featured Projects"
              sub="Things I've built, shipped, and learned from along the way."
            />
          </motion.div>
        </div>

        {/* Desktop */}
        <div className="mx-auto mt-14 hidden max-w-6xl px-6 md:block">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
            {projectSet.map((project, index) => (
              <motion.div
                key={`${project.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-12 md:hidden">
          <div
            className="px-4"
            onTouchStart={() => setPaused(true)}
          >
            <ProjectCard
              project={projectSet[mobileIndex]}
              index={mobileIndex}
            />
          </div>

          <div className="mt-5 flex items-center justify-between px-5">
            <button
              onClick={() => changeSlide(-1)}
              disabled={mobileIndex === 0}
              className="text-xs text-[color:var(--text-muted)] disabled:opacity-30"
            >
              ←
            </button>

            <div className="flex gap-1.5">
              {projectSet.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMobileIndex(i)
                    setPaused(true)
                  }}
                  aria-label={`Show project ${i + 1}`}
                  className={`h-1 rounded-full transition-all ${
                    i === mobileIndex
                      ? 'w-6 bg-[var(--accent)]'
                      : 'w-2 bg-[color:var(--border)]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => changeSlide(1)}
              disabled={mobileIndex === projectSet.length - 1}
              className="text-xs text-[color:var(--text-muted)] disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 md:grid-cols-2">
          {[
            ['06 / NEXT', 'More to come', 'The stack keeps growing with every experiment, idea, and problem worth solving.'],
            ['07 / OPEN', 'Have an idea?', "I'm always open to interesting ideas, collaborations, and things worth building together."],
          ].map(([label, title, text]) => (
            <div
              key={title}
              className="
                flex min-h-[190px] flex-col items-center justify-center
                rounded-xl border border-dashed border-[color:var(--border)]
                bg-[color:var(--soft-bg)] p-8 text-center
              "
            >
              <span className="mb-3 font-mono text-[9px] tracking-[0.25em] text-[color:var(--gold)]">
                {label}
              </span>

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-xl text-[color:var(--gold)]">
                +
              </div>

              <p className="font-display text-xl font-semibold text-[color:var(--text)]">
                {title}
              </p>

              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[color:var(--text-soft)]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Harsh-v01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[color:var(--text-muted)] transition hover:text-[color:var(--text)]"
          >
            View all on GitHub <span className="text-[color:var(--gold)]">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}