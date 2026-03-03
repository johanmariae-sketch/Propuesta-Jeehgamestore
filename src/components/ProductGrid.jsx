import { useState, useEffect, useRef } from 'react'
import { ExternalLink, ShoppingCart } from 'lucide-react'
import { gsap, ScrollTrigger } from '../utils/animations'
import { newReleases, consoles, accessories, platformColors } from '../data/games'

// ─── Badge color map ───
const badgeStyles = {
  'Nuevo': 'bg-red-500 text-white',
  'Pre-Orden': 'bg-purple-500 text-white',
  'Oferta': 'bg-neon-green text-void',
  'Bundle': 'bg-blue-500 text-white',
}

// ─── Platform filter tabs ───
const platformTabs = ['Todas', 'PS5', 'Switch 2', 'Xbox']

// ─── Product Card ───
function ProductCard({ product }) {
  const colors = platformColors[product.platform]

  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card group rounded-2xl bg-void-light border border-ghost/5 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-square bg-void-lighter overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && badgeStyles[product.badge] && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        {/* Platform badge */}
        {colors && (
          <span
            className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}
          >
            {product.platform}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-sora font-semibold text-sm text-ghost line-clamp-2">
          {product.name}
        </h3>
        <p className="font-mono text-[10px] text-ghost-dim uppercase tracking-wider mt-1">
          {product.platform}
        </p>

        {/* Price */}
        <div className="mt-3">
          {product.salePrice && product.price ? (
            <div className="flex items-baseline gap-2">
              <span className="line-through text-ghost/40 text-xs font-mono">
                RD${product.price.toLocaleString()}
              </span>
              <span className="font-mono font-bold text-lg text-neon-green">
                RD${product.salePrice.toLocaleString()}
              </span>
            </div>
          ) : (
            <span className="font-mono font-bold text-lg text-ghost">
              RD${(product.salePrice || product.price || 0).toLocaleString()}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-3">
          <span className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-neon-green/10 text-neon-green border border-neon-green/20 transition-colors duration-200 group-hover:bg-neon-green group-hover:text-void">
            <ShoppingCart className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
            Comprar
          </span>
        </div>
      </div>
    </a>
  )
}

// ─── Section Header ───
function SectionHeader({ label, title }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <span className="font-mono text-xs tracking-widest text-neon-green uppercase">
          {label}
        </span>
        <h2 className="font-sora font-bold text-2xl md:text-4xl text-ghost mt-1">
          {title}
        </h2>
      </div>
    </div>
  )
}

// ─── Main Component ───
export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState('Todas')
  const sectionRef = useRef(null)

  const filteredConsoles =
    activeTab === 'Todas'
      ? consoles
      : consoles.filter((c) => c.platform === activeTab)

  const filteredAccessories =
    activeTab === 'Todas'
      ? accessories
      : accessories.filter((a) => a.platform === activeTab)

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.new-releases-grid .product-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.new-releases-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.consoles-grid .product-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.consoles-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.accessories-grid .product-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.accessories-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Novedades / Juegos ── */}
        <div id="juegos" className="mb-20 scroll-mt-36">
          <SectionHeader
            label="// Novedades"
            title="Nuevos Lanzamientos"
          />
          <div className="new-releases-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {newReleases.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* ── Consolas ── */}
        <div id="consolas" className="mb-20 scroll-mt-36">
          <SectionHeader
            label="// Consolas"
            title="Consolas"
          />

          {/* Platform filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {platformTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-neon-green text-void'
                    : 'bg-void-lighter text-ghost/60 border border-ghost/10 hover:text-ghost hover:border-ghost/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="consoles-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredConsoles.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* ── Accesorios ── */}
        <div id="accesorios" className="scroll-mt-36">
          <SectionHeader
            label="// Accesorios"
            title="Accesorios"
          />

          {/* Platform filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {platformTabs.map((tab) => (
              <button
                key={`acc-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-neon-green text-void'
                    : 'bg-void-lighter text-ghost/60 border border-ghost/10 hover:text-ghost hover:border-ghost/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="accessories-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredAccessories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
