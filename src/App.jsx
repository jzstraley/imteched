import { useState, useEffect } from 'react'
import './index.css'

const apps = [
  {
    name: 'FellowShift',
    tagline: 'Schedule optimization made simple.',
    description: 'Auto-balanced rotation scheduling, call distribution, and ACGME compliance tracking for cardiology fellowship programs.',
    url: 'https://fellowshift.imteched.com',
    color: 'from-red-500 to-rose-600',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10 border-red-500/20',
    cardBg: 'bg-red-500/[0.04]',
    cardBorder: 'border-red-500/15 hover:border-red-500/30',
    lightCardBg: 'bg-red-50',
    lightCardBorder: 'border-red-200/60 hover:border-red-300',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    pills: ['Auto-Balanced', 'ACGME Compliant', 'Gmail Integration'],
    status: 'Live',
  },
  {
    name: 'DocsRef',
    tagline: 'Medical reference, fast.',
    description: 'A searchable, personal online reference covering internal medicine, cardiology, pharmacology, and more.',
    url: 'https://www.docsref.com',
    color: 'from-amber-500 to-orange-500',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10 border-amber-500/20',
    cardBg: 'bg-amber-500/[0.04]',
    cardBorder: 'border-amber-500/15 hover:border-amber-500/30',
    lightCardBg: 'bg-amber-50',
    lightCardBorder: 'border-amber-200/60 hover:border-amber-300',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    pills: ['Searchable', 'Cardiology', 'Pharmacology'],
    status: 'Live',
  },
  {
    name: 'CalcCode',
    tagline: 'Calculators at your fingertips.',
    description: 'Instant bedside calculations built for a variety of cardiac needs - from the cath lab to the ICU.',
    url: 'https://calccode.imteched.com',
    color: 'from-violet-500 to-purple-600',
    accent: 'text-violet-400',
    accentBg: 'bg-violet-500/10 border-violet-500/20',
    cardBg: 'bg-violet-500/[0.04]',
    cardBorder: 'border-violet-500/15 hover:border-violet-500/30',
    lightCardBg: 'bg-violet-50',
    lightCardBorder: 'border-violet-200/60 hover:border-violet-300',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 6h8M8 10h8M8 14h4" />
      </svg>
    ),
    pills: ['Hemodynamics', 'Cardiac Output', 'ICU & Cath Lab'],
    status: 'Live',
  },
  {
    name: 'ClinDeck',
    tagline: 'Clinical Dashboard.',
    description: 'Dashboard for clinical organization and workflow management.',
    url: 'https://clindeck.imteched.com',
    color: 'from-green-500 to-teal-600',
    accent: 'text-green-400',
    accentBg: 'bg-green-500/10 border-green-500/20',
    cardBg: 'bg-green-500/[0.04]',
    cardBorder: 'border-green-500/15 hover:border-green-500/30',
    lightCardBg: 'bg-green-50',
    lightCardBorder: 'border-green-200/60 hover:border-green-300',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
        <path d="M3 6h18M3 12h18" />
      </svg>
    ),
    pills: ['Workflow Management', 'Documentation Efficiency', 'Clinical Organization'],
    status: 'Live',
  },
  {
    name: 'QuickNote',
    tagline: 'Consult notes in seconds.',
    description: 'Smart templates for common consult types. Fill in key fields and generate formatted, copy-ready notes instantly.',
    color: 'from-blue-500 to-indigo-500',
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500/10 border-blue-500/20',
    cardBg: 'bg-blue-500/[0.04]',
    cardBorder: 'border-blue-500/15 hover:border-blue-500/30',
    lightCardBg: 'bg-blue-50',
    lightCardBorder: 'border-blue-200/60 hover:border-blue-300',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    pills: ['Smart Templates', 'Auto-Format', 'One-Click Copy'],
    status: 'Coming Soon',
  },
  {
    name: 'JournalClub',
    tagline: 'Organize journal club, effortlessly.',
    description: 'Schedule presenters, assign articles, and send automated reminders. Keep your journal club running smoothly.',
    color: 'from-emerald-500 to-teal-500',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10 border-emerald-500/20',
    cardBg: 'bg-emerald-500/[0.04]',
    cardBorder: 'border-emerald-500/15 hover:border-emerald-500/30',
    lightCardBg: 'bg-emerald-50',
    lightCardBorder: 'border-emerald-200/60 hover:border-emerald-300',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    pills: ['Article Tracking', 'Auto-Reminders', 'Presenter Rotation'],
    status: 'Coming Soon',
  },
]

function AppCard({ app, light }) {
  const isLive = app.status === 'Live'
  const Wrapper = isLive ? 'a' : 'div'
  const wrapperProps = isLive ? { href: app.url } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-200 ${
        light
          ? `${app.lightCardBg} ${app.lightCardBorder}`
          : `${app.cardBg} ${app.cardBorder}`
      } ${isLive ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center text-white shrink-0`}>
          {app.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold">{app.name}</h3>
          <p className={`text-xs truncate ${light ? 'text-gray-500' : 'text-gray-500'}`}>{app.tagline}</p>
        </div>
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${
          isLive
            ? 'bg-green-500/10 text-green-500'
            : light ? 'bg-gray-200 text-gray-500' : 'bg-white/5 text-gray-500'
        }`}>
          {app.status}
        </span>
      </div>

      <p className={`text-[13px] leading-relaxed mb-4 ${light ? 'text-gray-600' : 'text-gray-400'}`}>
        {app.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {app.pills.map((pill) => (
          <span key={pill} className={`text-[10px] px-2 py-0.5 rounded-md border ${app.accentBg} ${app.accent}`}>
            {pill}
          </span>
        ))}
      </div>

      {isLive && (
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 ${light ? 'text-gray-400' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      )}
    </Wrapper>
  )
}

export default function App() {
  const [light, setLight] = useState(() => {
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    document.body.classList.toggle('light', light)
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }, [light])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5">
        <span className="text-lg font-semibold tracking-tight">
          IM<span className="text-blue-400">Tech</span>Ed
        </span>
        <button
          onClick={() => setLight(!light)}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
            light ? 'hover:bg-gray-200' : 'hover:bg-white/10'
          }`}
          aria-label="Toggle theme"
        >
          {light ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </button>
      </nav>

      {/* Hero */}
      <header className="text-center pt-10 pb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Tools built for<br />a simpler life.
        </h1>
        <p className={`text-base max-w-md mx-auto ${light ? 'text-gray-500' : 'text-gray-400'}`}>
          Open-source, by physicians, for physicians.
        </p>
      </header>

      {/* Cards */}
      <main className="flex-1 px-6 pb-20">
        <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} light={light} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className={`sticky bottom-0 py-4 px-6 border-t backdrop-blur-sm ${
        light
          ? 'border-gray-200 bg-[#f5f5f5]/90'
          : 'border-white/5 bg-[#0f1117]/90'
      }`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>&copy; 2026 IMTechEd</div>
          <div className={light ? 'text-gray-400' : 'text-gray-600'}>By Austin Straley</div>
        </div>
      </footer>
    </div>
  )
}
