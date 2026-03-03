import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Truck, Shield, CreditCard, Headphones } from 'lucide-react'
import { heroBanners, trustBadges } from '../data/games'

const trustIcons = {
  truck: Truck,
  shield: Shield,
  'credit-card': CreditCard,
  headphones: Headphones,
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const totalSlides = heroBanners.length

  const goTo = useCallback(
    (index) => {
      setCurrent((index + totalSlides) % totalSlides)
    },
    [totalSlides]
  )

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext, isHovered])

  const banner = heroBanners[current]

  return (
    <section id="hero" className="pt-[120px] md:pt-[132px]">
      {/* ─── Banner Carousel ─── */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden bg-void group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        {heroBanners.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Content (always visible, updates with current slide) */}
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
            {/* Badge */}
            {banner.badge && (
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${
                  banner.badgeColor
                } ${
                  banner.badgeColor === 'bg-neon-green'
                    ? 'text-void'
                    : 'text-white'
                }`}
              >
                {banner.badge}
              </span>
            )}

            {/* Title */}
            <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-ghost leading-tight max-w-xl mb-2">
              {banner.title}
            </h2>

            {/* Subtitle */}
            <p className="text-ghost/80 text-sm sm:text-base md:text-lg max-w-md mb-5">
              {banner.subtitle}
            </p>

            {/* CTA Button */}
            <a
              href={banner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-green text-void font-semibold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(255,45,107,0.4)] transition-all duration-300 hover:scale-105"
            >
              {banner.cta}
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-void/50 backdrop-blur-sm border border-ghost/10 text-ghost/70 hover:text-ghost hover:bg-void/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goNext}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-void/50 backdrop-blur-sm border border-ghost/10 text-ghost/70 hover:text-ghost hover:bg-void/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-6 h-2 bg-neon-green'
                  : 'w-2 h-2 bg-ghost/30 hover:bg-ghost/50'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ─── Trust Badges Strip ─── */}
      <div className="bg-void-light border-y border-ghost/5 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {trustBadges.map((badge, index) => {
              const IconComponent = trustIcons[badge.icon]
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 py-1"
                >
                  {IconComponent && (
                    <IconComponent
                      size={14}
                      className="text-neon-green/60 flex-shrink-0"
                    />
                  )}
                  <span className="text-xs text-ghost/60 whitespace-nowrap">
                    {badge.text}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
