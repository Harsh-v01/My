import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'
import { defaultContent } from '../lib/defaultContent'

function GithubIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function SpotlightCard({ children, className = '' }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] shadow-none transition-all duration-500 dark:shadow-[0_0_45px_rgba(255,90,46,0.10),0_0_100px_rgba(255,90,46,0.045)] hover:-translate-y-1 dark:hover:shadow-[0_0_55px_rgba(255,90,46,0.14),0_0_120px_rgba(255,90,46,0.06)] ${className}`}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <SpotlightCard className="h-full">
        {/* Project image */}
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--soft-bg)]">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60" />

          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-2.5 py-1 font-mono text-[10px] tracking-widest text-white backdrop-blur-sm">
            {project.index}
          </span>
        </div>

        {/* Content */}
        <div className="flex min-h-[390px] flex-col p-6">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="font-display text-2xl font-semibold text-[color:var(--text)]">
              {project.name}
            </h3>

            <span className="translate-x-2 font-mono text-lg text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              ↗
            </span>
          </div>

          <p className="mb-4 font-body text-sm text-[color:var(--text-soft)]">
            {project.tagline}
          </p>

          <div className="mb-5 h-px w-8 bg-[color:var(--gold)] transition-all duration-500 group-hover:w-14" />

          <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-[color:var(--text-muted)]">
            {project.desc}
          </p>

          {/* Stack */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--soft-bg)] px-2.5 py-1 font-mono text-[10px] tracking-wide text-[color:var(--text-soft)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3.5 py-1.5 font-body text-xs font-medium text-[color:var(--text-muted)] transition-all duration-300 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              <GithubIcon />
              GitHub
            </a>

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--text)] px-3.5 py-1.5 font-body text-xs font-medium text-[color:var(--surface)] transition-all duration-300 hover:bg-[color:var(--accent)]"
              >
                Live Demo
                <span>↗</span>
              </a>
            ) : (
              <span className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3.5 py-1.5 font-body text-xs text-[color:var(--text-soft)]">
                No Live Demo
              </span>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  )
}

function ComingSoonCard({ index, title, text }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.32,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-dashed border-[color:var(--border)] bg-[color:var(--soft-bg)]/50 p-8 text-center transition-all duration-500 hover:border-[color:var(--gold)]/50"
    >
      <span className="mb-5 font-mono text-xs tracking-[0.25em] text-[color:var(--gold)]">
        {index}
      </span>

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border)] text-2xl font-normal text-[color:var(--gold)]">
        +
      </div>

      <p className="mb-2 font-display text-2xl font-semibold text-[color:var(--text)]">
        {title}
      </p>

      <p className="max-w-xs font-body text-xs leading-relaxed text-[color:var(--text-soft)]">
        {text}
      </p>
    </motion.div>
  )
}

export default function Projects({
  projects = defaultContent.projects,
}) {
  const [ref, inView] = useInView()

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[color:var(--page-bg)] py-28 lg:py-36"
    >
      {/* Existing section background glow */}
      <div
        className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--hero-glow-warm) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SectionHeader
            index="02"
            eyebrow="Work"
            heading="Featured Projects"
            sub="Things I've built, shipped, and learned from along the way."
          />
        </motion.div>

        {/* Projects */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
            />
          ))}

          <ComingSoonCard
            index="05 / NEXT"
            title="More to come"
            text="The stack keeps growing with every experiment, idea, and problem worth solving."
          />

          <ComingSoonCard
            index="06 / OPEN"
            title="Have an idea?"
            text="I'm always open to interesting ideas, collaborations, and things worth building together."
          />
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Harsh-v01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
          >
            View all on GitHub
            <span className="text-[color:var(--gold)]">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}