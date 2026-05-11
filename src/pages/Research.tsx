import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../hooks/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { researchTranslations } from '../i18n/translations/research'
import { posts, tags } from '../content'
import PageHeader from '../components/shared/PageHeader'
import Footer from '../components/layout/Footer'

export default function Research() {
  const t = useT(researchTranslations)
  const { lang } = useLanguage()
  useDocumentTitle(lang === 'nl' ? 'Onderzoek | Bluemetric' : 'Research | Bluemetric')
  useScrollAnimation()

  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filtered = activeTag ? posts.filter(p => p.tag === activeTag) : posts

  return (
    <>
      <PageHeader label={t.pageLabel} heading={t.pageHeading} sub={t.pageSub} />

      <section className="research">
        <div className="research-inner">
          <div className="research-filter-dropdown fade-up" ref={dropdownRef}>
            <button
              className={`research-filter-trigger${dropdownOpen ? ' open' : ''}`}
              onClick={() => setDropdownOpen(prev => !prev)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <span>{activeTag ?? t.filterAll}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="research-filter-options" role="listbox">
                <button
                  className={`research-filter-option${activeTag === null ? ' active' : ''}`}
                  onClick={() => { setActiveTag(null); setDropdownOpen(false) }}
                  role="option"
                  aria-selected={activeTag === null}
                >
                  {t.filterAll}
                </button>
                {tags.map(tag => (
                  <button
                    key={tag}
                    className={`research-filter-option${activeTag === tag ? ' active' : ''}`}
                    onClick={() => { setActiveTag(tag); setDropdownOpen(false) }}
                    role="option"
                    aria-selected={activeTag === tag}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="research-grid fade-up">
            {filtered.map(post => (
              <Link to={`/research/${post.slug}`} className="research-card" key={post.slug}>
                <div className="research-card-body">
                  <div className="research-tag">{post.tag}</div>
                  <h2>{post.title}</h2>
                  <p className="research-meta">{post.author} · {new Date(post.date).toLocaleDateString(lang === 'nl' ? 'nl-NL' : 'en-GB', { year: 'numeric', month: 'long' })}</p>
                  <span className="research-link">{t.readLink}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
