import { createContext, useContext, useState, type ReactNode } from 'react'

type Lang = 'en' | 'nl'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

function getInitialLang(): Lang {
  const stored = localStorage.getItem('bluemetric-lang')
  if (stored === 'en' || stored === 'nl') return stored

  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('country='))
    ?.split('=')[1]
  if (cookie === 'nl') return 'nl'

  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const initial = getInitialLang()
    document.documentElement.lang = initial
    return initial
  })

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('bluemetric-lang', newLang)
    document.documentElement.lang = newLang
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
