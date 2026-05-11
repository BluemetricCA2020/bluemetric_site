import { useLanguage } from '../i18n/LanguageContext'

export function useT<T>(translations: { en: T; nl: T }): T {
  const { lang } = useLanguage()
  return translations[lang]
}
