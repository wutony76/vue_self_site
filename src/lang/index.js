import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en'
import ptLocale from './pt'
import inLocale from './in'
import koLocale from './ko'
import deLocale from './de'
import jaLocale from './ja'
import frLocale from './fr'
import arLocale from './ar'
import trLocale from './tr'
import esLocale from './es'
import chLocale from './ch'
import twLocale from './tw'
import vnLocale from './vn'

Vue.use(VueI18n)

const messages = {

  /*
  en: {
    ...enLocale,
  },

  ch: {
    ...chLocale,
  },

  tw: {
    ...twLocale,
  },

  vn: {
    ...vnLocale,
  },


  
  pt:{
    ...ptLocale
  },
  in:{
    ...inLocale
  },
  ko: {
    ...koLocale,
  },
  de: {
    ...deLocale,
  },
  ja: {
    ...jaLocale,
  },
  fr: {
    ...frLocale,
  },
  ar: {
    ...arLocale,
  },
  tr: {
    ...trLocale,
  },
  es: {
    ...esLocale,
  }
  */
  
}
export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  console.log(chooseLanguage);
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  //const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  
  // const locales = Object.keys(messages)
  // for (const locale of locales) {
  //   if (language.indexOf(locale) > -1) {
  //     return locale
  //   }
  // }
  //return 'ch'
  //return 'en'
  return 'tw'
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
