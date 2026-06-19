'use client'

import { useState } from 'react'

/* ─── Phone mockup: Creator (dark, inspired by Nyan Cat Figma frame) ───── */
function CreatorPhone() {
  return (
    <div style={{
      width: 220, borderRadius: 36, overflow: 'hidden',
      border: '7px solid #111', flexShrink: 0,
      boxShadow: '0 40px 80px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,63,176,0.15)',
      background: '#0a0a0a',
    }}>
      <div style={{ background: '#111', height: 24, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 4 }}>
        <div style={{ width: 56, height: 7, borderRadius: 4, background: '#1a1a1a' }} />
      </div>
      <div style={{ background: '#0a0a0a', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#555', lineHeight: 1 }}>←</span>
        <span style={{ fontSize: 9.5, fontWeight: 800, color: '#fff', letterSpacing: 0.2 }}>
          <span style={{ color: '#37bce4' }}>M</span>agnet.wtf
        </span>
        <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#ff3fb0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.9 8.7H23l-7.3 5.3 2.8 8.7L12 19.4l-6.5 5.3 2.8-8.7L1 11.7h8.1z"/></svg>
        </div>
      </div>
      <div style={{ padding: '6px 10px 4px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg, #ff3fb0 0%, #7b2fff 50%, #37bce4 100%)', border: '2px solid #ff3fb0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🌈</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Astrid <span style={{ color: '#ff3fb0' }}>✦</span></div>
          <div style={{ fontSize: 7.5, color: '#666', marginTop: 1 }}>Digital artist · 128K fans</div>
        </div>
      </div>
      <div style={{ margin: '4px 8px', borderRadius: 11, border: '1.5px solid #ff3fb0', overflow: 'hidden', background: '#111', display: 'flex' }}>
        <div style={{ width: 58, height: 58, background: 'linear-gradient(135deg, #1a0a2e 0%, #7b2fff 100%)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🎨</div>
        <div style={{ padding: '7px 8px', flex: 1 }}>
          <div style={{ fontSize: 6.5, color: '#ff3fb0', textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 700 }}>New Drop</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#fff', lineHeight: 1.25, marginTop: 2 }}>Holographic<br />Series Vol.3</div>
        </div>
      </div>
      <div style={{ margin: '4px 8px', borderRadius: 11, border: '1.5px solid #ff3fb0', background: '#0f0f0f', height: 66, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,63,176,0.2)', border: '1px solid rgba(255,63,176,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 9, color: '#ff3fb0', marginLeft: 1 }}>▶</span>
        </div>
        <div style={{ position: 'absolute', top: 5, right: 7, fontSize: 6.5, color: '#ff3fb0', fontWeight: 700 }}>YouTube</div>
        <div style={{ position: 'absolute', bottom: 5, left: 8, fontSize: 6.5, color: '#555' }}>Speed Art Reel · 12 K vues</div>
      </div>
      <div style={{ margin: '4px 8px 6px', borderRadius: 11, border: '1.5px solid #ff3fb0', background: '#111', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg, #ff3fb0, #7b2fff)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 8, color: '#fff', fontWeight: 700 }}>@astrid.art</div>
          <div style={{ fontSize: 6.5, color: '#555', marginTop: 1 }}>Il y a 2h · TikTok</div>
        </div>
        <span style={{ fontSize: 9, color: '#ff3fb0' }}>↗</span>
      </div>
      <div style={{ background: '#0a0a0a', borderTop: '1px solid #1f1f1f', padding: '7px 0 5px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        {[{ icon: '♡', active: true }, { icon: '✦', active: false }, { icon: '◯', active: false }, { icon: '◡', active: false }, { icon: '⚙', active: false }].map(({ icon, active }, i) => (
          <span key={i} style={{ fontSize: 13, color: active ? '#ff3fb0' : '#333', lineHeight: 1 }}>{icon}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Phone mockup: Brand (light, inspired by Louis Vuitton Figma frame) ── */
function BrandPhone() {
  return (
    <div style={{
      width: 220, borderRadius: 36, overflow: 'hidden',
      border: '7px solid #111', flexShrink: 0,
      boxShadow: '0 40px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06)',
      background: '#fff',
    }}>
      <div style={{ background: '#111', height: 24, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 4 }}>
        <div style={{ width: 56, height: 7, borderRadius: 4, background: '#1a1a1a' }} />
      </div>
      <div style={{ background: '#fff', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '0.5px solid #f0f0f0' }}>
        <span style={{ fontSize: 12, color: '#aaa', lineHeight: 1 }}>←</span>
        <span style={{ fontSize: 9.5, fontWeight: 800, color: '#1a1a1a', letterSpacing: 0.2 }}>
          <span style={{ color: '#37bce4' }}>M</span>agnet.wtf
        </span>
        <div style={{ width: 20, height: 20, borderRadius: '50%', border: '1.5px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2"><path d="M12 2l2.9 8.7H23l-7.3 5.3 2.8 8.7L12 19.4l-6.5 5.3 2.8-8.7L1 11.7h8.1z"/></svg>
        </div>
      </div>
      <div style={{ padding: '8px 10px 4px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#1a1a1a', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#fff', fontWeight: 900, letterSpacing: -0.5 }}>MB</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#1a1a1a', letterSpacing: -0.3, lineHeight: 1.2 }}>Maison Blanc</div>
          <div style={{ fontSize: 7.5, color: '#999', fontStyle: 'italic', marginTop: 1 }}>Journey beyond time</div>
        </div>
      </div>
      <div style={{ margin: '4px 8px', borderRadius: 11, overflow: 'hidden', background: '#e8e3da', height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #c8b89a 0%, #8a7a6a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>👗</div>
        <div style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 6.5, color: 'rgba(255,255,255,0.8)', fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Collection Printemps</div>
      </div>
      <div style={{ margin: '4px 8px', borderRadius: 11, background: '#f5f2ee', padding: '8px 10px' }}>
        <div style={{ fontSize: 6, color: '#aaa', textTransform: 'uppercase', letterSpacing: 1.2, fontWeight: 700, marginBottom: 2 }}>Newsletter</div>
        <div style={{ fontSize: 8.5, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.35, marginBottom: 6 }}>Les dernières nouvelles<br />de la Maison</div>
        <div style={{ background: '#1a1a1a', borderRadius: 20, padding: '4px 10px', display: 'inline-block' }}>
          <span style={{ fontSize: 7, color: '#fff', fontWeight: 600 }}>S&apos;abonner</span>
        </div>
      </div>
      <div style={{ margin: '4px 8px', display: 'flex', gap: 4 }}>
        {['#c8b89a', '#8a7a6a', '#d4c5b0'].map((color, i) => (
          <div key={i} style={{ flex: 1, height: 42, borderRadius: 8, background: color }} />
        ))}
      </div>
      <div style={{ margin: '4px 8px 6px', borderRadius: 8, background: '#f5f2ee', padding: '5px 10px', textAlign: 'center' }}>
        <div style={{ fontSize: 10, fontWeight: 900, color: '#1a1a1a', letterSpacing: 3, textTransform: 'uppercase' }}>Maison Blanc</div>
      </div>
      <div style={{ background: '#fff', borderTop: '1px solid #f0f0f0', padding: '7px 0 5px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        {[{ icon: '♡', active: true }, { icon: '✦', active: false }, { icon: '◯', active: false }, { icon: '◡', active: false }, { icon: '⚙', active: false }].map(({ icon, active }, i) => (
          <span key={i} style={{ fontSize: 13, color: active ? '#e63187' : '#ddd', lineHeight: 1 }}>{icon}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Home / Landing page ────────────────────────────────────────────────── */
export default function HomePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!email.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div style={{ background: '#faf9f7', minHeight: '100vh', fontFamily: 'Arial, Helvetica, sans-serif', color: '#1a1a1a' }}>

      {/* ── NAV ── */}
      <nav style={{ padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.06)', background: 'rgba(250,249,247,0.9)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <img src="/logo-color.svg" alt="Magnet" style={{ height: 28, width: 'auto' }} />
        <a href="/login" style={{ fontSize: 13, color: '#666', textDecoration: 'none' }}>
          Have a code? <span style={{ color: '#37bce4', fontWeight: 600 }}>Sign in →</span>
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 32px 60px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(230,49,135,0.08)', border: '1px solid rgba(230,49,135,0.18)', borderRadius: 20, padding: '5px 14px', marginBottom: 28 }}>
          <span style={{ fontSize: 12, color: '#e63187', fontWeight: 600 }}>✦ Invite-only · Join the waitlist</span>
        </div>

        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20 }}>
          Your profile,{' '}
          <span style={{ background: 'linear-gradient(135deg, #e63187, #37bce4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            your world.
          </span>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#666', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
          One link that shows who you are, what you create, and what you sell —{' '}
          with widgets that actually look like <em>you</em>.
        </p>

        {!submitted ? (
          <div style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{ flex: 1, minWidth: 220, padding: '14px 18px', borderRadius: 14, border: '1.5px solid rgba(0,0,0,0.12)', background: '#fff', fontSize: 15, outline: 'none', color: '#1a1a1a' }}
              autoFocus
            />
            <button
              onClick={handleSubmit}
              disabled={loading || !email.trim()}
              style={{ padding: '14px 24px', borderRadius: 14, border: 'none', background: 'linear-gradient(135deg, #e63187, #37bce4)', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', opacity: loading || !email.trim() ? 0.55 : 1, transition: 'opacity 0.2s' }}
            >
              {loading ? 'Joining…' : 'Get early access'}
            </button>
          </div>
        ) : (
          <div style={{ maxWidth: 440, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '24px 28px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #66bb93, #37bce4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>You&apos;re on the list!</div>
            <div style={{ fontSize: 13, color: '#888', lineHeight: 1.5 }}>
              We&apos;ll reach out to <strong style={{ color: '#555' }}>{email}</strong> when your spot opens up.
            </div>
          </div>
        )}

        <p style={{ fontSize: 12, color: '#bbb', marginTop: 14 }}>No spam. No credit card. Just your spot in line.</p>
      </section>

      {/* ── PHONES MOCKUP ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 32px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div style={{ transform: 'rotate(-3deg) translateY(8px)' }}>
              <CreatorPhone />
            </div>
            <div style={{ textAlign: 'center', maxWidth: 200 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#ff3fb0', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Creator</div>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>Your drops, your vibe, your audience — all in one scroll.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, paddingTop: 24, paddingBottom: 24 }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#1a1a1a', letterSpacing: -1, textAlign: 'center', lineHeight: 1.2 }}>
              One profile.<br />
              <span style={{ background: 'linear-gradient(135deg, #e63187, #37bce4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Endless ways</span><br />
              to show up.
            </div>
            <div style={{ fontSize: 12, color: '#aaa', textAlign: 'center', maxWidth: 140, lineHeight: 1.6 }}>
              Each widget is a piece of your world. Arrange them, rearrange them. Make it yours.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div style={{ transform: 'rotate(3deg) translateY(8px)' }}>
              <BrandPhone />
            </div>
            <div style={{ textAlign: 'center', maxWidth: 200 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#37bce4', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Brand</div>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>Your story, your newsletter, your products — one place that converts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12 }}>
              Everything you want to share,<br />in the order <em>you</em> choose.
            </h2>
            <p style={{ fontSize: 15, color: '#888', maxWidth: 480, margin: '0 auto' }}>
              Stop linking to five different apps. Build the one page your audience actually wants to land on.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { emoji: '🎨', title: 'Your latest drop', desc: 'New artwork, new product, new video — pin it at the top so nobody misses it.', accent: '#e63187' },
              { emoji: '📺', title: 'Your channel, your clips', desc: 'Link your YouTube, TikTok, Twitch in one widget. Your fans watch without leaving your page.', accent: '#37bce4' },
              { emoji: '🛍️', title: 'Your shop, your links', desc: 'Add Shopify, Gumroad, or any URL. Turn visits into clicks into sales.', accent: '#66bb93' },
              { emoji: '📅', title: 'Your agenda', desc: 'Live sessions, workshops, events — your next date is always one tap away.', accent: '#a78bfa' },
            ].map(({ emoji, title, desc, accent }) => (
              <div key={title} style={{ background: '#faf9f7', borderRadius: 18, padding: '24px 22px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{emoji}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#1a1a1a', marginBottom: 8, letterSpacing: -0.3 }}>{title}</div>
                <p style={{ fontSize: 13, color: '#888', lineHeight: 1.55 }}>{desc}</p>
                <div style={{ width: 24, height: 3, borderRadius: 2, background: accent, marginTop: 16 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12 }}>
              You&apos;re live in under 5 minutes.
            </h2>
            <p style={{ fontSize: 15, color: '#888', maxWidth: 380, margin: '0 auto' }}>
              No templates to fight with. No 47-step onboarding. Just your stuff, where people can find it.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, maxWidth: 860, margin: '0 auto' }}>
            {[
              { step: '01', title: 'Claim your magnet link', desc: 'magnet.wtf/yourname is yours. Short, memorable, easy to drop anywhere.', color: '#e63187' },
              { step: '02', title: 'Add whatever you want', desc: 'Videos, links, a shop, a newsletter, your latest posts. Drag, drop, done.', color: '#37bce4' },
              { step: '03', title: 'Watch your audience find you', desc: 'Share one link everywhere. They get everything. You get the analytics.', color: '#66bb93' },
            ].map(({ step, title, desc, color }) => (
              <div key={step} style={{ padding: '28px 24px', borderRadius: 20, background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 13, fontWeight: 900, color, marginBottom: 14, letterSpacing: 1 }}>{step}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#1a1a1a', marginBottom: 8, letterSpacing: -0.3 }}>{title}</div>
                <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PIN SYSTEM ── */}
      <section style={{ background: 'linear-gradient(135deg, rgba(230,49,135,0.05) 0%, rgba(55,188,228,0.05) 100%)', border: '1px solid rgba(0,0,0,0.06)', padding: '72px 32px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 36, marginBottom: 20 }}>✦</div>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Your fans save your profile.<br />You stay on their radar.
          </h2>
          <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            When someone pins your Magnet, they&apos;re not just bookmarking a page — they&apos;re subscribing to your world.
            Every update you make lands right in their collection.
            No algorithm. No noise. Just your people, staying close.
          </p>
        </div>
      </section>

      {/* ── SECOND CTA ── */}
      <section style={{ padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Ready to be found?
          </h2>
          <p style={{ fontSize: 15, color: '#888', marginBottom: 36, lineHeight: 1.6 }}>
            Magnet is invite-only for now. Join the waitlist and we&apos;ll let you know the moment a spot opens.
          </p>
          {!submitted ? (
            <div style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                style={{ flex: 1, minWidth: 200, padding: '13px 16px', borderRadius: 14, border: '1.5px solid rgba(0,0,0,0.12)', background: '#fff', fontSize: 14, outline: 'none', color: '#1a1a1a' }}
              />
              <button
                onClick={handleSubmit}
                disabled={loading || !email.trim()}
                style={{ padding: '13px 22px', borderRadius: 14, border: 'none', background: 'linear-gradient(135deg, #e63187, #37bce4)', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', opacity: loading || !email.trim() ? 0.55 : 1, transition: 'opacity 0.2s' }}
              >
                {loading ? 'Joining…' : 'Get early access'}
              </button>
            </div>
          ) : (
            <div style={{ background: '#fff', borderRadius: 16, padding: '20px 24px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', display: 'inline-block' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>You&apos;re on the list! ✓</div>
              <div style={{ fontSize: 13, color: '#888' }}>We&apos;ll ping you at <strong style={{ color: '#555' }}>{email}</strong></div>
            </div>
          )}
          <p style={{ fontSize: 12, color: '#ccc', marginTop: 14 }}>No spam. No credit card. Just your spot in line.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(0,0,0,0.07)', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <img src="/logo-color.svg" alt="Magnet" style={{ height: 22, width: 'auto', opacity: 0.6 }} />
        <div style={{ fontSize: 12, color: '#bbb', display: 'flex', gap: 20 }}>
          <a href="/login" style={{ color: '#bbb', textDecoration: 'none' }}>Sign in</a>
          <span>© 2025 Magnet.wtf</span>
        </div>
      </footer>

    </div>
  )
}
