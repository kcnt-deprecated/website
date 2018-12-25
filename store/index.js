export const state = () => ({
  languages: ['en', 'th'],
  lang: 'en',
  themeList: ['Light', 'Dark'],
  theme: 'Light'
})

export const mutations = {
  updateLanguage(state, { lang }) {
    state.lang = lang
  },
  toggleLanguage(state) {
    const size = state.languages.length
    const currentIndex = state.languages.findIndex(v => v === state.lang)
    const nextIndex = currentIndex + 1 >= size ? 0 : currentIndex + 1
    state.lang = state.languages[nextIndex]
  },
  updateTheme(state, { theme }) {
    if (state.themeList.findIndex(v => v === theme) >= 0) state.theme = theme
  },
  toggleTheme(state) {
    const size = state.themeList.length
    const currentIndex = state.themeList.findIndex(v => v === state.theme)
    const nextIndex = currentIndex + 1 >= size ? 0 : currentIndex + 1
    state.theme = state.themeList[nextIndex]
  }
}
