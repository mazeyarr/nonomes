export const state = () => {
  return {
    loaded: false,
    loading: false,
    articles: [],
    pages: [],
    sections: [],
    animations: {
      delay: 200
    }
  }
}

export const getters = {
  loading: state => {
    return state.loading
  },

  loaded: state => {
    return state.loaded
  },

  getActivePage: state => () => state.pages.find(page => page.active),

  sections: state => state.sections,

  sectionFindByName: (state, getters) => name =>
    getters.sections.find(section => section.name === name),

  GET_ARTICLES: state => state.articles,

  GET_ARTICLES_BY_ID: (state, getters) => id =>
    getters.GET_ARTICLES.find(article => article.id === id),

  GET_OBJECT_TO_ANIMATE_BY_NAME: (state, getters) => (
    sectionName,
    objectName
  ) =>
    getters
      .sectionFindByName(sectionName)
      .objectsToAnimate.find(object => object.name === objectName),

  animationProperties: state => state.animations
}

export const mutations = {
  SET_ARTICLES(state, articles) {
    articles.forEach(article => state.articles.push(article))
  },
  SET_PAGES(state, pages) {
    pages.forEach(page => state.pages.push(page))
  },
  SET_SECTIONS(state, sections) {
    sections.forEach(section => state.sections.push(section))
  },

  TOGGLE_SHOW_OBJECT_IN_SECTION(
    state,
    { getters, sectionName, object, toggleVal }
  ) {
    const section = getters.sectionFindByName(sectionName)

    const objectToAnimate = section.objectsToAnimate.find(
      objectToAnimate => objectToAnimate.name === object.name
    )

    objectToAnimate.show = toggleVal
    if (!objectToAnimate.animatedOnce) objectToAnimate.animatedOnce = true
  },

  toggleLoading(state, option) {
    state.loading = option
    state.loaded = !option
  },

  setPageActive(state) {},

  animateSection(state, { getters, sectionName }) {
    const section = getters.sectionFindByName(sectionName)
    section.show = true

    if (!section.animatedOnce) section.animatedOnce = true // TODO: Fix animatedOnce!
  },

  incrementAnimationDelay(state, value) {
    state.animations.delay += value
  },

  resetAnimationDelay(state) {
    state.animations.delay = 200
  }
}

export const actions = {
  setPageActive({ commit }, pageName) {
    commit('setPageActive', pageName)
  },

  animateSection({ commit, getters, dispatch }, sectionName) {
    commit('animateSection', { getters, sectionName })

    if (getters.sectionFindByName(sectionName).objectsToAnimate !== null)
      dispatch('reAnimateObjects', sectionName)
  },

  reAnimateObjects({ commit, getters }, sectionName) {
    const objectsInSection = getters.sectionFindByName(sectionName)
      .objectsToAnimate

    objectsInSection.forEach(object => {
      commit('TOGGLE_SHOW_OBJECT_IN_SECTION', {
        getters,
        sectionName,
        object,
        toggleVal: false
      })

      setTimeout(
        () =>
          commit('TOGGLE_SHOW_OBJECT_IN_SECTION', {
            getters,
            sectionName,
            object,
            toggleVal: true
          }),
        getters.animationProperties.delay
      )

      commit('incrementAnimationDelay', 400)
    })

    commit('resetAnimationDelay')
  }
}
