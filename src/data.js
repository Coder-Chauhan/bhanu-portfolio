// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Bhanu PS Chauhan',
  firstName: 'Bhanu',
  role: 'Software Engineer',
  tagline: 'I build scalable web applications, backend systems and automation tools.',
  location: 'Adelaide, Australia',
  email: 'bhanupsc12@gmail.com',
  phone: '+61 422 900 035',
  // TODO: replace with your actual profile URLs
  linkedin: 'https://www.linkedin.com/in/bhanu-ps-chauhan-446989158/',
  github: 'https://github.com/Coder-Chauhan?tab=repositories',
  resume: 'resume.pdf',
  // Your photo lives in the `public/` folder. Reference it by bare filename.
  // Leave as '' to fall back to the "B" monogram.
  avatar: 'avatar.png',
  summary:
    "I'm a software engineer with 2+ years of experience turning ideas into scalable, production-ready web applications, from the API layer up to the interface. My work spans full-stack development, backend services and automation tooling across JavaScript, Python and Java, and I'm at my best when there's a real constraint to design around: a payload that's too heavy, a pipeline that's too slow, a workflow that's too manual. On the Phoenix CMS platform I cut application latency by 35% and replaced fragile manual steps with automated CI/CD and content workflows, and I bring that same instinct for measurable, user-visible improvement to everything I build.",
}

export const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '35%', label: 'Latency reduction delivered' },
  { value: '6.06', label: 'Masters GPA (of 7.0)' },
  { value: '10+', label: 'Technologies shipped with' },
]

export const skills = [
  {
    category: 'Languages',
    icon: 'Code2',
    items: ['Java', 'Python', 'JavaScript', 'C++'],
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
    category: 'Data & Analytics',
    icon: 'Database',
    items: ['MongoDB', 'SQL', 'Pandas', 'NumPy', 'Power BI'],
  },
  {
    category: 'Tools & DevOps',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Linux', 'JIRA', 'CI/CD'],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Simplotel Technologies Private Limited',
    period: 'Aug 2022 – Feb 2024',
    type: 'Full-time',
    // `contribution` is a self-assessed placeholder; set it to a number you can
    // stand behind in an interview, or remove the field to hide the badge.
    contribution: 30,
    contributionLabel: 'of core platform delivery',
    narrative: [
      "Over roughly a year and a half on the core engineering team, I owned the end-to-end delivery of scalable features and reusable components for the Phoenix CMS platform, working primarily in JavaScript, Node.js and REST APIs. Performance was a central theme of my work: by reworking API payloads, introducing caching layers and streamlining frontend rendering workflows, I brought application latency down by 35%, a change that was felt directly by end users of the platform.",
      "Beyond feature work, I built automation tools and content-transformation workflows that removed a large share of manual processing and made deployments materially faster and more reliable, and I integrated CI/CD pipelines with GitHub Actions so that testing and releases could run with far less hands-on effort. I also developed dashboards and reporting tools that gave the product team the monitoring and data they needed to make informed decisions, and optimised the backend data-processing workflows that handled the platform's large-scale content datasets.",
    ],
    tags: ['JavaScript', 'Node.js', 'REST APIs', 'GitHub Actions', 'MongoDB'],
  },
  {
    role: 'Software Engineer (Intern)',
    company: 'Simplotel Technologies Private Limited',
    period: 'Jun 2021 – Jul 2022',
    type: 'Internship',
    contribution: 12,
    contributionLabel: 'of intern-team output',
    narrative: [
      "I joined Simplotel as an engineering intern and contributed across the CMS platform, helping build and refine features in JavaScript, HTML5, CSS3 and REST APIs. A good deal of my time went into writing automation and data-parsing scripts that streamlined everyday workflows and cut down on manual effort, and into working with both structured and unstructured datasets to keep data consistent and reliable.",
      "I collaborated closely with the team on debugging, API integration, testing and version control through Git and GitHub, supported the analytics and reporting work that improved how we monitored the platform, and came away with genuine hands-on experience of shipping software in an agile environment.",
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Git', 'Agile'],
  },
]

export const projects = [
  {
    name: 'LiveWell',
    subtitle: 'AI-Powered Digital Health Assistant',
    description:
      'A web and mobile application supporting elderly users with frailty assessment and health tracking, featuring dashboards, reminder systems and an OpenAI-powered chatbot for personalised health recommendations.',
    highlights: [
      'Built dashboards, reminders and progress tracking with React and MongoDB',
      'Integrated an OpenAI-powered chatbot for personalised recommendations',
      'Designed scalable backend APIs and a cloud-ready architecture',
    ],
    stack: ['React', 'React Native', 'Node.js', 'MongoDB', 'OpenAI API'],
    accent: 'from-indigo-500 to-cyan-400',
    icon: 'HeartPulse',
  },
  {
    name: 'Advanced Forecasting & Analytics Pipeline',
    subtitle: 'Time Series Prediction at Scale',
    description:
      'A scalable forecasting pipeline for time series prediction built on LSTM, CNN-LSTM and SARIMAX models, with reusable preprocessing modules and automated evaluation.',
    highlights: [
      'Reusable preprocessing and feature engineering modules for automated training',
      'Hyperparameter tuning, early stopping and ensemble forecasting',
      'Evaluation pipelines using RMSE, MAE and R² to improve accuracy',
    ],
    stack: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    accent: 'from-violet-500 to-fuchsia-400',
    icon: 'LineChart',
  },
]

export const education = [
  {
    degree: 'Master of Computer Science',
    school: 'The University of Adelaide',
    period: 'July 2024 – June 2026',
    detail: 'GPA: 6.06 / 7.0',
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Visvesvaraya Technological University',
    period: 'August 2018 - July 2022',
  }
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
