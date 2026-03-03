import { useEffect, useRef } from 'react'
import { Instagram, Phone, MapPin, MessageCircle } from 'lucide-react'
import { gsap } from '../utils/animations'
import { storeProfile } from '../data/games'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="bg-void-light py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="contact-item font-sora font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-ghost">
          Necesitas ayuda?{' '}
          <span className="text-neon-green">Contactanos</span>
        </h2>

        {/* Subtitle */}
        <p className="contact-item mt-5 font-sora text-base md:text-lg text-ghost-dim leading-relaxed">
          Delivery a todo RD. Tienda abierta de Lunes a Sabado, 9AM - 7PM.
          Escribenos por WhatsApp o Instagram para consultas rapidas.
        </p>

        {/* Action Buttons */}
        <div className="contact-item flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {/* Instagram */}
          <a
            href={storeProfile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-sora font-semibold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-shadow"
          >
            <Instagram size={18} />
            Instagram
          </a>

          {/* WhatsApp */}
          <a
            href={storeProfile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-sora font-semibold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-shadow"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* Llamar */}
          <a
            href={`tel:${storeProfile.phone1}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ghost/20 text-ghost font-sora font-medium text-sm tracking-wide hover:border-ghost/50 transition-colors"
          >
            <Phone size={18} />
            Llamar
          </a>
        </div>

        {/* Info Grid */}
        <div className="contact-item mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Telefonos */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-void border border-ghost/10 flex items-center justify-center">
              <Phone size={20} className="text-neon-green" />
            </div>
            <span className="font-mono text-xs text-ghost-dim">
              {storeProfile.phone1}
            </span>
            <span className="font-mono text-xs text-ghost-dim/60">
              {storeProfile.phone2}
            </span>
          </div>

          {/* Direccion */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-void border border-ghost/10 flex items-center justify-center">
              <MapPin size={20} className="text-hot-pink" />
            </div>
            <span className="font-mono text-xs text-ghost-dim text-center">
              {storeProfile.address}
            </span>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-void border border-ghost/10 flex items-center justify-center">
              <Instagram size={20} className="text-hot-pink" />
            </div>
            <span className="font-mono text-xs text-ghost-dim">
              @jeehgamesstore
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
