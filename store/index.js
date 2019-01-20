export const state = () => ({
  scrollTopPercent: 0,
  themeList: ['Light', 'Dark'],
  theme: 'Light'
})

export const mutations = {
  updateScrollValue(state, { scroll }) {
    state.scrollTopPercent = scroll.percentTop
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
