import { GraduationCap, MapPin, Briefcase } from 'lucide-react'
import Section from './Section'
import { profile, education } from '../data'

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="reveal lg:col-span-3">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{profile.summary}</p>
          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
            I completed my Master of Computer Science at the University of Adelaide in July 2026, where I
            also taught machine learning workshops and automated marking and exam processing. I care about the unglamorous parts of engineering,
            like payload sizes, cache strategy and CI pipelines that don&apos;t flake, because that&apos;s
            usually where the user-visible wins come from.
          </p>
        </div>

        <div className="reveal space-y-4 lg:col-span-2">
          {[
            { icon: Briefcase, label: 'Experience', value: '2+ years, full-stack & backend' },
            { icon: MapPin, label: 'Based in', value: profile.location },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">{label}</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">{value}</p>
              </div>
            </div>
          ))}

          {education.map((ed) => (
            <div
              key={ed.degree}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Education
                  </p>
                  <p className="mt-1 font-medium text-slate-900 dark:text-white">{ed.degree}</p>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{ed.school}</p>
                  <p className="mt-2 font-mono text-xs text-slate-400 dark:text-slate-500">
                    {ed.period}{ed.detail ? ` · ${ed.detail}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
