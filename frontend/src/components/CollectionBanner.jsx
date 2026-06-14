import React from 'react'
import { Link } from 'react-router-dom'

const collections = [
  {
    id: 'flora',
    title: 'Flora Collection',
    subtitle: 'Blooming with elegance',
    description: 'Jewellery inspired by petals, vines and garden romance',
    emoji: '💐',
    bg: 'linear-gradient(135deg, #FFF0F5 0%, #FFE4E8 40%, #FFC8D4 100%)',
    accent: '#D4827A',
    textColor: '#7B3F4E',
    pattern: '🌸🌺🌷🌸🌺🌷'
  },
  {
    id: 'luna',
    title: 'Luna Collection',
    subtitle: 'Touched by moonlight',
    description: 'Celestial pieces for those who shine after dark',
    emoji: '🌙',
    bg: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 40%, #0F3460 100%)',
    accent: '#C9A84C',
    textColor: '#E8E0FF',
    pattern: '✦ ★ ✦ ★ ✦'
  },
  {
    id: 'pearl',
    title: 'Pearl & Sea',
    subtitle: 'Born from the ocean',
    description: 'Serene pearl pieces kissed by tidewater and light',
    emoji: '🐚',
    bg: 'linear-gradient(135deg, #E0F4F8 0%, #B8E6F0 40%, #7DCFE0 100%)',
    accent: '#2E8BA0',
    textColor: '#0D4F5C',
    pattern: '〰️ 🐚 〰️ 🐚 〰️'
  }
]

const CollectionBanner = () => {
  return (
    <div className='my-16'>
      <div className='mb-10 text-center'>
        <p className='mb-2 text-sm tracking-widest text-gold'>EXPLORE</p>
        <h2 className='text-4xl font-display text-charcoal'>Our Signature Collections</h2>
        <p className='mt-2 text-sm text-gray-500'>Three worlds of beauty, each with its own soul</p>
      </div>

      <div className='flex flex-col gap-6'>
        {collections.map((col, index) => (
          <div
            key={col.id}
            className={`relative overflow-hidden rounded-2xl p-10 flex flex-col sm:flex-row items-center gap-6 ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
            style={{ background: col.bg }}
          >
            {/* Pattern overlay */}
            <div className='absolute inset-0 flex items-center justify-center overflow-hidden text-6xl tracking-widest pointer-events-none select-none opacity-10'>
              {col.pattern}
            </div>

            {/* Emoji circle */}
            <div
              className='relative z-10 flex items-center justify-center flex-shrink-0 w-32 h-32 text-6xl rounded-full'
              style={{ background: `${col.accent}22`, border: `2px solid ${col.accent}44` }}
            >
              {col.emoji}
            </div>

            {/* Text */}
            <div className='relative z-10 text-center sm:text-left'>
              <p className='mb-1 text-xs font-medium tracking-widest' style={{ color: col.accent }}>
                {col.subtitle.toUpperCase()}
              </p>
              <h3 className='mb-2 text-3xl font-display' style={{ color: col.textColor }}>
                {col.title}
              </h3>
              <p className='max-w-md mb-4 text-sm' style={{ color: col.textColor, opacity: 0.8 }}>
                {col.description}
              </p>
              <Link
                to={`/collection?theme=${col.id}`}
                className='inline-block px-6 py-2 text-sm font-medium transition-all rounded-full hover:scale-105'
                style={{ background: col.accent, color: col.id === 'luna' ? '#1A1A2E' : 'white' }}
              >
                Explore {col.title} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollectionBanner