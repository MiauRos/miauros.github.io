import { createI18n } from 'vue-i18n'
import en from './en'
import es from './es'
import de from './de'

const i18n = createI18n({
  legacy: false,
  locale: 'en',        // idioma por defecto
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    de
  }
})

export default i18n
