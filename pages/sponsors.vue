<template>
  <main id="sponsors-page">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection id="sponsors-section">
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
  data() {
    return {
      animationDelay: 400,
      sponsors: [
        {
          id: 1,
          name: 'Bavaria',
          imgSrc: 'http://nonomes.nl/media/1152/bankr-logo.png',
          alt: 'Sample',
          show: false
        },
        {
          id: 2,
          name: 'Bavaria',
          imgSrc:
            'http://nonomes.nl/media/1022/studeersnel.png?width=270&height=52',
          alt: 'Sample',
          show: false
        },
        {
          id: 3,
          name: 'Bavaria',
          imgSrc:
            'http://nonomes.nl/media/1058/easyswitch.png?width=225&height=95',
          alt: 'Sample',
          show: false
        },
        {
          id: 4,
          name: 'Bavaria',
          imgSrc:
            'http://nonomes.nl/media/1059/overstappen-logo.png?width=177&height=99',
          alt: 'Sample',
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
