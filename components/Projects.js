import { motion } from 'framer-motion'
import { defaultContent } from '../lib/defaultContent'
import SectionDecor from './SectionDecor'

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z" />
    </svg>
  )
}

const STAGES = [
  'linear-gradient(145deg, #E8EEF5 0%, #F4F1EA 50%, #EDE8F5 100%)',
  'linear-gradient(145deg, #EAF5F0 0%, #F5F0E8 50%, #E8F0F5 100%)',
  'linear-gradient(145deg, #F5EDE8 0%, #F0EAF5 50%, #E8F0EE 100%)',
  'linear-gradient(145deg, #E8F0F5 0%, #F5F2E8 55%, #EEE8F5 100%)',
  'linear-gradient(145deg, #F0E8F5 0%, #E8F5F0 50%, #F5EFE8 100%)',
]

function isPhoneProject(project) {
  if (project.device === 'browser' || project.device === 'web') return false
  if (project.device === 'phone') return true

  const stack = (project.stack || []).join(' ').toLowerCase()
  const name = (project.name || '').toLowerCase()

  if (name.includes('year progress')) return false

  return stack.includes('android') || stack.includes('kotlin') || stack.includes('flutter')
}

function BrowserChrome({ title }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/5 bg-white/80 px-3 py-2 dark:border-white/10 dark:bg-black/40">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="mx-auto flex min-w-0 max-w-[70%] flex-1 items-center justify-center rounded-md bg-black/[0.04] px-3 py-1 dark:bg-white/10">
        <span className="truncate font-mono text-[10px] text-[var(--text-soft)]">{title}</span>
      </div>
    </div>
  )
}

function PhoneChrome() {
  return (
    <div className="flex items-center justify-center bg-black/80 px-3 py-2">
      <div className="h-1.5 w-16 rounded-full bg-white/25" />
    </div>
  )
}

function ScreenshotStage({ project, index, featured }) {
  const phone = isPhoneProject(project)
  const stage = STAGES[index % STAGES.length]

  return (
    <div
      className={`relative overflow-hidden ${
        featured
          ? 'aspect-[16/10] sm:aspect-[16/9]'
          : phone
            ? 'aspect-[4/5] sm:aspect-[10/12]'
            : 'aspect-[16/11]'
      }`}
      style={{ background: stage }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.7),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className={`absolute inset-0 flex items-center justify-center ${featured ? 'p-6 sm:p-10 md:p-12' : 'p-5 sm:p-7'}`}>
        <div
          className={`relative overflow-hidden bg-[var(--surface)] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02] ${
            phone
              ? 'w-[58%] max-w-[240px] rounded-[1.6rem] border-[3px] border-[#1a1a1a] sm:w-[52%]'
              : 'w-full max-w-[920px] rounded-xl border border-black/10 sm:rounded-2xl dark:border-white/10'
          }`}
        >
          {phone ? <PhoneChrome /> : <BrowserChrome title={project.name} />}

          <div className={`bg-[var(--bg)] ${phone ? 'aspect-[9/16]' : ''}`}>
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className={`block w-full ${phone ? 'h-full object-cover object-top' : 'h-auto object-contain object-top'}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index, featured = false }) {
  const num = project.index || String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`group overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)] shadow-[var(--card-shadow)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--border-strong)] hover:shadow-[var(--card-shadow-strong)] ${
        featured ? 'col-span-full' : ''
      }`}
    >
      <ScreenshotStage project={project} index={index} featured={featured} />

      <div className={`flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between ${featured ? 'sm:p-8 lg:px-10 lg:pb-10' : 'sm:p-6'}`}>
        <div className="min-w-0 max-w-2xl">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--text-soft)]">{num}</span>
            <span className="font-mono text-[11px] text-[var(--accent)]">{project.tagline}</span>
          </div>
          <h3 className={`font-display font-semibold tracking-tight text-[var(--text)] ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{project.desc}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {(project.stack || []).slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-full bg-[var(--soft-bg)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-soft)]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border-strong)] px-4 py-2 text-[12px] text-[var(--text-muted)] transition hover:border-[var(--text)] hover:text-[var(--text)]"
            >
              <GithubIcon />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-1 rounded-full bg-[var(--text)] px-4 py-2 text-[12px] font-medium text-[var(--bg)] transition hover:bg-[var(--accent)]"
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects({ projects = defaultContent.projects }) {
  const list = projects?.length ? projects : defaultContent.projects
  const [featured, ...rest] = list

  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20">
      <SectionDecor ghost="WORK" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-soft)]">Work</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Selected projects
          </h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Real builds — framed as product panels, not a dump of raw screenshots.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {featured && <ProjectCard project={featured} index={0} featured />}
          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((project, index) => (
                <ProjectCard key={project.name + index} project={project} index={index + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
