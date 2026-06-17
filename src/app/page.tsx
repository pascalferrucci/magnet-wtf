export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Logo wordmark — blanc, Porky's */}
        <div className="flex items-baseline justify-center">
          <span className="font-porkys text-white" style={{ fontSize: "7rem", lineHeight: 1 }}>
            Magnet
          </span>
          <span className="font-porkys text-white" style={{ fontSize: "7rem", lineHeight: 1 }}>
            .wtf
          </span>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-xl max-w-sm mx-auto leading-relaxed">
          Your profile, your world.{" "}
          <span className="text-white">Rich, beautiful, AI-powered.</span>
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center pt-2">
          <a
            href="/login"
            className="px-7 py-3 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #e63187, #37bce4)" }}
          >
            Get started
          </a>
          <a
            href="/waitlist"
            className="px-7 py-3 rounded-full border text-sm font-medium text-white transition-all hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            Join waitlist
          </a>
        </div>
      </div>
    </main>
  )
}
