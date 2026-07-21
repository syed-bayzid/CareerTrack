import React from 'react'

export default function Navbar() {
  return (
    <header className="border-b border-mist bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          CareerTrack <span className="text-signal">Lite</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link to="/" className="text-ink/80 hover:text-ink">
            Home
          </Link>

          <Link to="/dashboard" className="text-ink/80 hover:text-ink">
            Dashboard
          </Link>

          <Link to="/applications" className="text-ink/80 hover:text-ink">
            Applications
          </Link>

          <Link to="/login" className="text-ink/80 hover:text-ink">
            Log in
          </Link>

          <Link
            to="/register"
            className="rounded-md bg-ink px-3 py-1.5 font-medium text-paper transition hover:bg-signal"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
