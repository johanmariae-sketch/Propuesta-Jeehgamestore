import { useState } from 'react'
import { Search, Menu, X, Gamepad2, ShoppingBag, Instagram, Phone } from 'lucide-react'
import { useScrollMorph } from '../hooks/useScrollMorph'
import { storeProfile, categories } from '../data/games'

export default function Navbar() {
  const isScrolled = useScrollMorph('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ─── Top Strip ─── */}
      <div className="bg-void-light border-b border-ghost/5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8 text-[11px] text-ghost-dim">
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${storeProfile.phone1}`}
              className="flex items-center gap-1 hover:text-ghost transition-colors duration-200"
            >
              <Phone size={10} />
              {storeProfile.phone1}
            </a>
            <span className="text-ghost/20">|</span>
            <span>Delivery a todo RD</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={storeProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-neon-green transition-colors duration-200"
            >
              <Instagram size={10} />
              <span className="hidden sm:inline">@jeehgamesstore</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Header Bar ─── */}
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border-b border-ghost/5 ${
          isScrolled
            ? 'bg-void/95 backdrop-blur-xl shadow-lg'
            : 'bg-void'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14 md:h-16 gap-4">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <Gamepad2
              size={24}
              className="text-neon-green transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="flex items-baseline gap-0.5">
              <span className="font-sora font-bold text-lg tracking-tight text-ghost">
                Jeeh Games
              </span>
              <sup className="font-mono text-[9px] font-semibold text-neon-green tracking-wider">
                STORE
              </sup>
            </span>
          </a>

          {/* Center: Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ghost-dim pointer-events-none"
              />
              <input
                type="text"
                placeholder="Buscar juegos, consolas..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-void-lighter border border-ghost/10 text-sm text-ghost placeholder:text-ghost-dim/60 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/20 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-ghost/70 hover:text-ghost transition-colors duration-200"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>

            {/* Instagram */}
            <a
              href={storeProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 text-ghost/70 hover:text-neon-green transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href={storeProfile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ghost/70 hover:text-neon-green transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Shopping Bag */}
            <button
              className="relative p-2 text-ghost/70 hover:text-ghost transition-colors duration-200"
              aria-label="Carrito"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center rounded-full bg-neon-green text-void text-[10px] font-mono font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-ghost"
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (Expandable) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            searchOpen ? 'max-h-16 pb-3' : 'max-h-0'
          }`}
        >
          <div className="px-4">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ghost-dim pointer-events-none"
              />
              <input
                type="text"
                placeholder="Buscar juegos, consolas..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-void-lighter border border-ghost/10 text-sm text-ghost placeholder:text-ghost-dim/60 focus:outline-none focus:border-neon-green/50 transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Category Nav Bar ─── */}
      <div
        className={`border-b border-ghost/5 transition-all duration-500 ${
          isScrolled
            ? 'bg-void/95 backdrop-blur-xl'
            : 'bg-void'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                onClick={() => setActiveCategory(cat.href)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat.href
                    ? 'border-neon-green text-neon-green bg-neon-green/5'
                    : 'border-ghost/10 bg-void-light text-ghost/70 hover:border-neon-green/50 hover:text-neon-green'
                }`}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={`fixed inset-0 z-40 bg-void/95 backdrop-blur-2xl flex flex-col transition-all duration-500 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Mobile menu top spacing for header */}
        <div className="pt-32 px-6 flex-1 overflow-y-auto">
          {/* Mobile Search */}
          <div className="relative mb-6">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ghost-dim pointer-events-none"
            />
            <input
              type="text"
              placeholder="Buscar juegos, consolas..."
              className="w-full pl-10 pr-4 py-3 rounded-full bg-void-lighter border border-ghost/10 text-sm text-ghost placeholder:text-ghost-dim/60 focus:outline-none focus:border-neon-green/50 transition-all duration-200"
            />
          </div>

          {/* Mobile Category Links */}
          <div className="space-y-1 mb-8">
            <p className="text-[11px] uppercase tracking-[0.15em] text-ghost-dim mb-3 px-2">
              Categorias
            </p>
            {categories.map((cat, i) => (
              <a
                key={cat.href}
                href={cat.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-ghost text-lg font-sora font-medium hover:bg-void-light transition-colors duration-200"
                style={{
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: menuOpen ? 1 : 0,
                  transition:
                    'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease, background-color 0.2s',
                }}
              >
                {cat.label}
              </a>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div className="border-t border-ghost/10 pt-6 space-y-4">
            <a
              href={`tel:${storeProfile.phone1}`}
              className="flex items-center gap-3 text-ghost/70 hover:text-ghost transition-colors duration-200"
            >
              <Phone size={16} />
              <span className="text-sm">{storeProfile.phone1}</span>
            </a>
            <a
              href={storeProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ghost/70 hover:text-neon-green transition-colors duration-200"
            >
              <Instagram size={16} />
              <span className="text-sm">@jeehgamesstore</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
