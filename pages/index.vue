<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="home">
    <NavBar class-prop="position-absolute" />
    <mdb-container fluid>
      <mdb-row>
        <HomeCarousel v-show="!device.isSmall" />
        <mdb-col v-show="device.isSmall" class="mt-5 pt-5">
          <figure><img class="img-fluid" src="/images/nonomes_wapen.png"></figure>
        </mdb-col>
      </mdb-row>

      <intersect @enter="animateSection('intro-over')">
        <page-section
          id="intro-about"
          class="even"
        >
          <transition name="page-intro-slide-left">
            <SectionContent
              v-show="sectionFindByName('intro-over').show"
              section-name="intro-over"
              slot-first
            >
              <!--              <GuestModalTrigger :modal-id="2" class="mb-5 mb-md-0" type="button" color="success">-->
              <!--                Word Lid!-->
              <!--              </GuestModalTrigger>-->

              <video v-show="device.isSmall" class="video-fluid" autoplay muted controls>
                <source src="/videos/promotie_video.mp4" type="video/mp4">
              </video>
            </SectionContent>
          </transition>
        </page-section>
      </intersect>

      <intersect @enter="animateSection('intro-disputen')">
        <page-section id="intro-disputen" class="odd">
          <transition name="page-intro-slide-right">
            <SectionContent
              v-show="sectionFindByName('intro-disputen').show"
              section-name="intro-disputen"
            />
          </transition>
        </page-section>
      </intersect>

      <intersect @enter="animateSection('intro-agenda')">
        <page-section
          id="intro-agenda"
          class="even pb-5"
        >
          <transition name="page-intro-slide-top">
            <!--            <SectionContent-->
            <!--              v-show="sectionFindByName('intro-agenda').show"-->
            <!--              section-name="intro-agenda"-->
            <!--            />-->
            <div class="d-flex justify-content-center align-items-center h-100">
              <mdb-row>
                <mdb-col col="12">
                  <h4 class="text-black text-center">
                    ⚠️ Hou onze social media in de gaten! ⚠️
                  </h4>
                </mdb-col>
                <mdb-col col="12">
                  <mdb-row class="justify-content-center">
                    <mdb-col col="1" class="text-center">
                      <a href="https://www.instagram.com/svaa_nonomes/" target="_blank">
                        <mdb-icon fab icon="instagram" size="3x" class="indigo-text pointer" />
                      </a>
                    </mdb-col>
                    <mdb-col col="1" class="text-center">
                      <a href="https://www.facebook.com/svaa.nonomes" target="_blank">
                        <mdb-icon fab icon="facebook" size="3x" class="facebook-text pointer" />
                      </a>
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
              </mdb-row>
            </div>
          </transition>
        </page-section>
      </intersect>

      <intersect @enter="animateSection('intro-inschrijvingen')">
        <page-section
          id="intro-inschrijvingen"
          class="bg-nonomes-blue"
        >
          <transition name="page-intro-zoom">
            <SectionContent
              v-show="sectionFindByName('intro-inschrijvingen').show"
              section-name="intro-inschrijvingen"
              slot-first
            >
              <template v-slot:footer>
                <mdb-row class="mb-5 w-100" center>
                  <mdb-col col="6">
                    <GuestModalTrigger :modal-id="2" type="button" block color="success">
                      Ik wil me inschrijven !
                    </GuestModalTrigger>
                  </mdb-col>
                </mdb-row>
              </template>
            </SectionContent>
          </transition>
        </page-section>
      </intersect>

      <intersect @enter="animateSection('intro-gallery')">
        <page-section id="intro-gallery">
          <transition name="page-intro-slide-right">
            <SectionContent
              v-show="sectionFindByName('intro-gallery').show"
              section-name="intro-gallery"
            />
          </transition>
        </page-section>
      </intersect>

      <intersect @enter="animateSection('intro-contact')">
        <page-section
          id="intro-contact"
          class="odd"
        >
          <transition name="page-intro-slide-top">
            <SectionContent
              v-show="sectionFindByName('intro-contact').show"
              section-name="intro-contact"
            />
          </transition>
        </page-section>
      </intersect>

      <page-section
        id="intro-sponsors"
      >
        <SponsorsComponent />
      </page-section>
    </mdb-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavBar from '@/components/NavBar'
import HomeCarousel from '@/components/HomeCarousel.vue'
import PageSection from '@/components/PageSection.vue'
import SectionContent from '@/components/SectionContent.vue'
import Intersect from 'vue-intersect'
import GuestModalTrigger from '@/components/modals/Standard/Trigger.vue'
import SponsorsComponent from '@/components/Sponsors.vue'

import { mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue'

export default {
  components: {
    NavBar,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    HomeCarousel,
    'page-section': PageSection,
    SectionContent,
    Intersect,
    // eslint-disable-next-line vue/no-unused-components
    GuestModalTrigger,
    SponsorsComponent
  },
  computed: {
    ...mapGetters({
      device: 'core/getDevice',
      sectionFindByName: 'pages/sectionFindByName'
    })
  },
  mounted() {
    if (this.device.isSmall)
      this.$store.dispatch('pages/animateSection', 'intro-over')
  },
  head() {
    // TODO: make meta tag
    return {
      script: [{ src: '/head.js' }],
      title: 'Home',
      meta: [
        {
          hid: 'og:title',
          name: 'S.V.A.A. NoNoMes',
          content: `S.V.A.A. NoNoMes is een bruisende studentenvereniging met haar sociëteit in hartje Amsterdam, Jaarlijks organiseert NoNoMes de leukste activiteiten!`
        },
        {
          hid: 'description',
          name: 'description',
          content: `S.V.A.A. NoNoMes is een bruisende studentenvereniging met haar sociëteit in hartje Amsterdam, Jaarlijks organiseert NoNoMes de leukste activiteiten!`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `studentenvereniging amsterdam, nonomes, uit in amsterdam vandaag, lidmaatschap, nonomes amsterdam, studentenvereniging engels, studie, kamers amsterdam, hockeyvereniging, hockey amsterdam`
        },
        {
          hid: 'subject',
          name: 'subject',
          content: `Studentenvereniging Amsterdam`
        },
        {
          hid: 'copyright',
          name: 'copyright',
          content: `Mazeyar Rezaei`
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      animateSection: 'pages/animateSection'
    })
  }
}
</script>

<style>
.facebook-text {
  color: #0172e7;
}

.pointer {
  cursor: pointer;
}
</style>
