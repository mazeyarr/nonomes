<template>
  <div id="loader">
    <div v-if="loading" id="overlay" class="w-100 h-100 position-absolute" />
    <transition name="page-intro-zoom">
      <div v-if="loading" id="brand-container" class="middle">
        <figure class="zoom">
          <img id="brand" class="w-100" src="@/static/images/nonomes_wapen.png" alt="Logo">
        </figure>
        <div class="text-center">
          <mdb-spinner big color="green" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mdbSpinner } from 'mdbvue'
export default {
  name: 'Loader',
  components: {
    mdbSpinner
  },
  computed: {
    ...mapGetters({
      loading: 'core/GET_LOADING'
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 800)
    })
  },
  methods: {
    start() {
      this.$store.commit('core/SET_LOADING', true)
    },
    finish() {
      this.$store.commit('core/SET_LOADING', false)
    }
  }
}
</script>

<style scoped>
.middle {
  position: fixed;
  top: 50%;
  left: 50%;
}
#brand-container {
  width: 500px;
  height: 500px;
  transform: translate(-50%, -50%);
  z-index: 201;
}
#overlay {
  position: fixed;
  background: white;
  opacity: 1;
  z-index: 200;
}
</style>
