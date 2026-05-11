import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll('.fade-up, .fade-in').forEach(el => el.classList.add('visible'))
      return
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-up, .fade-in').forEach(el => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el))

    const onLoad = () => {
      const elements = document.querySelectorAll('.fade-up:not(.visible), .fade-in:not(.visible)')
      const toReveal: Element[] = []
      elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) toReveal.push(el)
      })
      toReveal.forEach(el => el.classList.add('visible'))
    }
    window.addEventListener('load', onLoad)

    return () => {
      observer.disconnect()
      window.removeEventListener('load', onLoad)
    }
  }, [])
}
