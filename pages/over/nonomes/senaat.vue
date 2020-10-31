<template>
  <main id="about-senaat">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection id="main-section">
        <mdb-row center class="p-5">
          <mdb-col>
            <mdb-row>
              <mdb-col>
                <hr>
              </mdb-col>
            </mdb-row>

            <mdb-row class="mt-5">
              <mdb-col>
                <mdb-card class="min-h-400">
                  <mdb-card-body>
                    <div class="form-header green accent-4">
                      <h3 class="mt-2">
                        Vereniging
                      </h3>
                    </div>

                    <p class="dark-grey-text">
                      <strong><i>P</i></strong> raeses
                    </p>
                    <p>
                      <mdb-icon icon="chess-king" class="text-green" /> W.J. Wijte
                    </p>
                    <a href="mailto:Praeses@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> Praeses@nonomes.nl
                    </a>
                    <hr>

                    <p class="dark-grey-text">
                      <strong><i>V</i></strong> ice Praeses
                    </p>
                    <p>
                      <mdb-icon icon="chess-king" class="text-green" /> E.A. Smits
                    </p>
                    <a href="mailto:Praeses@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> Praeses@nonomes.nl
                    </a>
                    <hr>

                    <p class="dark-grey-text">
                      <strong><i>Ab</i></strong> Actis
                    </p>
                    <p>
                      <mdb-icon icon="at" class="text-green" /> C.J.T. Baart
                    </p>
                    <a href="mailto:Info@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> Info@nonomes.nl
                    </a>

                    <hr>

                    <p class="dark-grey-text">
                      <strong><i>Q</i></strong>uaestor
                    </p>
                    <p>
                      <mdb-icon icon="coins" class="text-green" /> D.E.T. Esajas
                    </p>
                    <a href="mailto:Quaestor@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> Quaestor@nonomes.nl
                    </a>
                    <hr>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-col>

          <mdb-col>
            <mdb-row>
              <mdb-col>
                <h2 class="text-black text-center">
                  Senaat Wijte
                </h2>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mdb-lightbox pt-5">
              <mdb-col @click.native="show(0)">
                <figure>
                  <img :src="imgs" class="img-fluid" alt="">
                </figure>
              </mdb-col>
            </mdb-row>
          </mdb-col>

          <mdb-col>
            <mdb-row>
              <mdb-col>
                <hr>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mt-5">
              <mdb-col>
                <mdb-card class="min-h-400">
                  <mdb-card-body>
                    <div class="form-header form-header grey">
                      <h3 class="mt-2">
                        Directie
                      </h3>
                    </div>
                    <p class="dark-grey-text">
                      <strong><i>V</i></strong>oorzitter
                    </p>
                    <p>
                      <mdb-icon icon="user-tie" class="text-green" /> R.Y. Heeneman
                    </p>
                    <a href="mailto:voorzitter@deheiligezeug.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> voorzitter@deheiligezeug.nl
                    </a>
                    <hr>

                    <p class="dark-grey-text">
                      <strong><i>P</i></strong>enning<strong>m</strong>eester
                    </p>
                    <p>
                      <mdb-icon icon="hand-holding-usd" class="text-green" /> I.C. Douma
                    </p>
                    <a href="mailto:penningmeester@deheiligezeug.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> penningmeester@deheiligezeug.nl
                    </a>
                    <hr>

                    <p class="dark-grey-text">
                      <strong><i>A</i></strong>ssessor Sociëteit
                    </p>
                    <p>
                      <mdb-icon icon="newspaper" class="text-green" /> M. van den Bosch
                    </p>
                    <a href="mailto:info@deheiligezeug.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> info@deheiligezeug.nl
                    </a>
                    <hr>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </PageSection>
    </mdb-container>
    <mdb-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageSection from '@/components/PageSection'
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbLightbox,
  mdbCard,
  mdbCardBody,
  mdbIcon
} from 'mdbvue'
export default {
  components: {
    NavBar,
    PageSection,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbLightbox,
    mdbCard,
    mdbCardBody,
    mdbIcon
  },
  head() {
    return {
      title: `Senaat`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Senaat Toorenburg, is het huidige senaat.`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `studentenvereniging amsterdam, lid worden, senaat, nonomes, stichting, organisatie, contact, praeses, questor, ab actis, penningmeester`
        }
      ]
    }
  },
  data() {
    return {
      imgs: ['/images/nonomes-senaat.jpeg'],
      visible: false,
      index: 0
    }
  },
  methods: {
    show(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: #138859;
  padding-left: 10px;
  transition: all 0.2s;
}
p {
  line-height: 1.2rem;
}
</style>
