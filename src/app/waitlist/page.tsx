'use client'

import { useState } from 'react'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!email.trim()) return
    setLoading(true)
    // TODO: wire up to an actual waitlist (Airtable, Loops, etc.)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: '#faf9f7' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #9c9890 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          opacity: 0.45,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 55% 45% at 10% 10%, rgba(230,49,135,0.08) 0%, transparent 65%)',
            'radial-gradient(ellipse 55% 45% at 90% 85%, rgba(55,188,228,0.08) 0%, transparent 65%)',
          ].join(', '),
        }}
      />

      <div className="relative z-10 w-full max-w-sm px-6">
        <div className="flex justify-center mb-10">
          <img src="/logo-color.svg" alt="Magnet" className="w-44 h-auto" />
        </div>

        <div
          className="rounded-2xl p-8"
          style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {!submitted ? (
            <>
              <h1 className="text-xl font-semibold text-gray-900 mb-1">Join the waitlist</h1>
              <p className="text-sm text-gray-500 mb-6">
                Magnet is invite-only for now. Drop your email and we&apos;ll let you in when it&apos;s your turn.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                  style={{
                    borderColor: 'rgba(0,0,0,0.12)',
                    background: '#fafafa',
                  }}
                  autoFocus
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading || !email.trim()}
                  className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, #e63187, #37bce4)' }}
                >
                  {loading ? 'Joining…' : 'Join waitlist'}
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-6">
                Have a code?{' '}
                <a href="/login" className="underline" style={{ color: '#37bce4' }}>
                  Sign in
                </a>
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #66bb93, #37bce4)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 mb-2">You&apos;re on the list!</h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                We&apos;ll reach out to <span className="font-medium text-gray-700">{email}</span> when your spot is ready.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
