import { ArrowUp } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row sm:px-8">
        <p className="text-center text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
        >
          Back to top
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  )
}
