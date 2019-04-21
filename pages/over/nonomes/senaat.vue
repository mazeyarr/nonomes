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
                        <mdb-icon icon="at" />
                        Vereniging
                      </h3>
                    </div>

                    <p class="dark-grey-text">
                      <strong><i>P</i></strong> reases
                    </p>
                    <p>
                      <mdb-icon icon="chess-king" class="text-green" /> J.T.J. Toorenburg
                    </p>
                    <a href="mailto:Praeses@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> Praeses@nonomes.nl
                    </a>
                    <hr>

                    <p class="dark-grey-text">
                      <strong><i>Ab A</i></strong>ctis
                    </p>
                    <p>
                      <mdb-icon icon="at" class="text-green" /> M.S. De Bruin
                    </p>
                    <a href="mailto:Info@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> Info@nonomes.nl
                    </a>

                    <hr>

                    <p class="dark-grey-text">
                      <strong><i>Q</i></strong>uaestor
                    </p>
                    <p>
                      <mdb-icon icon="coins" class="text-green" /> M. Kroon
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
                  Senaat Torenburg
                </h2>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mdb-lightbox pt-5">
              <mdb-col @click.native="show(0)">
                <figure>
                  <img src="http://nonomes.nl/media/1156/senaat.png?width=500&height=354" class="img-fluid" alt="">
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
                        <mdb-icon icon="at" />
                        Stichting
                      </h3>
                    </div>
                    <p class="dark-grey-text">
                      Voorzitter
                    </p>
                    <p>
                      <mdb-icon icon="user-tie" class="text-green" /> J.J. De Fluiter
                    </p>
                    <a href="mailto:directie@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> directie@nonomes.nl
                    </a>
                    <hr>

                    <p class="dark-grey-text">
                      Penningmeester
                    </p>
                    <p>
                      <mdb-icon icon="hand-holding-usd" class="text-green" /> N.M. Pijnenburg
                    </p>
                    <a href="mailto:directie@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> directie@nonomes.nl
                    </a>
                    <hr>

                    <p class="dark-grey-text">
                      Secretaris
                    </p>
                    <p>
                      <mdb-icon icon="newspaper" class="text-green" /> F.H.L. Van Breevoort
                    </p>
                    <a href="mailto:directie@nonomes.nl">
                      <mdb-icon icon="envelope" class="text-blue" /> directie@nonomes.nl
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
          content: `Senaat Torenburg, is het huidige senaat.`
        }
      ]
    }
  },
  data() {
    return {
      imgs: ['http://nonomes.nl/media/1156/senaat.png?width=500&height=354'],
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
