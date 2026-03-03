import { useEffect, useRef } from 'react'
import { Instagram, ArrowUpRight } from 'lucide-react'
import { gsap } from '../utils/animations'
import { galleryImages, storeProfile } from '../data/games'

export default function Gallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-card', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="instagram"
      ref={sectionRef}
      className="bg-void py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="font-mono text-xs tracking-[0.15em] text-ghost-dim uppercase">
              Siguenos en Instagram
            </span>
            <h2 className="mt-3 font-sora font-bold text-3xl md:text-5xl leading-tight tracking-[-0.03em] text-ghost flex items-center gap-3">
              <Instagram size={32} className="text-hot-pink" />
              @jeehgamesstore
            </h2>
          </div>
          <a
            href={storeProfile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-sora font-semibold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(255,45,107,0.3)] transition-shadow"
          >
            <Instagram size={16} />
            Seguir
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Image Grid */}
        <div className="gallery-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((item, i) => (
            <a
              key={i}
              href={item.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`gallery-card group relative overflow-hidden rounded-xl aspect-square cursor-pointer ${item.span}`}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-void/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-4">
                <Instagram size={28} className="text-white" />
                <span className="font-sora text-sm text-ghost text-center font-medium leading-snug">
                  {item.caption}
                </span>
                <ArrowUpRight size={20} className="text-neon-green" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
