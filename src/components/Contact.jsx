import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check } from 'lucide-react'
import Section from './Section'
import { profile } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email'
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters'
    setErrors(next)
    if (Object.keys(next).length) return

    // Opens the visitor's mail client with the message pre-filled.
    // Swap this for a Formspree / EmailJS / API endpoint to send without a mail client.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom, ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ]

  const inputBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600'

  return (
    <Section id="contact" eyebrow="05 / Contact" title="Let's build something">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="reveal lg:col-span-2">
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            I&apos;m open to software engineering roles and interesting collaborations. The fastest way to
            reach me is email, and I usually reply within a day.
          </p>

          <ul className="mt-8 space-y-3">
            {details.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-slate-900 dark:text-white">
                      {value}
                    </span>
                  </span>
                </>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-indigo-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-indigo-400/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.02]">
                      {inner}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="mt-6 flex gap-3">
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
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-indigo-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="reveal rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-3 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder="Jane Doe"
                className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-slate-200 dark:border-white/10'}`}
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="jane@company.com"
                className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-slate-200 dark:border-white/10'}`}
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={form.message}
              onChange={update('message')}
              placeholder="Tell me about the role or project…"
              className={`${inputBase} resize-y ${errors.message ? 'border-red-400' : 'border-slate-200 dark:border-white/10'}`}
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 sm:w-auto"
          >
            {sent ? <Check size={16} /> : <Send size={16} />}
            {sent ? 'Opening your mail app…' : 'Send message'}
          </button>
        </form>
      </div>
    </Section>
  )
}
