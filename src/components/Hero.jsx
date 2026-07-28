import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile, stats } from '../data'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px] dark:bg-indigo-500/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
            <Sparkles size={13} />
            Open to Software Engineer roles
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            Hi, I&apos;m {profile.firstName}.
            <br />
            <span className="gradient-text">{profile.role}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {profile.tagline} 2+ years across JavaScript, Python and Java, with a focus on API design,
            performance and clean, maintainable systems.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
            <MapPin size={15} />
            {profile.location}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              View my work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5"
            >
              <Mail size={16} />
              Get in touch
            </a>

            <div className="mt-2 flex items-center gap-2 sm:ml-2 sm:mt-0">
              {[
                { href: profile.github, icon: Github, label: 'GitHub' },
                { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-slate-400 dark:hover:border-indigo-400/50 dark:hover:text-indigo-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-5 py-6 sm:px-6 dark:bg-[#0b0f19]">
              <dt className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{s.value}</dt>
              <dd className="mt-1.5 text-xs leading-snug text-slate-500 sm:text-sm dark:text-slate-500">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
