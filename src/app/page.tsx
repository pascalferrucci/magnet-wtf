export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <div className="inline-block">
          <span className="text-6xl font-bold bg-gradient-to-r from-[#4ade80] via-[#60a5fa] to-[#f472b6] bg-clip-text text-transparent">
            magnet
          </span>
          <span className="text-gray-500 text-sm ml-1">.wtf</span>
        </div>
        <p className="text-gray-400 text-lg max-w-md">
          Your profile, your world. Rich, beautiful, AI-powered.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Get started
          </a>
          <a
            href="/waitlist"
            className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </main>
  )
}
