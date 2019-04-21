<template>
  <mdb-navbar
    id="navbar"
    class="p-3 pr-4 position-fixed bg-nonomes-blue"
    :style="opacity !== 0 ? `opacity: ${opacity};` : `opacity: 0.2;`"
    dark
  >
    <!-- Navbar brand -->
    <mdb-navbar-brand class="text-white" center>
      <nuxt-link to="/">
        <figure class="m-0">
          <img
            src="@/static/images/nonomes_wapen.png"
            alt="thumbnail"
            class="img-fluid brand position-fixed"
            style="width: 100px"
          >
        </figure>
      </nuxt-link>
    </mdb-navbar-brand>
    <h3 class="navbar-text text-white pl-5">
      NoNoMes
    </h3>
    <mdb-navbar-toggler class="text-white">
      <mdb-navbar-nav center vertical>
        <mdb-nav-item
          anchor-class="white-text"
          to="/"
          :class="activeRoute('/')"
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
            <nuxt-link class="dropdown-item" to="/over">
              NoNoMes
            </nuxt-link>

            <nuxt-link class="dropdown-item" to="/over/nonomes/senaat">
              De Senaat
            </nuxt-link>

            <nuxt-link class="dropdown-item" to="/over/nonomes/disputen">
              De Disputen
            </nuxt-link>

            <nuxt-link class="dropdown-item" to="/over/nonomes/1/reunisten">
              Reunisten
            </nuxt-link>

            <!--<nuxt-link class="dropdown-item" to="/over/nonomes/2/maatschappelijk">-->
            <!--Maatschappelijk-->
            <!--</nuxt-link>-->

            <nuxt-link class="dropdown-item" to="/over/nonomes/3/privacybeleid">
              Privacybeleid
            </nuxt-link>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item anchor-class="white-text" to="/gallerij">
          Foto's
        </mdb-nav-item>

        <GuestModalTrigger :modal-id="2" type="in-case">
          <mdb-nav-item anchor-class="white-text">
            Word lid!
          </mdb-nav-item>
        </GuestModalTrigger>

        <mdb-nav-item
          anchor-class="white-text"
          to="/over/nonomes/4/Q&A"
          :class="activeRoute('/over/nonomes/Q&A')"
        >
          Q&A
        </mdb-nav-item>

        <mdb-nav-item
          anchor-class="white-text"
          to="/over/nonomes/disputen"
          :class="activeRoute === '/over/nonomes/disputen' ? 'active' : ''"
        >
          Disputen
        </mdb-nav-item>

        <mdb-nav-item
          anchor-class="white-text"
          to="/sponsors"
          :class="activeRoute('/sponsors')"
        >
          Sponsors
        </mdb-nav-item>

        <mdb-nav-item
          anchor-class="white-text"
          to="/contact"
          :class="activeRoute('/contact')"
        >
          Contact
        </mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavItem,
  mdbNavbarBrand,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle
} from 'mdbvue'
import ModalTrigger from '@/components/modals/Standard/Trigger.vue'

export default {
  name: 'NavBarMobile',
  components: {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavItem,
    mdbNavbarBrand,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    GuestModalTrigger: ModalTrigger
  },
  data() {
    return {
      documentInitHeight: 0,
      opacity: 0
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.documentInitHeight = document.body.offsetHeight
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const calculatePositionOnPage =
        window.pageYOffset /
        (this.documentInitHeight / this.documentInitHeight + 300)
      this.opacity = calculatePositionOnPage < 1 ? calculatePositionOnPage : 1
    },
    activeRoute(checkPath) {
      return this.$route.path === checkPath ? 'active' : ''
    }
  }
}
</script>

<style scoped>
.brand {
  top: 5px;
  left: -10px;
}

.togglerMobile {
  color: red !important;
  background-color: red !important;
}
</style>
