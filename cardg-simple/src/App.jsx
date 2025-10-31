import React from 'react'
import Avatar from './assets/avatar.svg?react'

const profile = {
  name: 'Bilekli Ofset',
  title: 'Print & Design',
  bio: 'High-quality print solutions and bespoke design. Fast, precise, reliable.',
  phone: '+90 555 555 55 55',
  email: 'info@bilekliofset.com',
  website: 'https://bilekliofset.com',
  location: 'Istanbul, Türkiye'
}

function ActionButton({ href, label }) {
  return (
    <a
      href={href}
      className="flex-1 text-center py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 transition-colors accent-ring"
    >
      {label}
    </a>
  )
}

export default function App() {
  const tel = `tel:${profile.phone.replace(/\s|\(|\)|-/g, '')}`
  const mail = `mailto:${profile.email}`
  const website = profile.website
  const maps = `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`

  return (
    <main className="min-h-full flex items-center justify-center p-4">
      <div className="w-full max-w-md card-surface p-6 sm:p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="size-28 sm:size-32 rounded-full overflow-hidden ring-2 ring-gold/60 shadow-neon">
              <Avatar />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gradient-gold-white neon-glow text-center">
            {profile.name}
          </h1>
          <p className="text-gold/90 neon-glow font-semibold -mt-1">{profile.title}</p>

          <p className="text-sm sm:text-base text-neutral-300 text-center leading-relaxed">
            {profile.bio}
          </p>

          <div className="mt-4 w-full grid grid-cols-2 gap-3">
            <ActionButton href={tel} label="Phone" />
            <ActionButton href={mail} label="Email" />
            <ActionButton href={website} label="Website" />
            <ActionButton href={maps} label="Location" />
          </div>

          <div className="mt-6 w-full h-1 rounded-full bg-gradient-to-r from-gold/60 via-white/60 to-gold/60"></div>

          <div className="w-full text-xs text-neutral-400 text-center">
            <div className="flex flex-col gap-1">
              <span>{profile.phone}</span>
              <span>{profile.email}</span>
              <a className="hover:text-neutral-200" href={website}>{profile.website}</a>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


