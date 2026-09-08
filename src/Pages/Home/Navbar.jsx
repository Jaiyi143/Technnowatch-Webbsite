import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Projects', href: '#projects' },
  { name: 'Members', href: '#members' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 transition-all duration-300">
      <nav className="bg-white shadow-lg border border-slate-100 rounded-full px-6 md:px-10 py-3 flex items-center justify-between gap-6 w-full max-w-6xl">
        <a href="#home" className="shrink-0">
          <img
            src="/navbar_logo.png"
            alt="Technowatch"
            className="h-10 md:h-12 w-auto object-contain [image-rendering:-webkit-optimize-contrast]"
          />
        </a>
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-bold font-sans text-slate-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#Contact"
            className="hidden lg:block px-6 py-2.5 bg-brand-blue hover:bg-blue-700 text-white text-sm font-bold font-sans rounded-full transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 whitespace-nowrap"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden text-slate-800 p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-300 flex flex-col items-center justify-center gap-6 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
          className="absolute top-8 right-8 text-slate-800 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-heading font-bold text-slate-800 hover:text-brand-blue transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#Contact"
          onClick={() => setIsOpen(false)}
          className="px-8 py-3 bg-brand-blue text-white text-lg font-bold font-sans rounded-full shadow-lg mt-4 hover:bg-blue-700 transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
