import { useEffect, useRef } from 'react'
import { ExternalLink, Tag } from 'lucide-react'
import { gsap, ScrollTrigger } from '../utils/animations'
import { deals } from '../data/games'

export default function Deals() {
  const sectionRef = useRef(null)

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up header
      gsap.from('.deals-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.deals-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Stagger deal cards
      gsap.from('.deal-card', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.deals-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="ofertas" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="deals-header flex items-end justify-between mb-8">
          <div>
            <span className="font-mono text-xs tracking-widest text-neon-green uppercase">
              // Ofertas
            </span>
            <h2 className="font-sora font-bold text-2xl md:text-4xl text-ghost mt-1">
              Ofertas y Promociones
            </h2>
          </div>
          <a
            href="#ofertas"
            className="flex items-center gap-1 text-sm text-ghost-dim hover:text-neon-green transition-colors font-mono"
          >
            Ver Todo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Deals Grid */}
        <div className="deals-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <a
              key={deal.id}
              href={deal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="deal-card group relative rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/50 to-transparent" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <Tag className="w-3.5 h-3.5 text-neon-green" />
                  <span className="font-mono text-[10px] text-neon-green uppercase tracking-wider">
                    Promo
                  </span>
                </div>
                <h3 className="font-bold text-lg text-ghost">
                  {deal.name}
                </h3>
                <p className="text-sm text-ghost/60 mt-1">
                  {deal.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-neon-green hover:underline transition-colors">
                  Ver en Instagram
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
