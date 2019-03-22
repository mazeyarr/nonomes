export const state = () => {
  return {
    loaded: false,
    loading: false,
    pages: [
      {
        name: 'Home',
        index: true,
        active: true
      },
      {
        name: 'contact',
        active: false
      }
    ],
    sections: [
      {
        name: 'intro-over',
        type: 'default',
        title: '',
        show: false,
        animatedOnce: false,
        styleClasses: 'h-100',
        preContent: '',
        contentPosition: {
          around: false,
          between: false,
          center: false,
          end: false,
          start: false
        },
        content: [
          {
            id: 1,
            colSize: '',
            styleClasses: 'p-5 mt-auto mb-auto',
            title: {
              styleClasses: 'text-black',
              text: 'Over NoNoMes',
              type: 'plain'
            },
            subTitle: '',
            body: {
              styleClasses: 'text-black',
              content: `<article><p class="text-black">S.V.A.A. Nomen Non Magnum Est, kortweg NoNoMes,
                    is een bruisende studentengezelligheidsvereniging
                    met meer dan 300 actieve leden. <br><br>
  
                    Haar sociëteit is
                    gevestigd in hartje Amsterdam op een steenworp afstand
                    van de Dam. NoNoMes wordt gekenmerkt door haar jonge en
                    groeiende karakter. Ieder jaar worden er verschillende
                    activiteiten georganiseerd, waarbij de wekelijkse borrel
                    op dinsdag centraal staat.</p></article>`,
              type: 'html'
            }
          },
          {
            id: 2,
            colSize: {
              sm: '12',
              md: '6',
              lg: ''
            },
            styleClasses: 'p-md-5 mt-auto mb-auto text-center',
            title: '',
            subTitle: '',
            body: {
              styleClasses: '',
              content: `<figure class="d-none d-sm-block"><img class="img-fluid" src="/images/nonomes_wapen.png"></figure>`,
              type: 'html'
            }
          }
        ]
      },
      {
        name: 'intro-disputen',
        type: 'default',
        title: '',
        show: false,
        animatedOnce: false,
        styleClasses: 'h-100',
        preContent: '',
        contentPosition: {
          around: false,
          between: false,
          center: false,
          end: false,
          start: false
        },
        content: [
          {
            id: 1,
            colSize: {
              sm: '12',
              md: '6',
              lg: ''
            },
            styleClasses: 'p-md-5 pt-5 mt-auto mb-auto text-center',
            title: '',
            subTitle: '',
            body: {
              styleClasses: 'w-100 h-100',
              content: `<figure><img src="/images/Disputen.png" class="img-fluid"></figure>`,
              type: 'html'
            }
          },
          {
            id: 2,
            colSize: '',
            styleClasses: 'p-5 mt-auto mb-auto',
            title: {
              styleClasses: 'text-white',
              text: 'Disputen',
              type: 'plain'
            },
            subTitle: '',
            body: {
              styleClasses: 'text-white',
              content: `<article><p class="text-white">
                    NoNoMes kent een disputencultuur.
                    Dit houdt in dat de meeste leden aangesloten zijn
                    bij een van de disputen die NoNoMes rijk is.
                    Ook zijn er enkele jaarclubs waar je je bij aan kunt sluiten. <br><br>
                    NoNoMes bestaat uit negen disputen, waarvan vijf dames en vier heren.
                    Samen met je dispuut borrel je niet alleen,
                    maar eet, studeer of woon je misschien wel samen. <br><br>
                  </p></article>`,
              type: 'html'
            }
          }
        ]
      },
      {
        name: 'intro-agenda',
        type: 'default',
        title: {
          styleClasses: 'text-black',
          text: 'Agenda',
          type: 'plain'
        },
        styleClasses: 'h-100 pl-2 pr-2 pl-md-5 pr-md-5 pb-md-5',
        preContent: '',
        contentPosition: {
          around: false,
          between: false,
          center: false,
          end: false,
          start: false
        },
        content: [
          {
            id: 1,
            colSize: {
              sm: '12',
              md: '6',
              lg: '6'
            },
            styleClasses: 'pb-5 p-md-5 mt-auto mb-auto',
            title: {
              text:
                '<span class="d-inline-block"><h1 class="text-black float-left">Title </h1><span class="bg-nonomes-gradient float-left badge badge-primary mt-2 ml-2 p-2">29 <br> Dec.</span></span>',
              type: 'html',
              styleClasses: 'text-center text-black'
            },
            subTitle: '',
            body: {
              styleClasses: 'text-center',
              content: `<p class="text-center">
                      Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                      Alias dolorum esse expedita placeat repellendus.
                      Animi asperiores dolor tempore.
                      Adipisci aliquam consequuntur earum id laboriosam minus
                      necessitatibus qui saepe! Dolorum, quia?
                    </p>`,
              type: 'html'
            }
          },
          {
            id: 2,
            colSize: {
              sm: '12',
              md: '6',
              lg: '6'
            },
            styleClasses: 'pb-5 p-md-5 mt-auto mb-auto',
            title: {
              text:
                '<span class="d-inline-block"><h1 class="text-black float-left">Title </h1><span class="bg-nonomes-gradient float-left badge badge-primary mt-2 ml-2 p-2">29 <br> Dec.</span></span>',
              type: 'html',
              styleClasses: 'text-center text-black'
            },
            subTitle: '',
            body: {
              styleClasses: 'text-center',
              content: `<p class="text-center">
                      Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                      Alias dolorum esse expedita placeat repellendus.
                      Animi asperiores dolor tempore.
                      Adipisci aliquam consequuntur earum id laboriosam minus
                      necessitatibus qui saepe! Dolorum, quia?
                    </p>`,
              type: 'html'
            }
          },
          {
            id: 3,
            colSize: {
              sm: '12',
              md: '6',
              lg: '6'
            },
            styleClasses: 'pb-5 p-md-5 mt-auto mb-auto',
            title: {
              text:
                '<span class="d-inline-block"><h1 class="text-black float-left">Title </h1><span class="bg-nonomes-gradient float-left badge badge-primary mt-2 ml-2 p-2">29 <br> Dec.</span></span>',
              type: 'html',
              styleClasses: 'text-center text-black'
            },
            subTitle: '',
            body: {
              styleClasses: 'text-center',
              content: `<p class="text-center">
                      Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                      Alias dolorum esse expedita placeat repellendus.
                      Animi asperiores dolor tempore.
                      Adipisci aliquam consequuntur earum id laboriosam minus
                      necessitatibus qui saepe! Dolorum, quia?
                    </p>`,
              type: 'html'
            }
          },
          {
            id: 4,
            colSize: {
              sm: '12',
              md: '6',
              lg: '6'
            },
            styleClasses: 'pb-5 p-md-5 mt-auto mb-auto',
            title: {
              text:
                '<span class="d-inline-block"><h1 class="text-black float-left">Title </h1><span class="bg-nonomes-gradient float-left badge badge-primary mt-2 ml-2 p-2">29 <br> Dec.</span></span>',
              type: 'html',
              styleClasses: 'text-center text-black'
            },
            subTitle: '',
            body: {
              styleClasses: 'text-center',
              content: `<p class="text-center">
                      Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                      Alias dolorum esse expedita placeat repellendus.
                      Animi asperiores dolor tempore.
                      Adipisci aliquam consequuntur earum id laboriosam minus
                      necessitatibus qui saepe! Dolorum, quia?
                    </p>`,
              type: 'html'
            }
          }
        ],
        show: false,
        animatedOnce: false
      },
      {
        name: 'intro-inschrijvingen',
        type: 'default',
        show: false,
        animatedOnce: false,
        title: {
          styleClasses: 'text-white',
          text: 'Data & Inschrijvingen',
          type: 'plain'
        },
        styleClasses: '',
        preContent: {
          position: {
            around: false,
            between: false,
            center: true,
            end: false,
            start: false
          },
          styleClasses: 'pl-5 pr-5 mb-5 mt-5 text-white',
          colSize: {
            sm: '',
            md: '6',
            lg: ''
          },
          content: `<p>
                Wat leuk dat je geïnteresseerd bent om lid te worden bij
                Studentenvereniging NoNoMes! <br><br>
  
                Wil je van je studentenleven een tijd maken om nooit meer te vergeten?
                Vul dan onderstaand formulier in. <br><br>
                Wil je daarnaast voor je inschrijving alvast een kijkje nemen bij NoNoMes?
                Dat kan! Volg onze Facebook en Instagram om in de gaten te houden
                wanneer onze open feesten zijn. Daarnaast ben je van harte welkom
                tijdens onze introfeesten van 22 augustus t/m 7 september 2018!
              </p>`
        },
        contentPosition: {
          around: false,
          between: false,
          center: true,
          end: false,
          start: false
        },
        content: [
          {
            id: 1,
            colSize: {
              sm: '12',
              md: '6',
              lg: ''
            },
            styleClasses: 'pl-5 pr-5 mb-5',
            title: {
              text: 'KMT',
              type: 'plain',
              styleClasses: 'text-center'
            },
            subTitle: '',
            body: {
              styleClasses: 'text-center text-white',
              content: `<p>
                      Lorem ipsum dolor sit amet, consectetur adipisic
                    </p>
  
                    <p class="text-white">
                      Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                      Alias dolorum esse expedita placeat repellendus.
                      Animi asperiores dolor tempore.
                      Adipisci aliquam consequuntur earum id laboriosam minus
                      necessitatibus qui saepe! Dolorum, quia?
                    </p>`,
              type: 'html'
            }
          }
        ]
      },
      {
        name: 'intro-gallery',
        show: false,
        animatedOnce: false,
        type: 'custom',
        component: 'Gallery'
      },
      {
        name: 'intro-contact',
        type: 'custom',
        component: 'Contact',
        show: false,
        animatedOnce: false,
        objectsToAnimate: {
          form: {
            show: false,
            animatedOnce: false
          },
          map: {
            show: false,
            animatedOnce: false
          },
          locationIcon: {
            show: false,
            animatedOnce: false
          },
          phoneIcon: {
            show: false,
            animatedOnce: false
          },
          emailIcon: {
            show: false,
            animatedOnce: false
          }
        }
      },
      {
        name: 'intro-more',
        show: false,
        animatedOnce: false
      }
    ],
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

  animationProperties: state => state.animations
}

export const mutations = {
  toggleLoading(state, option) {
    state.loading = option
    state.loaded = !option
  },

  setPageActive(state) {},

  animateSection(state, { getters, sectionName }) {
    const section = getters.sectionFindByName(sectionName)
    section.show = true

    if (!section.animatedOnce) section.animatedOnce = true
  },

  toggleShowObjectInSection(
    state,
    { getters, sectionName, object, toggleVal }
  ) {
    const section = getters.sectionFindByName(sectionName)
    section.objectsToAnimate[object].show = toggleVal

    if (!section.objectsToAnimate[object].animatedOnce)
      section.objectsToAnimate[object].animatedOnce = true
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

    if (
      getters.sectionFindByName(sectionName).objectsToAnimate !== undefined &&
      getters.sectionFindByName(sectionName).objectsToAnimate !== ''
    ) {
      dispatch('reAnimateObjects', sectionName)
    }
  },

  reAnimateObjects({ commit, getters }, sectionName) {
    const objectsInSection = getters.sectionFindByName(sectionName)
      .objectsToAnimate

    Object.keys(objectsInSection).forEach(object => {
      commit('toggleShowObjectInSection', {
        getters,
        sectionName,
        object,
        toggleVal: false
      })
      setTimeout(
        () =>
          commit('toggleShowObjectInSection', {
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
