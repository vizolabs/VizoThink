import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.1),transparent_40%)]" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">
            V
          </div>
          <span className="text-xl font-bold tracking-tight">
            Vizo<span className="text-emerald-500">Think</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors">
            Login
          </button>
          <button className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Powered by Local AI
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          Think <span className="text-emerald-500">Deeper</span>
        </h1>

        <p className="text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed">
          Your AI-powered thought partner. Capture ideas, explore connections, and let the machine
          help you think through the chaos.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-2xl mb-4">
              💡
            </div>
            <h3 className="text-lg font-semibold mb-2">Idea Capture</h3>
            <p className="text-sm text-zinc-500">
              Dump thoughts instantly. Auto-organize with AI clustering.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-2xl mb-4">
              🧠
            </div>
            <h3 className="text-lg font-semibold mb-2">Mind Maps</h3>
            <p className="text-sm text-zinc-500">
              Visualize thought connections. See the big picture.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl mb-4">
              🔥
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Spark</h3>
            <p className="text-sm text-zinc-500">
              Get instant insights. Let AI challenge your assumptions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Start Thinking Free
          </button>
          <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">
            View Demo
          </button>
        </div>

        <p className="mt-8 text-xs text-zinc-600 uppercase tracking-widest">
          100% Private • No Login • Runs Locally
        </p>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-sm text-zinc-600">
        <p>VizoThink v1.0 • Built by VizoLabs Syndicate</p>
      </footer>
    </div>
  )
}
