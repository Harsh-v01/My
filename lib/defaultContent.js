// This is the fallback content shown instantly on every page load, and the
// seed data the admin panel starts from. Nothing breaks if Firebase is down
// or not configured yet — the site just shows this.

export const defaultContent = {
  hero: {
    firstName: 'Harsh',
    lastName: 'Kumar',
    role: 'Software Engineer',
    tagline: 'I enjoy solving messy problems and turning them into simple products.',
    photo: '/Harsh.jpg',
    stats: [
      { num: '4+', label: 'Projects shipped' },
      { num: '3+', label: 'Years learning' },
      { num: '1', label: 'Hackathon win' },
    ],
  },

  about: {
    paragraphs: [
      "I'm Harsh — a software engineer who likes building things and figuring out how they work. Over the last few years, I've explored web development, mobile apps, AI, automation, and whatever else happened to catch my curiosity.",
      "I'm still figuring out where I want to go — and I actually like that. I enjoy difficult problems, learning from people who are better than me, and seeing an idea turn into something real. Right now, I'm looking for opportunities where I can contribute, learn fast, and become the kind of engineer people can rely on.",
    ],
    availabilityText: 'Open to opportunities',
    traits: [
      {
        icon: '[]',
        title: 'I Build to Learn',
        desc: 'I understand things better when I build them. Most of my learning has come from turning random ideas into working projects and figuring things out when they inevitably break.',
      },
      {
        icon: '<>',
        title: 'I Like Exploring',
        desc: 'I have a hard time sticking to just one area of technology. I enjoy moving between software, AI, automation, and new tools when something catches my attention.',
      },
      {
        icon: '()',
        title: 'I Care About the Problem',
        desc: 'Before worrying about the technology, I try to understand what we are actually trying to solve. Good software, to me, should make something simpler, better, or possible.',
      },
    ],
  },

  projects: [
    {
      index: '01',
      name: 'Samvad',
      tagline: 'Real-time communication app',
      desc: 'A communication app built around real-time messaging and accessible interaction, with language support and speech-based features.',
      stack: ['React', 'Firebase', 'Google Cloud', 'Speech API'],
      image: '/projects/samvad.png',
      github: 'https://github.com/Harsh-v01/Samwaad_v02',
      live: 'https://chat-html-rapy.onrender.com/',
    },
    {
      index: '02',
      name: 'padh.AI',
      tagline: 'AI Academic Hub',
      desc: 'An experiment in turning academic documents into something easier to work with — combining OCR, AI processing, and a focused web interface.',
      stack: ['Python', 'FastAPI', 'Tesseract OCR', 'OpenAI', 'React'],
      image: '/projects/padh-AI.png',
      github: 'https://github.com/Harsh-v01/Padh.AI',
      live: 'https://padh-ai-umber.vercel.app/',
    },
    {
      index: '03',
      name: 'Certificate Generator',
      tagline: 'Automation tool with QR',
      desc: 'A tool for generating certificates in bulk, embedding unique QR codes, and exporting finished certificates as PDFs.',
      stack: ['Python', 'Pillow', 'qrcode', 'Flask'],
      image: '/projects/certificate-generator.png',
      github: 'https://github.com/Harsh-v01/Certi_generator',
      live: '',
    },
    {
      index: '04',
      name: 'Year Progress Dots',
      tagline: 'A visual way to see time passing',
      desc: 'A minimal Android app and home-screen widget that represents the progress of the year and week through simple dots.',
      stack: ['Android', 'Kotlin', 'UI/UX', 'Widgets'],
      image: '/projects/year-progress-dots.png',
      github: 'https://github.com/Harsh-v01/YearProgressDots',
      live: 'https://harsh-v01.github.io/YearProgressDots/',
    },
  ],

  skills: [
    {
      label: 'Languages',
      icon: '[]',
      skills: ['Java', 'JavaScript', 'Python', 'C', 'C++', 'PHP', 'SQL'],
    },
    {
      label: 'Web & App Development',
      icon: '<>',
      skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'React Native', 'Flutter', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      label: 'Backend & Databases',
      icon: '()',
      skills: ['MongoDB', 'MySQL', 'Firebase', 'REST APIs', 'Socket.io'],
    },
    {
      label: 'AI & Cloud',
      icon: '{}',
      skills: ['Google Cloud', 'OpenAI', 'OCR', 'Prompt Engineering', 'Automation'],
    },
    {
      label: 'Tools I Use',
      icon: '//',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
    },
  ],

  journey: [
    {
      year: '2022',
      title: 'Started with a lot to figure out',
      desc: 'Started my B.Tech journey at MIT ADT University, Pune. I was still figuring out what I wanted to do, but programming quickly became something I wanted to understand better.',
    },
    {
      year: '2023',
      title: 'Started building outside the classroom',
      desc: 'I began working on small projects, exploring different technologies, and getting involved in college activities. This was also when I realised I learn much faster when I actually build something.',
    },
    {
      year: '2024',
      title: 'More experiments, bigger problems',
      desc: 'Worked on projects, hackathons, and student initiatives while exploring areas like mobile development, cloud, AI, and automation. Not everything worked - but every failed attempt taught me something useful.',
    },
    {
      year: '2025',
      title: 'Figuring out what I enjoy',
      desc: 'Started going deeper into software development while experimenting with AI, automation, full-stack projects, and different ways of turning ideas into working products.',
    },
    {
      year: '2026',
      title: 'Graduated. Now the real journey begins.',
      desc: 'Completed my B.Tech and started looking beyond college - towards real products, real problems, and opportunities where I can contribute while continuing to grow as an engineer.',
    },
  ],

  experiments: [
    {
      title: 'AI & Generative AI',
      desc: 'Experimenting with AI tools, APIs, and workflows to understand where they can actually make software more useful - not just where they look impressive.',
      tag: 'Exploring',
    },
    {
      title: 'Automation',
      desc: 'I like finding repetitive problems and thinking, "can this be done automatically?" Exploring agents, workflows, APIs, and tools that can make everyday work simpler.',
      tag: 'Building',
    },
    {
      title: 'Better Software',
      desc: 'Learning how to go beyond making something work - cleaner code, better architecture, better user experiences, and understanding the decisions behind good software.',
      tag: 'Learning',
    },
    {
      title: 'New Ideas',
      desc: 'I tend to go down interesting rabbit holes. Right now that means experimenting with different technologies, building small things, and seeing which ideas are worth taking further.',
      tag: 'Always',
    },
  ],

  contact: {
    description: "Whether it's a project idea, a collaboration, or just a hello — I'd love to hear from you.",
    email: 'contactharsh15113@gmail.com',
    links: [
      {
        key: 'email',
        label: 'Email',
        value: 'contactharsh15113@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=contactharsh15113@gmail.com',
      },
      {
        key: 'linkedin',
        label: 'LinkedIn',
        value: 'Professional profile',
        href: 'https://linkedin.com/in/harsh015',
      },
      {
        key: 'github',
        label: 'GitHub',
        value: 'Tech playground',
        href: 'https://github.com/harsh-v01',
      },
    ],
  },

  resume: {
    // Drop your actual PDF at /public/resume.pdf (same file name), or change
    // this url from the admin panel to point anywhere else (Drive link, etc).
    url: '/resume.pdf',
    fileName: 'Harsh-Kumar-Resume.pdf',
  },
}
