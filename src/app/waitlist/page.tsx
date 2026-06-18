'use client'

import { useState } from 'react'

/* ─── Mini-composants ─────────────────────────────────────────────────────── */

function PhoneMockup() {
  return (
    <div style={{
      width: 220, borderRadius: 36, background: '#fff',
      boxShadow: '0 32px 80px rgba(0,0,0,0.22)',
      overflow: 'hidden', border: '8px solid #1a1a1a', flexShrink: 0,
    }}>
      <div style={{ background: '#1a1a1a', height: 28, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 4 }}>
        <div style={{ width: 72, height: 10, borderRadius: 5, background: '#333' }} />
      </div>
      <div style={{ background: '#faf9f7', padding: 10, minHeight: 420 }}>
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: 'linear-gradient(135deg, #e63187, #37bce4)',
            margin: '0 auto 6px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700,
          }}>S</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a' }}>@sophie.creates</div>
          <div style={{ fontSize: 9, color: '#888', marginTop: 2 }}>Designer &amp; creator ✨</div>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
          <div style={{ flex: 1, background: '#fff', borderRadius: 10, padding: '8px 7px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 7, color: '#888', marginBottom: 2 }}>Nouveau cours</div>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#1a1a1a' }}>Figma pour&nbsp;débutants</div>
            <div style={{ width: 18, height: 2, borderRadius: 2, background: '#e63187', marginTop: 5 }} />
          </div>
          <div style={{ flex: 1, background: 'linear-gradient(135deg, #e63187, #37bce4)', borderRadius: 10, padding: '8px 7px' }}>
            <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.8)', marginBottom: 2 }}>Portfolio</div>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#fff' }}>Mon travail</div>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 10, padding: '8px 10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)', marginBottom: 6 }}>
          <div style={{ fontSize: 7, color: '#888', marginBottom: 3 }}>Prochain live 🎙️</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#1a1a1a', marginBottom: 4 }}>Workshop Branding — Sam 21 juin</div>
          <div style={{ fontSize: 7, padding: '3px 7px', borderRadius: 20, display: 'inline-block', background: 'rgba(230,49,135,0.1)', color: '#e63187' }}>
            S&apos;inscrire →
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
          {['TikTok', 'Insta', 'YT'].map(s => (
            <div key={s} style={{ flex: 1, background: '#fff', borderRadius: 8, padding: '7px 4px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 7, color: '#666', fontWeight: 600 }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(102,187,147,0.15), rgba(55,188,228,0.15))', borderRadius: 10, padding: '8px 10px', border: '1px solid rgba(102,187,147,0.2)' }}>
          <div style={{ fontSize: 7, color: '#66bb93', marginBottom: 2 }}>✨ IA recommande</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#1a1a1a' }}>Mes ressources du mois</div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: 24,
      border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12, background: `${color}18`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, marginBottom: 12,
      }}>{icon}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{desc}</div>
    </div>
  )
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{
        width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
        background: 'linear-gradient(135deg, #e63187, #37bce4)',
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, fontWeight: 700,
      }}>{n}</div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  )
}

/* ─── Formulaire (réutilisé 2×) ──────────────────────────────────────────── */

function WaitlistForm({ email, setEmail, loading, submitted, onSubmit }: {
  email: string; setEmail: (v: string) => void;
  loading: boolean; submitted: boolean; onSubmit: () => void;
}) {
  if (submitted) return null
  return (
    <div style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
      <input
        type="email"
        placeholder="ton@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onSubmit()}
        style={{
          flex: 1, minWidth: 220, padding: '14px 18px', borderRadius: 14,
          border: '1.5px solid rgba(0,0,0,0.12)', background: '#fff',
          fontSize: 14, outline: 'none', color: '#1a1a1a',
        }}
      />
      <button
        onClick={onSubmit}
        disabled={loading || !email.trim()}
        style={{
          padding: '14px 24px', borderRadius: 14, border: 'none', cursor: 'pointer',
          background: 'linear-gradient(135deg, #e63187, #37bce4)',
          color: '#fff', fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap',
          opacity: loading || !email.trim() ? 0.5 : 1, transition: 'opacity 0.2s',
        }}
      >{loading ? '…' : 'Rejoindre la liste'}</button>
    </div>
  )
}

/* ─── Page principale ────────────────────────────────────────────────────── */

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!email.trim() || submitted) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <main style={{ background: '#faf9f7', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Texture dot grid */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, #9c9890 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px', opacity: 0.38,
      }} />

      {/* ── NAV ── */}
      <nav style={{
        position: 'relative', zIndex: 10, padding: '20px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <a href="/">
          <img src="/logo-color.svg" alt="Magnet" style={{ height: 28 }} />
        </a>
        <a href="/login" style={{
          padding: '8px 20px', borderRadius: 99,
          background: 'linear-gradient(135deg, #e63187, #37bce4)',
          color: '#fff', fontSize: 13, fontWeight: 500, textDecoration: 'none',
        }}>
          J&apos;ai un code →
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '56px 24px 72px', maxWidth: 700, margin: '0 auto' }}>
        <div style={{
          display: 'inline-block', padding: '4px 14px', borderRadius: 99,
          fontSize: 12, fontWeight: 500, marginBottom: 24,
          background: 'rgba(230,49,135,0.08)', color: '#e63187',
          border: '1px solid rgba(230,49,135,0.15)',
        }}>
          Accès limité · Bientôt disponible
        </div>

        <h1 style={{ fontSize: 'clamp(32px,6vw,58px)', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.1, marginBottom: 20 }}>
          Ton lien en bio,<br />
          <span style={{ background: 'linear-gradient(135deg, #e63187, #37bce4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            mais en vrai beau.
          </span>
        </h1>

        <p style={{ fontSize: 17, color: '#666', lineHeight: 1.65, maxWidth: 500, margin: '0 auto 40px' }}>
          Magnet transforme ton lien bio en page personnelle riche — widgets modulables, IA intégrée, analytics temps réel. Zéro code.
        </p>

        {submitted ? (
          <div style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 14,
            background: '#fff', borderRadius: 20, padding: '32px 40px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.06)',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'linear-gradient(135deg, #66bb93, #37bce4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Tu es sur la liste !</div>
              <div style={{ fontSize: 14, color: '#888' }}>On te contacte dès que ta place est prête.</div>
            </div>
            <a href="/" style={{ fontSize: 14, color: '#37bce4', textDecoration: 'none', fontWeight: 500, marginTop: 4 }}>
              ← Retour à l&apos;accueil
            </a>
          </div>
        ) : (
          <>
            <WaitlistForm email={email} setEmail={setEmail} loading={loading} submitted={submitted} onSubmit={handleSubmit} />
            <p style={{ fontSize: 12, color: '#bbb', marginTop: 14 }}>Pas de spam. Désabonnement en 1 clic.</p>
          </>
        )}
      </section>

      {/* ── PHONE MOCKUP + texte ── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '20px 32px 100px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <PhoneMockup />
          <div style={{ flex: '1 1 300px', maxWidth: 380 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#e63187', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
              Widgets modulables
            </div>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: 14 }}>
              Ta page,<br />tes règles.
            </h2>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.65, marginBottom: 24 }}>
              Glisse, dépose, redimensionne. Chaque widget s&apos;adapte à ton univers — liens, vidéos, événements, produits, playlists.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '🔗', text: 'Liens & réseaux sociaux' },
                { icon: '🎬', text: 'Vidéos & embeds' },
                { icon: '🛒', text: 'Produits & offres' },
                { icon: '📅', text: 'Événements & rendez-vous' },
              ].map(f => (
                <div key={f.text} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 18 }}>{f.icon}</span>
                  <span style={{ fontSize: 14, color: '#555', fontWeight: 500 }}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}>
              Tout ce qu&apos;il te faut.
            </h2>
            <p style={{ fontSize: 16, color: '#888' }}>
              Conçu pour les créateurs qui veulent un outil pro, pas un gadget.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            <FeatureCard
              icon="✨" color="#e63187" title="IA intégrée"
              desc="Ton assistant IA génère des suggestions de widgets, optimise ton profil et propose du contenu selon tes stats."
            />
            <FeatureCard
              icon="🔀" color="#37bce4" title="Pages forkées"
              desc="Crée des variantes pour chaque collab ou campagne. magnet.wtf/@toi/nike, /summer, /podcast…"
            />
            <FeatureCard
              icon="📊" color="#66bb93" title="Analytics natifs"
              desc="Vois qui visite, ce qui clique, ce qui convertit. Tout en temps réel, sans passer par un tiers."
            />
            <FeatureCard
              icon="🧲" color="#e63187" title="Système Pin"
              desc="Tes visiteurs te suivent sans créer de compte. Ils reçoivent une notif quand tu publies du nouveau contenu."
            />
          </div>
        </div>
      </section>

      {/* ── COMMENT CA MARCHE ── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 32px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}>Prêt en 5 minutes.</h2>
            <p style={{ fontSize: 16, color: '#888' }}>Pas de dev, pas de design, pas de prise de tête.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            <Step n={1} title="Crée ton profil" desc="Un pseudo, une bio, une photo. Tu es live en moins de 2 minutes." />
            <Step n={2} title="Ajoute tes widgets" desc="Glisse tes liens, vidéos, produits et événements sur une grille modulable." />
            <Step n={3} title="Partage une URL" desc="magnet.wtf/@toi — une URL dans toutes tes bios. Tes visiteurs arrivent sur une page qui donne envie de rester." />
          </div>
        </div>
      </section>

      {/* ── SYSTEME PIN ── */}
      <section style={{
        position: 'relative', zIndex: 10, padding: '80px 32px',
        background: 'linear-gradient(135deg, rgba(230,49,135,0.04) 0%, rgba(55,188,228,0.06) 100%)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 280px', maxWidth: 380 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#37bce4', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
              Système Pin
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: 16 }}>
              Tes fans,<br />sans algorithme.
            </h2>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.65, marginBottom: 16 }}>
              Un visiteur qui aime ta page peut la pinner avec juste un email. Il reçoit une notification dès que tu publies, lances une offre ou changes tes widgets.
            </p>
            <p style={{ fontSize: 13, color: '#aaa' }}>
              Pas de compte à créer. Pas de réseau social intermédiaire. Juste toi et tes fans.
            </p>
          </div>

          {/* Pin UI mockup */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: 24,
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)',
            width: 280, flexShrink: 0,
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 16 }}>
              🧲 Fans de @sophie.creates
            </div>
            {[
              { name: 'Clara M.', time: 'il y a 2h', notif: 'Nouveau widget !' },
              { name: 'Théo R.', time: 'il y a 5h', notif: 'Nouvel événement' },
              { name: 'Jade L.', time: 'hier', notif: 'Nouvelle offre' },
            ].map(f => (
              <div key={f.name} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #e63187, #37bce4)', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a' }}>{f.name}</div>
                  <div style={{ fontSize: 11, color: '#aaa' }}>{f.notif} · {f.time}</div>
                </div>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#37bce4', flexShrink: 0 }} />
              </div>
            ))}
            <div style={{ marginTop: 16, textAlign: 'center', fontSize: 12, color: '#888' }}>
              <span style={{ fontWeight: 700, color: '#e63187' }}>+247</span> nouveaux fans ce mois
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '100px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.1, marginBottom: 16 }}>
          Tu veux être parmi<br />
          <span style={{ background: 'linear-gradient(135deg, #e63187, #37bce4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            les premiers ?
          </span>
        </h2>
        <p style={{ fontSize: 16, color: '#888', marginBottom: 40 }}>Rejoins la liste. On te donnera accès avant tout le monde.</p>
        {submitted ? (
          <div style={{ fontSize: 16, color: '#66bb93', fontWeight: 600 }}>✓ Tu es sur la liste !</div>
        ) : (
          <WaitlistForm email={email} setEmail={setEmail} loading={loading} submitted={submitted} onSubmit={handleSubmit} />
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position: 'relative', zIndex: 10, padding: '32px 24px', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <a href="/"><img src="/logo-color.svg" alt="Magnet" style={{ height: 22, marginBottom: 10 }} /></a>
        <p style={{ fontSize: 12, color: '#bbb' }}>© 2025 Magnet.wtf · Tous droits réservés</p>
      </footer>
    </main>
  )
}
