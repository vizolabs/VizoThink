interface FeatureCardProps {
  icon: string
  title: string
  description: string
  color: 'emerald' | 'indigo' | 'purple'
}

const colorClasses = {
  emerald: 'bg-emerald-500/20',
  indigo: 'bg-indigo-500/20',
  purple: 'bg-purple-500/20',
}

export default function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div
        className={`w-12 h-12 ${colorClasses[color]} rounded-xl flex items-center justify-center text-2xl mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-500">{description}</p>
    </div>
  )
}
