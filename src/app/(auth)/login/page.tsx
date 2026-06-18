'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [inviteCode, setInviteCode] = useState('')
  const [step, setStep] = useState<'invite' | 'email' | 'sent'>('invite')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function checkInviteCode() {
    if (!inviteCode.trim()) {
      setError('Please enter an invite code.')
      return
    }
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { data, error: dbError } = await supabase
      .from('invite_codes')
      .select('code, used_at')
      .eq('code', inviteCode.trim().toUpperCase())
      .single()

    setLoading(false)

    if (dbError || !data) {
      setError('Invalid invite code.')
      return
    }
    if (data.used_at) {
      setError('This invite code has already been used.')
      return
    }

    setStep('email')
  }

  async function sendMagicLink() {
    if (!email.trim()) {
      setError('Please enter your email.')
      return
    }
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: { invite_code: inviteCode.trim().toUpperCase() },
      },
    })

    setLoading(false)

    if (authError) {
      setError(authError.message)
      return
    }

    setStep('sent')
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: '#faf9f7' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #9c9890 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          opacity: 0.45,
        }}
      />
      {/* Color washes */}
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
        {/* Logo */}
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
          {step === 'invite' && (
            <>
              <h1 className="text-xl font-semibold text-gray-900 mb-1">Welcome to Magnet</h1>
              <p className="text-sm text-gray-500 mb-6">Enter your invite code to get started.</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="MAGNET-ALPHA-01"
                  value={inviteCode}
                  onChange={e => { setInviteCode(e.target.value); setError('') }}
                  onKeyDown={e => e.key === 'Enter' && checkInviteCode()}
                  className="w-full px-4 py-3 rounded-xl border text-sm font-mono tracking-wide outline-none transition-all"
                  style={{
                    borderColor: error ? '#e63187' : 'rgba(0,0,0,0.12)',
                    background: '#fafafa',
                  }}
                  autoFocus
                />
                {error && <p className="text-xs" style={{ color: '#e63187' }}>{error}</p>}
                <button
                  onClick={checkInviteCode}
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, #e63187, #37bce4)' }}
                >
                  {loading ? 'Checking…' : 'Continue'}
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-6">
                No invite?{' '}
                <a href="/waitlist" className="underline" style={{ color: '#37bce4' }}>
                  Join the waitlist
                </a>
              </p>
            </>
          )}

          {step === 'email' && (
            <>
              <h1 className="text-xl font-semibold text-gray-900 mb-1">Sign in</h1>
              <p className="text-sm text-gray-500 mb-6">
                We&apos;ll send a magic link to your email.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError('') }}
                  onKeyDown={e => e.key === 'Enter' && sendMagicLink()}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                  style={{
                    borderColor: error ? '#e63187' : 'rgba(0,0,0,0.12)',
                    background: '#fafafa',
                  }}
                  autoFocus
                />
                {error && <p className="text-xs" style={{ color: '#e63187' }}>{error}</p>}
                <button
                  onClick={sendMagicLink}
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, #e63187, #37bce4)' }}
                >
                  {loading ? 'Sending…' : 'Send magic link'}
                </button>
                <button
                  onClick={() => setStep('invite')}
                  className="w-full py-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ← Back
                </button>
              </div>
            </>
          )}

          {step === 'sent' && (
            <div className="text-center py-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #e63187, #37bce4)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 mb-2">Check your email</h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                We sent a magic link to <span className="font-medium text-gray-700">{email}</span>.
                Click it to sign in.
              </p>
              <button
                onClick={() => { setStep('email'); setError('') }}
                className="mt-6 text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Resend or use different email
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
