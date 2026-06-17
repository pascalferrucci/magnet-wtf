export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "#faf9f7" }}
    >
      {/* Dot grid — absolute, pas fixed */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #9c9890 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          opacity: 0.55,
        }}
      />

      {/* Brand color washes */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 55% 45% at 10% 10%, rgba(230,49,135,0.10) 0%, transparent 65%)",
            "radial-gradient(ellipse 55% 45% at 90% 85%, rgba(55,188,228,0.10) 0%, transparent 65%)",
            "radial-gradient(ellipse 40% 35% at 85% 10%, rgba(102,187,147,0.08) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="flex justify-center">
          <img
            src="/logo-color.svg"
            alt="Magnet.wtf"
            className="w-80 md:w-[480px] h-auto"
          />
        </div>

        <p className="text-gray-500 text-lg max-w-xs mx-auto leading-relaxed">
          Your profile, your world.{" "}
          <span className="text-gray-800 font-medium">Rich, beautiful, AI-powered.</span>
        </p>

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
            style={{ borderColor: "rgba(0,0,0,0.15)", color: "#444" }}
          >
            Join waitlist
          </a>
        </div>
      </div>
    </main>
  )
}
