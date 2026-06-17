export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        <div className="flex items-baseline justify-center gap-0">
          <span
            className="text-7xl md:text-8xl font-porkys text-magnet-gradient"
            style={{ lineHeight: 1 }}
          >
            magnet
          </span>
          <span
            className="text-7xl md:text-8xl font-porkys"
            style={{ color: "#66bb93", lineHeight: 1 }}
          >
            .wtf
          </span>
        </div>

        <p className="text-gray-400 text-xl max-w-sm mx-auto leading-relaxed">
          Your profile, your world.{" "}
          <span className="text-white">Rich, beautiful, AI-powered.</span>
        </p>

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

        <div className="flex justify-center gap-2 pt-4">
          <span className="w-2 h-2 rounded-full" style={{ background: "#e63187" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "#37bce4" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "#66bb93" }} />
        </div>
      </div>
    </main>
  )
}
