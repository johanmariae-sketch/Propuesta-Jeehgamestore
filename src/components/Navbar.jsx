import { useState, useRef, useEffect } from 'react'
import { Search, Menu, X, ShoppingBag, Instagram, Phone, LayoutGrid, ChevronDown } from 'lucide-react'
import { useScrollMorph } from '../hooks/useScrollMorph'
import { storeProfile, categories, newReleases, consoles, accessories } from '../data/games'

// All products for search
const allProducts = [...newReleases, ...consoles, ...accessories]

export default function Navbar() {
  const isScrolled = useScrollMorph('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const catalogRef = useRef(null)
  const searchRef = useRef(null)

  // Search results
  const searchResults = searchQuery.length >= 2
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.platform.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  // Close catalog when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (catalogRef.current && !catalogRef.current.contains(e.target)) {
        setCatalogOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchQuery('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [catalogOpen])

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
            <img
              src="/images/logo.jpg"
              alt="Jeeh Games Store"
              className="h-10 w-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:flex items-baseline gap-0.5">
              <span className="font-sora font-bold text-lg tracking-tight text-ghost">
                Jeeh Games
              </span>
              <sup className="font-mono text-[9px] font-semibold text-neon-green tracking-wider">
                STORE
              </sup>
            </span>
          </a>

          {/* Center: Search Bar (Desktop) */}
          <div ref={searchRef} className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <div className="relative w-full">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ghost-dim pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar juegos, consolas, accesorios..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-void-lighter border border-ghost/10 text-sm text-ghost placeholder:text-ghost-dim/60 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/20 transition-all duration-200"
              />
            </div>
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-void-light border border-ghost/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden z-50">
                <div className="max-h-80 overflow-y-auto p-2">
                  {searchResults.map((p) => (
                    <a
                      key={p.id}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSearchQuery('')}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-void-lighter transition-colors"
                    >
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-contain bg-void" loading="lazy" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-ghost truncate">{p.name}</p>
                        <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                      </div>
                      <span className="text-sm font-mono font-bold text-neon-green flex-shrink-0">
                        RD${(p.salePrice || p.price).toLocaleString()}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-void-light border border-ghost/10 rounded-2xl shadow-2xl shadow-black/40 p-4 z-50">
                <p className="text-sm text-ghost-dim text-center">No se encontraron productos</p>
              </div>
            )}
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
            searchOpen ? 'max-h-96 pb-3' : 'max-h-0'
          }`}
        >
          <div className="px-4">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ghost-dim pointer-events-none z-10"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar juegos, consolas, accesorios..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-void-lighter border border-ghost/10 text-sm text-ghost placeholder:text-ghost-dim/60 focus:outline-none focus:border-neon-green/50 transition-all duration-200"
              />
            </div>
            {/* Mobile Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-void-light border border-ghost/10 rounded-xl overflow-hidden">
                <div className="max-h-60 overflow-y-auto p-1.5">
                  {searchResults.map((p) => (
                    <a
                      key={p.id}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { setSearchQuery(''); setSearchOpen(false) }}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-void-lighter transition-colors"
                    >
                      <img src={p.image} alt={p.name} className="w-8 h-8 rounded object-contain bg-void" loading="lazy" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-ghost truncate">{p.name}</p>
                        <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-neon-green">
                        RD${(p.salePrice || p.price).toLocaleString()}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="mt-2 bg-void-light border border-ghost/10 rounded-xl p-3">
                <p className="text-xs text-ghost-dim text-center">No se encontraron productos</p>
              </div>
            )}
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
            {/* Catálogo Button */}
            <div ref={catalogRef} className="relative flex-shrink-0">
              <button
                onClick={() => setCatalogOpen(!catalogOpen)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  catalogOpen
                    ? 'border-neon-green text-void bg-neon-green'
                    : 'border-neon-green/50 text-neon-green bg-neon-green/10 hover:bg-neon-green hover:text-void'
                }`}
              >
                <LayoutGrid size={14} />
                Catálogo
                <ChevronDown size={12} className={`transition-transform duration-200 ${catalogOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* ─── Catalog Dropdown Panel ─── */}
              <div
                className={`absolute top-full left-0 mt-2 w-[90vw] max-w-4xl bg-void-light border border-ghost/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden transition-all duration-300 origin-top-left ${
                  catalogOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
                style={{ zIndex: 60 }}
              >
                <div className="p-5 max-h-[75vh] overflow-y-auto">
                  {/* Juegos */}
                  <div className="mb-6">
                    <h3 className="font-mono text-xs tracking-widest text-neon-green uppercase mb-3">
                      // Juegos
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {newReleases.map((p) => (
                        <a
                          key={p.id}
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setCatalogOpen(false)}
                          className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-void-lighter border border-ghost/5 hover:border-neon-green/30 transition-all duration-200"
                        >
                          <div className="w-full aspect-square rounded-lg overflow-hidden bg-void">
                            <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" loading="lazy" />
                          </div>
                          <div className="text-center w-full">
                            <p className="text-xs font-semibold text-ghost line-clamp-1 group-hover:text-neon-green transition-colors">
                              {p.name}
                            </p>
                            <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                            <p className="text-xs font-mono font-bold text-neon-green mt-0.5">
                              RD${(p.salePrice || p.price).toLocaleString()}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Consolas */}
                  <div className="mb-6">
                    <h3 className="font-mono text-xs tracking-widest text-neon-green uppercase mb-3">
                      // Consolas
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {consoles.map((p) => (
                        <a
                          key={p.id}
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setCatalogOpen(false)}
                          className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-void-lighter border border-ghost/5 hover:border-neon-green/30 transition-all duration-200"
                        >
                          <div className="w-full aspect-square rounded-lg overflow-hidden bg-void">
                            <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" loading="lazy" />
                          </div>
                          <div className="text-center w-full">
                            <p className="text-xs font-semibold text-ghost line-clamp-1 group-hover:text-neon-green transition-colors">
                              {p.name}
                            </p>
                            <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                            <div className="flex items-baseline justify-center gap-1 mt-0.5">
                              {p.price && p.salePrice && (
                                <span className="line-through text-ghost/30 text-[10px] font-mono">
                                  RD${p.price.toLocaleString()}
                                </span>
                              )}
                              <span className="text-xs font-mono font-bold text-neon-green">
                                RD${(p.salePrice || p.price).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Accesorios */}
                  <div>
                    <h3 className="font-mono text-xs tracking-widest text-neon-green uppercase mb-3">
                      // Accesorios
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {accessories.map((p) => (
                        <a
                          key={p.id}
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setCatalogOpen(false)}
                          className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-void-lighter border border-ghost/5 hover:border-neon-green/30 transition-all duration-200"
                        >
                          <div className="w-full aspect-square rounded-lg overflow-hidden bg-void">
                            <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" loading="lazy" />
                          </div>
                          <div className="text-center w-full">
                            <p className="text-xs font-semibold text-ghost line-clamp-1 group-hover:text-neon-green transition-colors">
                              {p.name}
                            </p>
                            <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                            <span className="text-xs font-mono font-bold text-neon-green">
                              RD${(p.salePrice || p.price).toLocaleString()}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => {
                  setActiveCategory(cat.label)
                  // Dispatch platform filter event to ProductGrid
                  if (cat.filter) {
                    window.dispatchEvent(new CustomEvent('filterPlatform', { detail: { platform: cat.filter } }))
                  }
                  // Scroll to the section
                  setTimeout(() => {
                    const el = document.querySelector(cat.href)
                    if (el) {
                      const headerHeight = 140
                      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
                      window.scrollTo({ top, behavior: 'smooth' })
                    }
                  }, 50)
                }}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat.label
                    ? 'border-neon-green text-neon-green bg-neon-green/5'
                    : 'border-ghost/10 bg-void-light text-ghost/70 hover:border-neon-green/50 hover:text-neon-green'
                }`}
              >
                {cat.label}
              </button>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar juegos, consolas, accesorios..."
              className="w-full pl-10 pr-4 py-3 rounded-full bg-void-lighter border border-ghost/10 text-sm text-ghost placeholder:text-ghost-dim/60 focus:outline-none focus:border-neon-green/50 transition-all duration-200"
            />
            {/* Mobile Menu Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-void-lighter border border-ghost/10 rounded-xl overflow-hidden">
                <div className="max-h-60 overflow-y-auto p-1.5">
                  {searchResults.map((p) => (
                    <a
                      key={p.id}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { setSearchQuery(''); setMenuOpen(false) }}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-void-light transition-colors"
                    >
                      <img src={p.image} alt={p.name} className="w-8 h-8 rounded object-contain bg-void" loading="lazy" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-ghost truncate">{p.name}</p>
                        <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-neon-green">
                        RD${(p.salePrice || p.price).toLocaleString()}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="mt-2 bg-void-lighter border border-ghost/10 rounded-xl p-3">
                <p className="text-xs text-ghost-dim text-center">No se encontraron productos</p>
              </div>
            )}
          </div>

          {/* Mobile Catálogo */}
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.15em] text-ghost-dim mb-3 px-2">
              Catálogo
            </p>

            {/* Juegos */}
            <p className="text-[10px] uppercase tracking-widest text-neon-green mb-2 px-2">Juegos</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {newReleases.map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-xl bg-void-light border border-ghost/5 hover:border-neon-green/30 transition-all"
                >
                  <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-contain bg-void" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-ghost truncate">{p.name}</p>
                    <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                    <p className="text-[11px] font-mono font-bold text-neon-green">RD${(p.salePrice || p.price).toLocaleString()}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Consolas */}
            <p className="text-[10px] uppercase tracking-widest text-neon-green mb-2 px-2">Consolas</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {consoles.map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-xl bg-void-light border border-ghost/5 hover:border-neon-green/30 transition-all"
                >
                  <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-contain bg-void" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-ghost truncate">{p.name}</p>
                    <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                    <p className="text-[11px] font-mono font-bold text-neon-green">RD${(p.salePrice || p.price).toLocaleString()}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Accesorios */}
            <p className="text-[10px] uppercase tracking-widest text-neon-green mb-2 px-2">Accesorios</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {accessories.map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-xl bg-void-light border border-ghost/5 hover:border-neon-green/30 transition-all"
                >
                  <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-contain bg-void" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-ghost truncate">{p.name}</p>
                    <p className="text-[10px] text-ghost-dim">{p.platform}</p>
                    <p className="text-[11px] font-mono font-bold text-neon-green">RD${(p.salePrice || p.price).toLocaleString()}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Category Links */}
          <div className="space-y-1 mb-8">
            <p className="text-[11px] uppercase tracking-[0.15em] text-ghost-dim mb-3 px-2">
              Categorias
            </p>
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => {
                  setMenuOpen(false)
                  setActiveCategory(cat.label)
                  if (cat.filter) {
                    window.dispatchEvent(new CustomEvent('filterPlatform', { detail: { platform: cat.filter } }))
                  }
                  setTimeout(() => {
                    const el = document.querySelector(cat.href)
                    if (el) {
                      const headerHeight = 140
                      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
                      window.scrollTo({ top, behavior: 'smooth' })
                    }
                  }, 350)
                }}
                className="block w-full text-left px-4 py-3 rounded-xl text-ghost text-lg font-sora font-medium hover:bg-void-light transition-colors duration-200"
                style={{
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: menuOpen ? 1 : 0,
                  transition:
                    'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease, background-color 0.2s',
                }}
              >
                {cat.label}
              </button>
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
