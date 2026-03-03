import { useState, useEffect } from 'react'

export function useScrollMorph(targetId = 'hero') {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [targetId])

  return isScrolled
}
