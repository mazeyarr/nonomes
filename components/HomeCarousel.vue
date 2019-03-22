<template>
  <mdb-carousel full>
    <mdb-carousel-item
      mask="black-light"
      alt="First slide"
      loop
      full
    >
      <video ref="introVideoRef" class="video-fluid" autoplay muted>
        <source src="/videos/promotie_video.mp4" type="video/mp4">
      </video>
      <div class="button-video-controls">
        <mdb-btn tag="button" floating size="sm" @click="videoToggle">
          <transition-group name="page-intro-zoom">
            <mdb-icon v-show="!playing" :key="'play'" icon="play" />
            <mdb-icon v-show="playing" :key="'pause'" icon="pause" />
          </transition-group>
        </mdb-btn>
        <mdb-btn tag="button" floating size="sm" @click="volumeToggle">
          <transition-group name="page-intro-zoom">
            <mdb-icon v-show="volume" :key="'mute'" icon="volume-mute" />
            <mdb-icon v-show="!volume" :key="'unmute'" icon="volume-up" />
          </transition-group>
        </mdb-btn>
      </div>
    </mdb-carousel-item>
  </mdb-carousel>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbBtn, mdbIcon } from 'mdbvue'

export default {
  name: 'HomeCarousel',
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbBtn,
    mdbIcon
  },
  data() {
    return {
      playing: true,
      volume: true
    }
  },
  computed: {
    videoRef: function() {
      return this.$refs.introVideoRef
    }
  },
  methods: {
    videoToggle() {
      this.playing = !this.playing
      if (this.playing) {
        this.videoRef.play()
      } else {
        this.videoRef.pause()
      }
    },
    volumeToggle() {
      this.volume = !this.volume
      this.videoRef.muted = this.volume
    }
  }
}
</script>

<style scoped>
.button-video-controls {
  position: absolute;
  right: 15%;
  bottom: 1%;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}
.button-video-controls > button {
  background: #0e1755 0 0 !important;
}
.video-fluid {
  width: 100%;
}
.carousel {
  height: 100vh !important;
  width: 100% !important;
}
</style>
