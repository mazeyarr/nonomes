<template>
  <main id="contact-page">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection id="contact-section pt-5">
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
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `T: 020 – 627 30 67 - M: 06 – 15592086 - E: extern@nonomes.nl - PR NoNoMes Warmoesstraat 119-1, 1012JA Amsterdam`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `contact, emailadres, telefoonnummer, locatie nonomes, nonomes contact, studentenvereniging contact`
        }
      ]
    }
  },
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
