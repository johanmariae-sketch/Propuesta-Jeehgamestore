import { useEffect, useRef } from 'react'
import { Instagram, Phone, Gamepad2, MapPin } from 'lucide-react'
import { gsap } from '../utils/animations'
import { storeProfile, tickerMessages } from '../data/games'

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Consolas', href: '#consolas' },
  { label: 'Juegos', href: '#juegos' },
  { label: 'Pre-Ordenes', href: '#preorden' },
  { label: 'Ofertas', href: '#ofertas' },
]

const categoryLinks = [
  'PS5',
  'Switch 2',
  'Xbox',
  'Juegos Digitales',
  'Accesorios',
]

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  const tickerText = tickerMessages.join('  ///  ')

  return (
    <footer
      ref={footerRef}
      className="bg-void-light rounded-t-[3rem] pt-16 pb-0 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="footer-col">
            <a href="#" className="flex items-center gap-2">
              <Gamepad2 size={20} className="text-neon-green" />
              <span className="flex items-baseline gap-0.5">
                <span className="font-sora font-bold text-xl text-ghost tracking-tight">
                  Jeeh Games
                </span>
                <span className="font-mono text-[10px] font-medium text-neon-green relative -top-2">
                  STORE
                </span>
              </span>
            </a>
            <p className="mt-4 text-ghost-dim text-sm leading-relaxed">
              {storeProfile.tagline}
            </p>
            <p className="mt-2 font-mono text-xs text-neon-green">
              Delivery a todo RD
            </p>
          </div>

          {/* Col 2: Navegacion */}
          <div className="footer-col">
            <h4 className="font-mono text-[10px] tracking-[0.15em] text-neon-green uppercase mb-4">
              Navegacion
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-ghost-dim text-sm hover:text-ghost transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Categorias */}
          <div className="footer-col">
            <h4 className="font-mono text-[10px] tracking-[0.15em] text-neon-green uppercase mb-4">
              Categorias
            </h4>
            <nav className="flex flex-col gap-3">
              {categoryLinks.map((cat) => (
                <span key={cat} className="text-ghost-dim text-sm">
                  {cat}
                </span>
              ))}
            </nav>
          </div>

          {/* Col 4: Contacto */}
          <div className="footer-col">
            <h4 className="font-mono text-[10px] tracking-[0.15em] text-neon-green uppercase mb-4">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-ghost-dim text-sm">
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-ghost-dim/60" />
                {storeProfile.phone1}
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-ghost-dim/60" />
                {storeProfile.phone2}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-ghost-dim/60" />
                Los Alcarrizos, RD
              </span>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href={storeProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ghost-dim hover:text-hot-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={storeProfile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ghost-dim hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ghost/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-ghost-dim/60 text-xs font-mono">
            &copy; 2026 Jeeh Games Store. Todos los derechos reservados.
          </span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green" />
            </span>
            <span className="font-mono text-[11px] text-ghost-dim">
              Tienda Abierta
            </span>
          </span>
        </div>
      </div>

      {/* Ticker Strip */}
      <div className="border-t border-ghost/5 py-3 -mx-6 md:-mx-16 overflow-hidden">
        <div className="ticker-scroll whitespace-nowrap flex">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ghost-dim/30 uppercase">
            {tickerText}&nbsp;&nbsp;///&nbsp;&nbsp;{tickerText}
          </span>
        </div>
      </div>
    </footer>
  )
}
