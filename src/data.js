// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Bhanu PS Chauhan',
  firstName: 'Bhanu',
  role: 'Software Engineer',
  tagline: 'I build scalable web applications, backend systems, automation tools and applied ML pipelines.',
  location: 'Sydney, Australia',
  email: 'bhanupsc12@gmail.com',
  phones: [
    { label: 'Phone (Australia)', value: '+61 422 900 035' },
    { label: 'Phone (India)', value: '+91 90356 27286' },
  ],
  // TODO: replace with your actual profile URLs
  linkedin: 'https://www.linkedin.com/in/bhanu-ps-chauhan-446989158/',
  github: 'https://github.com/Coder-Chauhan?tab=repositories',
  // Your photo lives in the `public/` folder. Reference it by bare filename.
  // Leave as '' to fall back to the "B" monogram.
  avatar: 'avatar.png',
  summary:
    "I'm a software engineer with 2+ years of industry experience across full-stack development, backend systems and applied machine learning, plus academic grounding in cloud security from my Master of Computer Science. My work spans API development, automation and data-driven reporting in JavaScript, Python and Java, and I'm at my best when there's a real constraint to design around: a payload that's too heavy, a pipeline that's too slow, a workflow that's too manual. On the Phoenix CMS platform I cut application latency by 35% and replaced fragile manual steps with automated CI/CD and content workflows. More recently, at the University of Adelaide, I've taught machine learning to cohorts of 100+ students and automated marking and exam processing at scale.",
}

export const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '35%', label: 'Latency reduction delivered' },
  { value: '6.06', label: 'Masters GPA (of 7.0)' },
  { value: '100+', label: 'Students per ML workshop' },
]

export const skills = [
  {
    category: 'Languages',
    icon: 'Code2',
    items: ['Java', 'Python', 'JavaScript', 'C++'],
  },
  {
    category: 'Security & Cloud',
    icon: 'ShieldCheck',
    items: ['Cloud security fundamentals', 'Secure API design', 'CI/CD pipeline security'],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    items: ['ReactJS', 'React Native', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'FastAPI'],
  },
  {
    category: 'Databases & Analytics',
    icon: 'Database',
    items: ['MongoDB', 'SQL', 'Pandas', 'NumPy', 'Power BI'],
  },
  {
    category: 'Tools & Technologies',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Linux', 'JIRA', 'CI/CD (GitHub Actions)'],
  },
]

export const experience = [
  {
    role: 'Teaching Lecturer',
    company: 'The University of Adelaide',
    period: 'Mar 2025 – Oct 2026',
    type: 'Adelaide, SA',
    narrative: [
      "I ran machine learning workshops for 100+ students per session, teaching supervised learning, neural networks and model evaluation, and debugging students' models live during practicals. Explaining why a model fails, in real time and to a full room, sharpened my own understanding of the fundamentals considerably.",
      "Alongside teaching, I automated assignment marking in Gradescope, removing hours of manual grading per assessment across the teaching team, and contributed to course design by proposing curriculum changes and building the tutorial and practical materials the whole team used.",
    ],
    tags: ['Machine Learning', 'Neural Networks', 'Python', 'Gradescope', 'Automation'],
  },
  {
    role: 'Exam Assistant',
    company: 'The University of Adelaide',
    period: 'Jun 2025 – Oct 2026',
    type: 'Adelaide, SA',
    narrative: [
      "I ran end-to-end exam processing for 20+ subjects and 5,000+ scripts, coordinating scanning, Gradescope ingestion and rubric configuration so that marking could happen online, accurately and on schedule.",
    ],
    tags: ['Gradescope', 'Process Automation', 'Operations'],
  },
  {
    role: 'Software Engineer',
    company: 'Simplotel Technologies',
    period: 'Aug 2022 – Feb 2024',
    type: 'Full-time',
    // `contribution` is a self-assessed placeholder; set it to a number you can
    // stand behind in an interview, or remove the field to hide the badge.
    contribution: 30,
    contributionLabel: 'of core platform delivery',
    narrative: [
      "Over roughly a year and a half on the core engineering team, I owned the end-to-end delivery of scalable features and reusable components for the Phoenix CMS platform, working primarily in JavaScript, Node.js and REST APIs. Performance was a central theme of my work: by reworking API payloads, introducing caching layers and streamlining frontend rendering workflows, I brought application latency down by 35%, a change that was felt directly by end users of the platform.",
      "Beyond feature work, I built automation tools and content-transformation workflows that removed a large share of manual processing and made deployments materially faster and more reliable, and I integrated CI/CD pipelines with GitHub Actions so that testing and releases could run with far less hands-on effort. I also developed dashboards and reporting tools that gave the product team the monitoring and data they needed to make informed decisions, optimised the backend data-processing workflows that handled the platform's large-scale content datasets, and developed and maintained the backend services behind its content management workflows, all while collaborating with cross-functional teams on reliability and user experience.",
    ],
    tags: ['JavaScript', 'Node.js', 'REST APIs', 'GitHub Actions', 'MongoDB'],
  },
  {
    role: 'Software Engineer (Intern)',
    company: 'Simplotel Technologies',
    period: 'Jul 2021 – Jul 2022',
    type: 'Internship',
    contribution: 12,
    contributionLabel: 'of intern-team output',
    narrative: [
      "I joined Simplotel as an engineering intern and contributed across the CMS platform, helping build and refine features in JavaScript, HTML5, CSS3 and REST APIs. A good deal of my time went into writing automation and data-parsing scripts that streamlined everyday workflows and cut down on manual effort, and into working with both structured and unstructured datasets to keep data consistent and reliable.",
      "I collaborated closely with the team on debugging, API integration, testing and version control through Git and GitHub, supported the analytics and reporting work that improved how we monitored the platform, contributed to platform performance and usability through feature testing and issue resolution, and came away with genuine hands-on experience of shipping software in an agile environment.",
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Git', 'Agile'],
  },
]

export const projects = [
  {
    name: 'LangGraph Research Agent',
    subtitle: 'Tool-Using AI Agent with Memory and Human-in-the-Loop',
    description:
      'A research assistant built as an explicit LangGraph state machine. The agent reasons over a question, calls tools for arithmetic, Wikipedia lookups and live web search, and loops until it can give a sourced answer, with conversations persisted across sessions.',
    highlights: [
      'Custom StateGraph with agent and tool nodes, conditional routing and a per-turn step limit to stop runaway loops',
      'SQLite checkpointer keeps multi-turn memory per thread, so conversations can be resumed later',
      'Optional human approval: the graph pauses before each tool call and the user can approve or decline it',
      'Safe AST-based calculator, tool error recovery, and a provider switch between OpenAI and Anthropic models',
      'Offline pytest suite driven by a scripted fake LLM covering the tool loop, memory and interrupts',
    ],
    stack: ['Python', 'LangGraph', 'LangChain', 'OpenAI API', 'SQLite', 'pytest'],
    accent: 'from-amber-500 to-orange-400',
    icon: 'Workflow',
    link: 'https://github.com/Coder-Chauhan/langgraph-research-agent',
  },
  {
    name: 'RAG Docs QA',
    subtitle: 'Retrieval-Augmented Generation API for Document Q&A',
    description:
      'A FastAPI service that answers questions about uploaded documents. PDFs, Markdown and text files are chunked, embedded and stored in ChromaDB, and GPT-4o-mini answers only from the retrieved context with numbered source citations.',
    highlights: [
      'Ingestion pipeline: text extraction, overlapping chunking, OpenAI embeddings and a persistent ChromaDB vector store',
      'Grounded answers with page-level citations; the model says so when the answer is not in the documents',
      'REST endpoints for upload, query, listing and reset, with auto-generated Swagger docs',
      'Offline pytest suite using fake embeddings and a fake LLM, plus Docker and GitHub Actions CI',
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'OpenAI API', 'Docker'],
    accent: 'from-emerald-500 to-teal-400',
    icon: 'FileSearch',
    link: 'https://github.com/Coder-Chauhan/rag-docs-qa',
  },
  {
    name: 'Automated Document Generation Pipeline',
    subtitle: 'End-to-End LLM Alignment: SFT, Reward Modelling and DPO',
    description:
      'An end-to-end alignment pipeline covering supervised fine-tuning, reward modelling, DPO and evaluation, comparing two base models (distilgpt2 and gpt2) across two public preference datasets.',
    highlights: [
      'Converted Anthropic HH-RLHF and NVIDIA HelpSteer2 into chosen/rejected preference pairs',
      'Trained DistilBERT reward models on 4,000 pairs per dataset',
      'Ran DPO training on HH-RLHF pairs using Hugging Face TRL',
      'Evaluated with held-out preference accuracy, BLEU/ROUGE, reward scores and a blind human evaluation template',
    ],
    stack: ['Python', 'PyTorch', 'Hugging Face TRL', 'Transformers', 'DistilBERT'],
    accent: 'from-indigo-500 to-cyan-400',
    icon: 'BrainCircuit',
    link: 'https://github.com/Coder-Chauhan?tab=repositories',
  },
  {
    name: "Students' Ethical Awareness When Using LLMs",
    subtitle: 'Mixed-Methods Survey Research',
    description:
      'A mixed-methods study of 120 students across six disciplines, using scenario vignettes and validated ethical awareness scales to understand how students judge LLM use in their schoolwork.',
    highlights: [
      'Analysed with descriptive statistics, cross-tabulation and thematic coding',
      'Found students accept LLMs for support (5.9 to 6.2 of 7) but reject them as a replacement for their own work (1.5 to 3.1)',
      'Clear policy understanding lifted ethical confidence from 3.4 to 5.2',
      'Validated against large external surveys (n = 3,839) and distilled into five institutional recommendations',
    ],
    stack: ['Survey Design', 'Statistics', 'Thematic Analysis', 'Research'],
    accent: 'from-violet-500 to-fuchsia-400',
    icon: 'ClipboardList',
  },
]

export const education = [
  {
    degree: 'Master of Computer Science',
    school: 'The University of Adelaide',
    period: 'Jul 2024 – Jul 2026',
    detail: 'GPA: 6.06 / 7.0',
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Visvesvaraya Technological University',
    period: 'Aug 2018 – Jul 2022',
    detail: 'GPA: 7.91 / 10',
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
