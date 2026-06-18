import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: '#faf9f7' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #9c9890 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          opacity: 0.35,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <img src="/logo-color.svg" alt="Magnet" className="w-36 h-auto" />
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Sign out
            </button>
          </form>
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Hey {profile?.display_name ?? user.email?.split('@')[0]} 👋
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Your Magnet dashboard is coming soon. The editor is being built.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Pages', value: '0', color: '#e63187' },
              { label: 'Widgets', value: '0', color: '#37bce4' },
              { label: 'Views', value: '0', color: '#66bb93' },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="rounded-xl p-5"
                style={{ background: `${color}10`, border: `1px solid ${color}25` }}
              >
                <p className="text-2xl font-semibold" style={{ color }}>{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
