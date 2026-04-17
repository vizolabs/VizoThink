export default function Navbar() {
  return (
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
  )
}
