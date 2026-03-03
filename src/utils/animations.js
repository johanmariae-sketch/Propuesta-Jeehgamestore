import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const fadeUpFrom = {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
}

export const staggerFadeUp = (stagger = 0.08) => ({
  y: 40,
  opacity: 0,
  duration: 1,
  stagger,
  ease: 'power3.out',
})
