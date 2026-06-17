export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "#f5f3ef" }}
    >
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Subtle radial glow — brand colors, very soft */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(55,188,228,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 70% 60%, rgba(230,49,135,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative text-center space-y-8 px-4">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo-color.svg"
            alt="Magnet.wtf"
            className="w-72 md:w-96 h-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-lg max-w-xs mx-auto leading-relaxed">
          Your profile, your world.{" "}
          <span className="text-gray-800 font-medium">Rich, beautiful, AI-powered.</span>
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center pt-2">
          <a
            href="/login"
            className="px-7 py-3 rounded-full text-sm font-medium text-white transition-all hover:scale-105 shadow-sm"
            style={{ background: "linear-gradient(135deg, #e63187, #37bce4)" }}
          >
            Get started
          </a>
          <a
            href="/waitlist"
            className="px-7 py-3 rounded-full border text-sm font-medium transition-all hover:bg-black/5"
            style={{ borderColor: "rgba(0,0,0,0.15)", color: "#333" }}
          >
            Join waitlist
          </a>
        </div>
      </div>
    </main>
  )
}
