<template>
  <mdb-navbar id="navbar" class="p-3 pr-4 position-fixed bg-nonomes-blue" dark>
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
        <mdb-nav-item anchor-class="white-text" to="/over">
          Foto's
        </mdb-nav-item>

        <mdb-nav-item anchor-class="white-text">
          Word lid!
        </mdb-nav-item>

        <mdb-nav-item
          anchor-class="white-text"
          to="/over/nonomes/Q&A"
          :class="activeRoute('/over/nonomes/Q&A')"
        >
          Q&A
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
          to="/over/nonomes/bedrijven"
          :class="activeRoute('')"
        >
          Bedrijven
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
    mdbDropdownToggle
  },
  methods: {
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
