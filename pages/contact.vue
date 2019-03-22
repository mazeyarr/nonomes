<template>
  <main id="contact-page">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection id="contact-section">
        <ContactView section-name="intro-contact" text-color="black" />
      </PageSection>
    </mdb-container>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from '@/components/NavBar'
import PageSection from '@/components/PageSection'
import ContactView from '@/components/Contact'
import { mdbContainer } from 'mdbvue'

export default {
  name: 'Contact',
  components: { PageSection, NavBar, mdbContainer, ContactView },
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
