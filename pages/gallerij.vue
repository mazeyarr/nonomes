<template>
  <main id="contact-page">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection id="gallery-section">
        <Gallery class="mt-4" />
      </PageSection>
      <PageSection id="contact-section" class="odd mt-4">
        <Contact section-name="intro-contact" text-color="white" />
      </PageSection>
    </mdb-container>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from '@/components/NavBar'
import PageSection from '@/components/PageSection'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import { mdbContainer } from 'mdbvue'

export default {
  name: 'Gallerij',
  head() {
    return {
      title: 'Gallerij',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `De leukste studententijd vind je bij NoNoMes, bekijk de leukste foto's!`
        }
      ]
    }
  },
  components: { PageSection, NavBar, mdbContainer, Gallery, Contact },
  mounted() {
    this.reAnimateObjects('intro-contact')
  },
  methods: {
    ...mapActions({
      reAnimateObjects: 'pages/reAnimateObjects'
    })
  }
}
</script>

<style scoped>
</style>
