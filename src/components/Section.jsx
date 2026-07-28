export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${className}`}>
      {(eyebrow || title) && (
        <header className="reveal mb-12 sm:mb-16">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {title}
            </h2>
          )}
          <div className="mt-5 h-px w-full bg-gradient-to-r from-indigo-500/60 via-slate-200 to-transparent dark:via-slate-800" />
        </header>
      )}
      {children}
    </section>
  )
}
