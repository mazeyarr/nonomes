<template>
  <div>
    <FloatingMenu />
    <nuxt />
    <GuestModal />
  </div>
</template>

<script>
import GuestModal from '@/components/modals/GuestModal/GuestModal.vue'
import FloatingMenu from '@/components/FloatingMenu.vue'
export default {
  components: {
    GuestModal,
    FloatingMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oxygen');

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

* {
  font-family: 'Oxygen', sans-serif;
}
h1 {
  color: white;
}
h2 {
  color: white;
}
.pl-15 {
  padding-left: 15rem !important;
}
.pr-15 {
  padding-right: 15rem !important;
}
.text-white {
  color: white;
}
.text-black {
  color: #0d163d;
}

.text-green {
  color: #007e33;
}

.text-grey {
  color: #3e4551;
}

.text-blue {
  color: #0d47a1;
}

.min-w-100 {
  min-width: 100px;
}
.min-w-150 {
  min-width: 150px;
}
.min-w-200 {
  min-width: 200px;
}

.min-h-100 {
  min-height: 100px;
}
.min-h-150 {
  min-height: 150px;
}
.min-h-200 {
  min-height: 200px;
}

.min-h-300 {
  min-height: 300px;
}
.min-h-400 {
  min-height: 400px;
}
.min-h-500 {
  min-height: 500px;
}
.min-h-550 {
  min-height: 550px;
}
.min-h-600 {
  min-height: 600px;
}

.bg-nonomes-blue {
  background: #0e1755 0 0;
}

.brand-color {
  color: #0e1755 !important;
}

.bg-nonomes-gradient {
  background-position: 0 0;
  background: #979a9b;
  background: -moz-linear-gradient(
    to right bottom,
    #979a9b 0%,
    #979a9b 50%,
    #3bb56a 50%,
    #3bb56a 70%,
    #3bb56a 100%
  );
  background: -webkit-linear-gradient(
    to right bottom,
    #979a9b 0%,
    #979a9b 50%,
    #3bb56a 50%,
    #3bb56a 70%,
    #3bb56a 100%
  );
  background: -o-linear-gradient(
    to right bottom,
    #979a9b 0%,
    #979a9b 50%,
    #3bb56a 50%,
    #3bb56a 70%,
    #3bb56a 100%
  );
  background: -ms-linear-gradient(
    to right bottom,
    #979a9b 0%,
    #979a9b 50%,
    #3bb56a 50%,
    #3bb56a 70%,
    #3bb56a 100%
  );
  background: linear-gradient(
    to right bottom,
    #979a9b 0%,
    #979a9b 50%,
    #3bb56a 50%,
    #3bb56a 70%,
    #3bb56a 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#979a9b',
      endColorstr='#3bb56a',
      GradientType=1
    );
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: scale3d(1.2, 1.2, 1.2);
}

/* Slide in from top */
.page-intro-slide-top-enter-active {
  transition: all 1s ease;
}

.page-intro-slide-top-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-intro-slide-top-enter, .page-intro-slide-top-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}

/* Slide in from Left */
.page-intro-slide-left-enter-active {
  transition: all 1s ease;
}

.page-intro-slide-left-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-intro-slide-left-enter, .page-intro-slide-left-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}

/* Slide in from Right */
.page-intro-slide-right-enter-active {
  transition: all 1s ease;
}

.page-intro-slide-right-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-intro-slide-right-enter, .page-intro-slide-right-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}

/* Slide in from Bottom */
.page-intro-slide-bottom-enter-active {
  transition: all 1s ease;
}

.page-intro-slide-bottom-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-intro-slide-bottom-enter, .page-intro-slide-bottom-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translatey(-100px);
  opacity: 0;
}

/* Zoom into page */
.page-intro-zoom-enter-active {
  transition: all 0.5s ease;
}

.page-intro-zoom-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-intro-zoom-enter, .page-intro-zoom-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale(0.2);
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
