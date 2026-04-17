/**
 * VizoThink Feature Constants
 */

export interface Feature {
  icon: string
  title: string
  description: string
  color: 'emerald' | 'indigo' | 'purple'
}

export const features: Feature[] = [
  {
    icon: '💡',
    title: 'Idea Capture',
    description: 'Dump thoughts instantly. Auto-organize with AI clustering.',
    color: 'emerald',
  },
  {
    icon: '🧠',
    title: 'Mind Maps',
    description: 'Visualize thought connections. See the big picture.',
    color: 'indigo',
  },
  {
    icon: '🔥',
    title: 'AI Spark',
    description: 'Get instant insights. Let AI challenge your assumptions.',
    color: 'purple',
  },
]

export const NAV_LINKS = [
  { label: 'Login', href: '/login' },
  { label: 'Get Started', href: '/signup', primary: true },
] as const

export const SITE_CONFIG = {
  name: 'VizoThink',
  tagline: 'Think Deeper',
  description: 'Your AI-powered thought partner',
  version: '1.0.0',
  author: 'VizoLabs Syndicate',
  privacy: {
    noLogin: true,
    runsLocally: true,
    noTracking: true,
  },
} as const
