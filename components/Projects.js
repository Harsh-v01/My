import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const projects = [
  {
    index: '01',
    name: 'Samvad',
    tagline: 'Real-time communication app',
    desc: 'A communication app built around real-time messaging and accessible interaction. One of my bigger experiments in bringing together mobile development, Firebase, speech technologies, and a simple user experience.',
    stack: ['React Native', 'Firebase', 'Google Cloud', 'Speech API'],
    github: 'https://github.com/Harsh-v01/Samwaad_v02',
    live: 'https://chat-html-rapy.onrender.com/',
    accent: '#C84B31',
  },
  {
    index: '02',
    name: 'AI Academic Hub',
    tagline: 'OCR + AI workflow system',
    desc: 'An experiment in turning academic documents into something easier to work with — combining OCR, AI processing, and a web interface to extract and work with useful information.',
    stack: ['Python', 'FastAPI', 'Tesseract', 'OpenAI', 'React'],
    github: 'https://github.com/Harsh-v01/Padh.AI',
    live: 'https://padh-ai-umber.vercel.app/',
    accent: '#55677A',
  },
  {
    index: '03',
    name: 'Certificate Generator',
    tagline: 'Automation tool with QR',
    desc: 'A tool I built to take the repetitive work out of generating certificates. It creates certificates in bulk, adds unique QR codes, and exports them as PDFs.',
    stack: ['Python', 'Pillow', 'qrcode', 'Flask'],
    github: 'https://github.com/Harsh-v01/Certi_generator',
    live: null,
    accent: '#8FA6AC',
  },
  {
    index: '04',
    name: 'Year Progress Dots',
    tagline: 'A visual way to see time passing',
    desc: 'A minimal Android app and home-screen widget that represents the progress of the year and week through simple dots — designed to make the passing of time visible at a glance.',
    stack: ['Android', 'Kotlin', 'UI/UX', 'Widgets'],
    github: 'https://github.com/Harsh-v01/YearProgressDots',
    live: 'https://harsh-v01.github.io/YearProgressDots/',
    accent: '#8B6F1F',
  },
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col bg-[#F5EDE2]/50 border border-[rgba(200,75,49,0.12)] rounded-2xl p-7 hover:bg-[#F5EDE2] hover:border-[rgba(200,75,49,0.25)] hover:shadow-[0_8px_40px_rgba(200,75,49,0.08)] transition-all duration-400"
    >
      {/* Index */}
      <span className="font-mono text-xs text-[#D9BF77] tracking-widest mb-5">
        {project.index}
      </span>

      {/* Title */}
      <h3 className="font-display text-2xl font-light text-[#2E4052] mb-1">
        {project.name}
      </h3>

      <p className="font-body text-sm text-[#8FA6AC] mb-4">
        {project.tagline}
      </p>

      {/* Divider */}
      <div className="w-8 h-px bg-[rgba(139,111,71,0.2)] mb-5 group-hover:w-16 transition-all duration-500" />

      {/* Description */}
      <p className="font-body text-sm text-[#3D4F60] leading-relaxed mb-6 flex-1">
        {project.desc}
      </p>

      {/* Stack pills */}
      <div className="flex flex-wrap gap-2 mb-7">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-full text-[11px] font-mono text-[#55677A] border border-[rgba(200,75,49,0.15)] bg-[#F0E5D8] tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-[#3D4F60] hover:text-[#2E4052] transition-colors border border-[rgba(200,75,49,0.2)] rounded-full px-3.5 py-1.5 hover:border-[rgba(200,75,49,0.4)]"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </a>

        {/* Live Demo */}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-[#F0E5D8] bg-[#2E4052] rounded-full px-3.5 py-1.5 hover:bg-[#C84B31] transition-colors"
          >
            Live Demo
            <span>↗</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section
      id="projects"
      className="py-28 lg:py-36 bg-[#FAF7F2]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
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
            eyebrow="Work"
            heading="Featured Projects"
            sub="Things I've built and shipped — each one a lesson."
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Real Projects */}
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
            />
          ))}

          {/* Currently Building */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group p-7 rounded-2xl border border-dashed border-[rgba(139,111,71,0.2)] bg-[#F5EDE2]/30 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <span className="font-mono text-xs text-[#D9BF77] tracking-widest">
                05 · NEXT
              </span>

              <div className="mt-8">
                <h3 className="font-display text-2xl font-light italic text-[#2E4052] mb-3">
                  Currently building...
                </h3>

                <div className="w-8 h-px bg-[rgba(139,111,71,0.2)] mb-5 group-hover:w-16 transition-all duration-500" />

                <p className="font-body text-sm text-[#8FA6AC] leading-relaxed">
                  There is always another idea somewhere between
                  “this could be useful” and “let's see if I can build it.”
                </p>
              </div>
            </div>

            <div className="mt-7">
              <span className="font-mono text-[10px] text-[#8B6F1F] tracking-[0.2em]">
                MORE TO COME
              </span>
            </div>
          </motion.div>

          {/* Open to Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group p-7 rounded-2xl border border-dashed border-[rgba(139,111,71,0.2)] bg-[#F5EDE2]/30 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <span className="font-mono text-xs text-[#D9BF77] tracking-widest">
                06 · OPEN
              </span>

              <div className="mt-8">
                <h3 className="font-display text-2xl font-light italic text-[#2E4052] mb-3">
                  What's next?
                </h3>

                <div className="w-8 h-px bg-[rgba(139,111,71,0.2)] mb-5 group-hover:w-16 transition-all duration-500" />

                <p className="font-body text-sm text-[#8FA6AC] leading-relaxed">
                  Maybe the next project starts with a conversation.
                  I'm always interested in interesting problems,
                  collaborations, and things worth building.
                </p>
              </div>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contactharsh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-body text-[#3D4F60] hover:text-[#C84B31] transition-colors"
            >
              Let's talk
              <span>→</span>
            </a>
          </motion.div>

        </div>

        {/* GitHub Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Harsh-v01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-body text-[#55677A] hover:text-[#2E4052] transition-colors"
          >
            View all on GitHub
            <span className="text-[#D9BF77]">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}