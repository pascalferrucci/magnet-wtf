'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#faf9f7',
      fontFamily: 'Arial, Helvetica, sans-serif',
      padding: '32px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 420, width: '100%' }}>
        <Link href="/">
          <img src="/logo-color.svg" alt="Magnet.wtf" style={{ height: 36, width: 'auto', marginBottom: 40 }} />
        </Link>

        {!submitted ? (
          <>
            <h1 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', color: '#1a1a1a', marginBottom: 10 }}>
              Join the waitlist
            </h1>
            <p style={{ fontSize: 15, color: '#888', marginBottom: 32, lineHeight: 1.6 }}>
              Magnet is invite-only for now. Drop your email and we&apos;ll reach out when your spot opens up.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: 14,
                  border: '1.5px solid rgba(0,0,0,0.12)',
                  background: '#fff',
                  fontSize: 16,
                  outline: 'none',
                  color: '#1a1a1a',
                  boxSizing: 'border-box',
                }}
              />
              <button
                type="submit"
                disabled={loading || !email.trim()}
                style={{
                  padding: '14px',
                  borderRadius: 14,
                  border: 'none',
                  background: 'linear-gradient(135deg, #e63187, #37bce4)',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: 'pointer',
                  opacity: loading || !email.trim() ? 0.55 : 1,
                  transition: 'opacity 0.2s',
                }}
              >
                {loading ? 'Joining…' : 'Get early access'}
              </button>
            </form>
            <p style={{ fontSize: 12, color: '#ccc', marginTop: 16 }}>No spam. No credit card.</p>
          </>
        ) : (
          <>
            <div style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #66bb93, #37bce4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#1a1a1a', marginBottom: 10, letterSpacing: '-0.02em' }}>
              You&apos;re on the list!
            </h1>
            <p style={{ fontSize: 15, color: '#888', marginBottom: 32, lineHeight: 1.6 }}>
              We&apos;ll reach out to <strong style={{ color: '#555' }}>{email}</strong> when your spot opens up.
            </p>
            <Link href="/" style={{ fontSize: 14, color: '#37bce4', textDecoration: 'none', fontWeight: 600 }}>
              ← Back to home
            </Link>
          </>
        )}
      </div>
    </main>
  )
}
