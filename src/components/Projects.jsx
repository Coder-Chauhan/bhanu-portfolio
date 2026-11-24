import { HeartPulse, LineChart, BrainCircuit, ClipboardList, FileSearch, Workflow, ArrowUpRight, Check } from 'lucide-react'
import Section from './Section'
import { projects } from '../data'

const ICONS = { HeartPulse, LineChart, BrainCircuit, ClipboardList, FileSearch, Workflow }

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04 / Selected work" title="Things I've built">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => {
          const Icon = ICONS[p.icon] ?? HeartPulse
          return (
            <article
              key={p.name}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.02] dark:hover:shadow-black/40"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${p.accent}`} />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-lg`}
                  >
                    <Icon size={22} />
                  </span>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`}>
                      <ArrowUpRight
                        size={20}
                        className="text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-slate-600"
                      />
                    </a>
                  ) : (
                    <ArrowUpRight
                      size={20}
                      className="text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-slate-600"
                    />
                  )}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">{p.subtitle}</p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg bg-slate-100 px-2.5 py-1.5 font-mono text-[11px] text-slate-600 dark:bg-white/5 dark:text-slate-400"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
