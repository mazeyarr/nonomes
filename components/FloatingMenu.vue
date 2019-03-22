<template>
  <div v-if="pageLoaded">
    <mdb-btn
      id="floating-btn-main"
      class="bg-nonomes-gradient"
      tag="a"
      floating
      size="lg"
      @click="open = !open"
    >
      <mdb-icon icon="plus" />
    </mdb-btn>

    <transition-group name="pages-intro-zoom" tag="div" css class="floating-transition-layout">
      <mdb-tooltip
        v-for="(menuOption, index) in reorderMenuOptions"
        v-show="open"
        :key="menuOption.id"
        :options="{placement: 'left'}"
      >
        <span slot="tip">{{ menuOption.name }}</span>
        <mdb-btn
          slot="reference"
          :style="`bottom: ${getOptionPosition(index)}em`"
          class="floating-btn-options"
          tag="a"
          gradient="peach"
          floating
          size="sm"
        >
          <mdb-icon :icon="menuOption.icon" />
        </mdb-btn>
      </mdb-tooltip>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mdbBtn, mdbIcon, mdbTooltip } from 'mdbvue'

export default {
  name: 'FloatingMenu',
  animationDelay: 250,
  components: { mdbBtn, mdbIcon, mdbTooltip },
  data() {
    return {
      open: false,
      menuOptions: [
        {
          id: 1,
          name: 'Leden login',
          icon: 'sign-in-alt',
          order: 1
        },
        {
          id: 2,
          name: 'Scroll naar begin',
          icon: 'arrow-up',
          order: 2
        }
      ]
    }
  },
  computed: {
    reorderMenuOptions: function() {
      function compare(a, b) {
        if (a.order < b.order) return -1
        if (a.order > b.order) return 1
        return 0
      }

      return this.menuOptions.slice().sort(compare)
    },
    optionLength: function() {
      return this.menuOptions.length
    },
    ...mapGetters({
      pageLoaded: 'pages/loaded'
    })
  },
  methods: {
    getOptionPosition: function(index) {
      const positions = []
      const posistionIncreaser = 3.5

      for (let i = 0; i < this.optionLength; i++) {
        if (i === 0) {
          positions[i] = 6
          continue
        }

        positions[i] = positions[i - 1] + posistionIncreaser
      }
      return positions[index]
    }
  }
}
</script>

<style scoped>
#floating-btn-main {
  position: fixed;
  bottom: 0.5em;
  right: 0.5em;
  z-index: 2000;
  -webkit-animation: spin-in 0.2s;
  -moz-animation: spin-in 0.2s;
  animation: spin-in 0.2s;
}

#floating-btn-main:hover {
  -webkit-animation: spin 0.2s linear;
  -moz-animation: spin 0.2s linear;
  animation: spin 0.2s linear;
  animation-fill-mode: forwards;
}

.floating-btn-options {
  position: fixed;
  right: 1.5em;
  z-index: 2000;
}
.floating-transition-layout {
  position: fixed;
  right: 1.5em;
  z-index: 2000;
  width: 100%;
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes spin-in {
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

/* Zoom into page */
.pages-intro-zoom-enter-active {
  transition: all 0.5s ease;
}

.pages-intro-zoom-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.pages-intro-zoom-enter, .pages-intro-zoom-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale(0.5);
  opacity: 0;
}
</style>
