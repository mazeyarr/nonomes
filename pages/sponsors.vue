<template>
  <main id="sponsors-page">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection id="sponsors-section">
        <mdb-row center class="mt-5 mt-md-0">
          <mdb-col md="6" class="p-3">
            <article>
              <h2 class="text-black">
                Bedrijven
              </h2>
              <div v-html="introText.content" />
            </article>
          </mdb-col>
        </mdb-row>
        <mdb-row class="p-5">
          <mdb-col
            v-for="sponsor in sponsors"
            :key="sponsor.id"
            md="3"
          >
            <transition name="page-intro-zoom">
              <figure v-show="sponsor.show">
                <mdb-view
                  class="z-depth-1 sponsor-view p-3"
                  :src="sponsor.imgSrc"
                  :alt="sponsor.alt"
                  hover
                  shadow
                  zoom
                  cascade
                >
                  <a>
                    <mdb-mask overlay="dark-slight" waves flexCenter />
                  </a>
                </mdb-view>
              </figure>
            </transition>
          </mdb-col>
        </mdb-row>
      </PageSection>
    </mdb-container>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageSection from '@/components/PageSection'
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask } from 'mdbvue'

export default {
  name: 'Sponsors',
  components: {
    PageSection,
    NavBar,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask
  },
  head() {
    return {
      title: 'Sponsors',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Studentenvereniging NoNoMes kan op veel verschillende manieren iets voor uw bedrijf betekenen: van adverteren op onze website tot deelname aan een bedrijvendiner. Er zijn erg veel mogelijkheden!\nNoNoMes telt rond de 300 actieve leden en heeft een groot reünistenbestand.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `overstappen.nl, bankr, sponsors, studeren, studeersnel.nl, sponsors nonomes, sponsor worden`
        }
      ]
    }
  },
  data() {
    return {
      animationDelay: 400,
      introText: {
        type: 'html',
        content: `<p>Studentenvereniging NoNoMes kan op veel verschillende manieren iets voor uw bedrijf betekenen: van adverteren op onze website tot deelname aan een bedrijvendiner. Er zijn erg veel mogelijkheden!
NoNoMes telt rond de 300 actieve leden en heeft een groot reünistenbestand.<br><br>
Al deze diverse leden zorgen voor een leuke mix van verschillende persoonlijkheden, interesses, hobby’s en studies. Echter kunnen onze leden elkaar juist ook vinden in gemeenschappelijke kenmerken, zoals een opleiding, motivatie voor het maken van carrière, een groot sociaal netwerk en ontwikkelingen op organisatorisch vlak door bestuurlijke activiteiten binnen de vereniging te bekleden. <br><br> Onze studenten zijn gedreven en goed voorbereid op de maatschappij. Hierdoor vormen zij een interessante doelgroep voor bedrijven. <br> <br>
Mocht u interesse hebben in een samenwerking met onze studentenvereniging of meer over de diverse mogelijkheden te weten wil komen, kunt u hier onze sponsorbrochure downloaden of u kunt contact opnemen met onze Quaestor, Mila Kroon, via onderstaande contactgegevens:<p>
<p>PR NoNoMes</p>
<p>Warmoesstraat 119-1</p>
<p>1012JA Amsterdam</p>
<p>T: 020 – 627 30 67</p>
<p>M: 06 – 15592086</p>
<p>E: extern@nonomes.nl</p>
`
      },
      sponsors: [
        {
          id: 1,
          name: 'Bankr',
          imgSrc: '/images/sponsors/sponsor-1.png',
          alt: 'Bankr',
          show: false
        },
        {
          id: 2,
          name: 'Studeersnel',
          imgSrc: '/images/sponsors/sponsor-2.png',
          alt: 'Studeersnel',
          show: false
        },
        {
          id: 3,
          name: 'EasySwitch',
          imgSrc: '/images/sponsors/sponsor-3.png',
          alt: 'EasySwitch',
          show: false
        },
        {
          id: 4,
          name: 'Overstappen',
          imgSrc: '/images/sponsors/sponsor-4.png',
          alt: 'Overstappen',
          show: false
        }
      ]
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate: function() {
      for (const index in this.sponsors) {
        setTimeout(() => {
          this.sponsors[index].show = true
        }, this.animationDelay)
        this.animationDelay += 200
      }
    }
  }
}
</script>

<style>
.sponsor-view {
  height: 200px;
  max-height: 200px;
}
.sponsor-view > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
