import { Code2, Layout, Server, Database, Wrench, ShieldCheck } from 'lucide-react'
import Section from './Section'
import { skills } from '../data'

const ICONS = { Code2, Layout, Server, Database, Wrench, ShieldCheck }

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Toolkit" title="Technologies I work with">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => {
          const Icon = ICONS[group.icon] ?? Code2
          return (
            <div
              key={group.category}
              className="reveal group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-indigo-400/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 text-indigo-600 ring-1 ring-indigo-500/15 dark:text-indigo-400">
                <Icon size={19} />
              </span>
              <h3 className="mt-5 font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-slate-100 px-2.5 py-1.5 font-mono text-xs text-slate-600 transition-colors group-hover:bg-slate-200/70 dark:bg-white/5 dark:text-slate-400 dark:group-hover:bg-white/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
