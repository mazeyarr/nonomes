<template>
  <mdb-container fluid class="p-0">
    <nav-bar-mobile v-if="isMobile" class="m-0" />
    <mdb-navbar
      v-if="!isMobile"
      id="navbar"
      :class="classProp"
      class="flex-nowrap"
      dark
      center
      transparent
      animated
      hamburger
    >
      <mdb-navbar-toggler
        id="nav_collapse"
        class="w-100 justify-content-center"
      >
        <mdb-navbar-nav right>
          <mdb-nav-item
            anchor-class="white-text"
            to="/"
            :class="activeRoute === '/' ? 'active' : ''"
          >
            Home
          </mdb-nav-item>

          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle
              slot="toggle"
              tag="a"
              nav-link
              waves-fixed
              class="text-white"
            >
              Vereniging
            </mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <nuxt-link class="dropdown-item" to="/over/nonomes/senaat">
                De Senaat
              </nuxt-link>

              <nuxt-link class="dropdown-item" to="/over/nonomes/disputen">
                De Disputen
              </nuxt-link>

              <nuxt-link class="dropdown-item" to="/over/nonomes/reunisten">
                Reunisten
              </nuxt-link>

              <nuxt-link class="dropdown-item" to="/over/nonomes/maatschappelijk">
                Maatschappelijk
              </nuxt-link>

              <nuxt-link class="dropdown-item" to="/over/nonomes/privacybeleid">
                Privacybeleid
              </nuxt-link>
            </mdb-dropdown-menu>
          </mdb-dropdown>
          <mdb-nav-item anchor-class="white-text" to="/gallerij">
            Foto's
          </mdb-nav-item>

          <GuestModalTrigger type="in-case">
            <mdb-nav-item anchor-class="white-text">
              Word lid!
            </mdb-nav-item>
          </GuestModalTrigger>
        </mdb-navbar-nav>
        <nuxt-link to="/" class="brand-image-link d-none d-sm-block">
          <img id="brand" src="@/static/images/nonomes_wapen.png" alt="Logo">
        </nuxt-link>
        <mdb-navbar-nav left>
          <mdb-nav-item
            anchor-class="white-text"
            to="/over/nonomes/Q&A"
            :class="activeRoute === '/over/nonomes/Q&A' ? 'active' : ''"
          >
            Q&A
          </mdb-nav-item>

          <mdb-nav-item
            anchor-class="white-text"
            to="/sponsors"
            :class="activeRoute === '/sponsors' ? 'active' : ''"
          >
            Sponsors
          </mdb-nav-item>

          <mdb-nav-item
            anchor-class="white-text"
            to="/over/nonomes/bedrijven"
            :class="activeRoute === '/over/nonomes/bedrijven' ? 'active' : ''"
          >
            Bedrijven
          </mdb-nav-item>

          <mdb-nav-item
            anchor-class="white-text"
            to="/contact"
            :class="activeRoute === '/contact' ? 'active' : ''"
          >
            Contact
          </mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </mdb-container>
</template>

<script>
import NavBarMobile from '@/components/NavBarMobile.vue'
import GuestModalTrigger from '@/components/modals/GuestModal/Trigger.vue'

import {
  mdbNavbar,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbContainer
} from 'mdbvue'

export default {
  name: 'NavBar',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    NavBarMobile,
    GuestModalTrigger
  },
  props: {
    classProp: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    isMobile: function() {
      // TODO: Functie dynamisch gebruiker
      if (this.window.width < 1050) {
        return true
      }
      return false
      // return (
      //   typeof window.orientation !== 'undefined' ||
      //   navigator.userAgent.indexOf('IEMobile') !== -1
      // )
    },
    activeRoute() {
      return this.$route.path
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  }
}
</script>

<style scoped>
.navbar {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.nav-item {
  min-width: 100px;
  text-align: center;
}
#navbar {
  z-index: 10;
  width: 100%;
}
#brand {
  height: 200px;
}
</style>
