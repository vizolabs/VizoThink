export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 text-center text-sm text-zinc-600">
      <p>VizoThink v1.0 • Built by VizoLabs Syndicate</p>
      <p className="mt-2 text-xs">
        <a href="https://github.com/vizolabs" className="hover:text-white transition-colors">
          GitHub
        </a>
        {' • '}
        <span>100% Private</span>
        {' • '}
        <span>No Login</span>
      </p>
    </footer>
  )
}
