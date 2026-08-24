import { motion } from 'framer-motion'
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
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="project-tile group relative h-[380px] w-[650px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#0b0c0e] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20 dark:hover:shadow-[0_25px_80px_rgba(255,90,46,0.10)]">

      {/* FULL PROJECT IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#0b0c0e]">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      </div>

      {/* Default subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

      {/* Number */}
      <span className="absolute left-5 top-5 z-30 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 px-2 font-mono text-[10px] tracking-widest text-white backdrop-blur-md">
        {number}
      </span>

      {/* Default project name */}
      <div className="absolute bottom-6 left-6 right-6 z-20 transition-all duration-500 group-hover:translate-y-5 group-hover:opacity-0">
        <h3 className="font-display text-2xl font-semibold text-white">
          {project.name}
        </h3>

        <p className="mt-1 font-body text-xs text-white/60">
          {project.tagline}
        </p>
      </div>

      {/* Hover details */}
      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-3 bg-gradient-to-t from-black via-black/95 to-black/60 px-7 pb-7 pt-20 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">

        <div className="flex items-end justify-between gap-8">

          {/* Information */}
          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-3">
              <h3 className="font-display text-2xl font-semibold text-white">
                {project.name}
              </h3>

              <span className="font-mono text-base text-[var(--accent)]">
                ↗
              </span>
            </div>

            <p className="mt-1 font-body text-sm text-white/55">
              {project.tagline}
            </p>

            <div className="my-4 h-px w-10 bg-[var(--gold)]" />

            <p className="max-w-2xl font-body text-sm leading-relaxed text-white/70">
              {project.desc}
            </p>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] text-white/55"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 font-body text-xs text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <GithubIcon />
              GitHub
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-body text-xs font-medium text-black transition-colors hover:bg-[var(--accent)] hover:text-white"
              >
                Live Demo ↗
              </a>
            )}
          </div>

        </div>
      </div>

      {/* Subtle border */}
      <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-500 group-hover:border-[var(--accent)]/30" />
    </article>
  )
}

function ComingSoonCard({ index, title, text }) {
  return (
    <div className="flex h-[420px] w-[250px] shrink-0 flex-col items-center justify-center rounded-xl border border-dashed border-[color:var(--border)] bg-[color:var(--soft-bg)]/30 p-8 text-center">
      <span className="mb-6 font-mono text-[10px] tracking-[0.25em] text-[color:var(--gold)]">
        {index}
      </span>

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border)] text-2xl text-[color:var(--gold)]">
        +
      </div>

      <p className="mb-2 font-display text-2xl font-semibold text-[color:var(--text)]">
        {title}
      </p>

      <p className="max-w-xs font-body text-xs leading-relaxed text-[color:var(--text-soft)]">
        {text}
      </p>
    </div>
  )
}

export default function Projects({
  projects = defaultContent.projects,
}) {
  const [ref, inView] = useInView()

  const projectSet = projects.slice(0, 5)

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[color:var(--page-bg)] py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--hero-glow-warm) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-6">
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
        </div>

        {/* Project rail */}
        <div className="relative mt-14 overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-24 bg-gradient-to-r from-[color:var(--page-bg)] to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-24 bg-gradient-to-l from-[color:var(--page-bg)] to-transparent" />

          <div className="project-marquee">
            <div className="project-marquee-track">
              <div className="project-marquee-group">
                {projectSet.map((project, index) => (
                  <ProjectCard
                    key={`first-${project.name}`}
                    project={project}
                    index={index}
                  />
                ))}
              </div>

              <div
                className="project-marquee-group"
                aria-hidden="true"
              >
                {projectSet.map((project, index) => (
                  <ProjectCard
                    key={`second-${project.name}`}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future projects */}
        <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-5 px-6 md:flex-row">
          <ComingSoonCard
            index="06 / NEXT"
            title="More to come"
            text="The stack keeps growing with every experiment, idea, and problem worth solving."
          />

          <ComingSoonCard
            index="07 / OPEN"
            title="Have an idea?"
            text="I'm always open to interesting ideas, collaborations, and things worth building together."
          />
        </div>

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

      <style jsx>{`
        .project-marquee {
          width: 100%;
        }

        .project-marquee-track {
          display: flex;
          width: max-content;
          animation: project-scroll 40s linear infinite;
          will-change: transform;
        }

        .project-marquee-group {
          display: flex;
          gap: 1.25rem;
          padding-right: 1.25rem;
          flex-shrink: 0;
        }

        .project-marquee:hover .project-marquee-track {
          animation-play-state: paused;
        }

        @keyframes project-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-marquee-track {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .project-tile {
            width: 85vw;
            height: 320px;
          }

          .project-marquee-track {
            animation-duration: 34s;
          }
        }
      `}</style>
    </section>
  )
}