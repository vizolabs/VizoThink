interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 font-bold rounded-full transition-transform'

  const variants = {
    primary: 'bg-emerald-500 text-black hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    secondary: 'bg-white/10 border border-white/20 text-white hover:bg-white/20',
  }

  return <button className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</button>
}
