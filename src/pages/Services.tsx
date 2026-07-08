import { useRef, useState, useEffect, useCallback } from 'react'
import { useT } from '../hooks/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { servicesTranslations } from '../i18n/translations/services'
import PageHeader from '../components/shared/PageHeader'
import Footer from '../components/layout/Footer'

export default function Services() {
  const t = useT(servicesTranslations)
  const { lang } = useLanguage()
  useDocumentTitle(lang === 'nl' ? 'Diensten | Bluemetric' : 'Services | Bluemetric')
  useScrollAnimation()

  const sliderRef = useRef<HTMLDivElement>(null)
  const [dots, setDots] = useState<number[]>([0])
  const [activeDot, setActiveDot] = useState(0)
  const cardWidth = 400

  const initDots = useCallback(() => {
    if (!sliderRef.current) return
    const visibleCount = Math.floor(sliderRef.current.offsetWidth / cardWidth)
    const totalDots = Math.max(1, t.services.length - visibleCount + 1)
    setDots(Array.from({ length: totalDots }, (_, i) => i))
  }, [t.services.length])

  const updateDots = useCallback(() => {
    if (!sliderRef.current) return
    setActiveDot(Math.round(sliderRef.current.scrollLeft / cardWidth))
  }, [])

  const slideServices = (dir: number) => {
    sliderRef.current?.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }

  useEffect(() => {
    initDots()
    window.addEventListener('resize', initDots)
    const slider = sliderRef.current
    let rafId = 0
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateDots)
    }
    slider?.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', initDots)
      slider?.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [initDots, updateDots])

  return (
    <>
      <PageHeader label={t.pageLabel} heading={t.pageHeading} sub={t.pageSub} />

      <section className="services" id="services">

        {/* Five Pillars */}
        <div className="services-pillars">
          <div className="services-inner">
            <div className="services-header fade-up">
              <div className="services-header-left">
                <div className="section-label">{t.sectionLabel}</div>
                <h2 className="section-heading">{t.sectionHeading}</h2>
                <p className="services-sub">{t.advisoryDesc} {t.advisoryDesc2}</p>
              </div>
              <div className="slider-arrows">
                <button className="slider-arrow" onClick={() => slideServices(-1)} aria-label="Previous">&larr;</button>
                <button className="slider-arrow" onClick={() => slideServices(1)} aria-label="Next">&rarr;</button>
              </div>
            </div>

            {/* Desktop slider */}
            <div className="services-slider-wrap">
              <div className="services-slider" ref={sliderRef}>
                {t.services.map((s, i) => (
                  <div className="service-card" key={i}>
                    <div>
                      <div className="service-num">{s.num}</div>
                      <h3 className="service-title">{s.title}</h3>
                      <p className="service-desc">{s.desc}</p>
                    </div>
                    <ul className="service-items">
                      {s.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="services-progress" role="group" aria-label={`Slide ${activeDot + 1} of ${dots.length}`}>
                {dots.map((_, i) => (
                  <div key={i} className={`services-progress-dot${i === activeDot ? ' active' : ''}`} />
                ))}
              </div>
            </div>

            {/* Mobile stacked */}
            <div className="services-stacked">
              {t.services.map((s, i) => (
                <div className="service-card-stacked" key={i}>
                  <div className="service-num">{s.num}</div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <ul className="service-items">
                    {s.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <Footer brandmarkDirection="rtl" />
    </>
  )
}
