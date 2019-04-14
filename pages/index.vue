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
              <GuestModalTrigger :modal-id="1" class="mb-5 mb-md-0" type="button" color="success">
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
                <mdb-row class="mb-5 w-100" center>
                  <mdb-col col="6">
                    <GuestModalTrigger :modal-id="1" type="button" block color="success">
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
import GuestModalTrigger from '@/components/modals/Default/Trigger.vue'

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
  head() {
    return {
      title: 'S.V.A.A. NoNoMes',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: `S.V.A.A. Nomen Non Magnum Est, kortweg NoNoMes, is een bruisende studentengezelligheidsvereniging met meer dan 300 actieve leden. Haar sociëteit is gevestigd in hartje Amsterdam op een steenworp afstand van de Dam. NoNoMes wordt gekenmerkt door haar jonge en groeiende karakter. Ieder jaar worden er verschillende activiteiten georganiseerd, waarbij de wekelijkse borrel op dinsdag centraal staat`
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
