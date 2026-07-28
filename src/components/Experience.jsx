import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 / Career" title="Where I've worked">
      <ol className="relative space-y-12 border-l border-slate-200 pl-8 sm:pl-10 dark:border-white/10">
        {experience.map((job) => (
          <li key={job.role + job.period} className="reveal relative">
            <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[49px]">
              <span className="absolute h-4 w-4 animate-ping rounded-full bg-indigo-500/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-50 dark:ring-[#0b0f19]" />
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
              <span className="shrink-0 font-mono text-xs text-slate-400 dark:text-slate-500">
                {job.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {job.company} · {job.type}
            </p>

            {typeof job.contribution === 'number' && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 dark:border-indigo-400/20 dark:bg-indigo-400/10">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-300">
                  ~{job.contribution}%
                </span>
                <span className="text-xs text-indigo-700/80 dark:text-indigo-300/80">
                  {job.contributionLabel}
                </span>
              </div>
            )}

            <div className="mt-5 space-y-4">
              {job.narrative.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {para}
                </p>
              ))}
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-slate-200 px-2.5 py-1 font-mono text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-500"
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
