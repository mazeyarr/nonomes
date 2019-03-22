<template>
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
              <GuestModalTrigger class="mb-5 mb-md-0" type="button" color="success">
                Word Lid!
              </GuestModalTrigger>

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
            <SectionContent
              v-show="sectionFindByName('intro-agenda').show"
              section-name="intro-agenda"
            />
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
                <mdb-row class="mb-5" center>
                  <mdb-col col="6">
                    <GuestModalTrigger type="button" block color="success">
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
            <Gallery
              v-show="sectionFindByName('intro-gallery').show"
              class="mb-5 mt-5"
            />
          </transition>
        </page-section>
      </intersect>

      <intersect @enter="animateSection('intro-contact')">
        <page-section
          id="intro-contact"
          class="odd"
        >
          <transition name="page-intro-zoom">
            <Contact
              v-show="sectionFindByName('intro-contact').show"
              section-name="intro-contact"
              text-color="white"
              class="pb-5 pt-5"
            />
          </transition>
        </page-section>
      </intersect>
    </mdb-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavBar from '@/components/NavBar'
import HomeCarousel from '@/components/HomeCarousel.vue'
import Contact from '@/components/Contact.vue'
import PageSection from '@/components/PageSection.vue'
import SectionContent from '@/components/SectionContent.vue'
import Gallery from '@/components/Gallery.vue'
import Intersect from 'vue-intersect'
import GuestModalTrigger from '@/components/modals/GuestModal/Trigger.vue'

import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'

export default {
  components: {
    NavBar,
    mdbContainer,
    mdbRow,
    mdbCol,
    HomeCarousel,
    'page-section': PageSection,
    SectionContent,
    Contact,
    Gallery,
    Intersect,
    GuestModalTrigger
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
  methods: {
    ...mapActions({
      animateSection: 'pages/animateSection'
    })
  }
}
</script>
