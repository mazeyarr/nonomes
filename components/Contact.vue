<template>
  <div class="odd pl-5 pr-5 pt-5">
    <h2 :style="{color: textColor}" class="d-none d-md-block h1-responsive font-weight-bold text-center">
      Contact
    </h2>
    <p :style="{color: textColor}" class="text-center w-responsive mx-auto" />
    <mdb-row>
      <transition name="page-intro-slide-top">
        <mdb-col v-show="objectToAnimate(sectionName,'form').show" lg="5" class="lg-0 mb-4">
          <mdb-card>
            <mdb-card-body>
              <div class="form-header green accent-3">
                <h3 class="mt-2">
                  <mdb-icon icon="envelope" />
                  Stuur een berichtje
                </h3>
              </div>
              <p class="dark-grey-text" />
              <div class="md-form">
                <mdb-input
                  id="form-name"
                  icon="user"
                  label="Volledige naam"
                  iconClass="grey-text"
                  type="text"
                />
              </div>
              <div class="md-form">
                <mdb-input
                  id="form-email"
                  icon="envelope"
                  label="Je E-mailadres"
                  iconClass="grey-text"
                  type="text"
                />
              </div>
              <div class="md-form">
                <mdb-input
                  id="form-subject"
                  icon="tag"
                  label="Onderwerp"
                  iconClass="grey-text"
                  type="text"
                />
              </div>
              <div class="md-form">
                <mdb-textarea
                  id="form-text"
                  icon="pencil"
                  label="Maak er een leuk verhaal van..."
                  iconClass="grey-text"
                />
              </div>
              <div class="text-center">
                <mdb-btn class="green accent-3">
                  Submit
                </mdb-btn>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </transition>

      <transition name="page-intro-slide-right">
        <mdb-col v-show="objectToAnimate(sectionName,'map').show" lg="7">
          <div id="map-container" class="rounded z-depth-1-half map-container" style="height: 400px">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.799628632169!2d4.8942665158363265!3d52.37405315478739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b884e1ae2b%3A0x2ff5eade9ee128ec!2sStudentenvereniging+NoNoMes!5e0!3m2!1snl!2snl!4v1551459565511"
              width="100%"
              height="100%"
              frameBorder="0"
              style="border: 0"
            />
          </div>
          <br>
          <address>
            <mdb-row class="text-center">
              <transition name="page-intro-zoom">
                <mdb-col v-show="objectToAnimate(sectionName,'locationIcon').show" md="3">
                  <mdb-btn tag="a" floating color="yellow" class="accent-2" @click="navigateTo">
                    <mdb-icon icon="map-marker" />
                  </mdb-btn>
                  <p :style="{color: textColor}">
                    Warmoesstraat 121
                  </p>
                  <p :style="{color: textColor}" class="mb-md-0">
                    1012 JA, Amsterdam
                  </p>
                </mdb-col>
              </transition>

              <transition name="page-intro-zoom">
                <mdb-col v-show="objectToAnimate(sectionName,'phoneIcon').show" md="3">
                  <mdb-btn tag="a" href="tel:+310206273067" floating color="green" class="accent-2">
                    <mdb-icon icon="phone" />
                  </mdb-btn>
                  <p>
                    <a href="tel:+310206273067" :style="{color: textColor}">
                      020-6273067
                    </a>
                  </p>
                  <p :style="{color: textColor}" class="mb-md-0">
                    Ma - Vr, 11:00-17:00
                  </p>
                </mdb-col>
              </transition>

              <transition name="page-intro-zoom">
                <mdb-col v-show="objectToAnimate(sectionName,'emailIcon').show" md="3">
                  <mdb-btn tag="a" href="mailto:info@nonomes.nl" floating color="purple" class="accent-2">
                    <mdb-icon icon="envelope" />
                  </mdb-btn>
                  <p :style="{color: textColor}">
                    E-mailadres
                  </p>
                  <p :style="{color: textColor}" class="mb-md-0">
                    <a href="mailto:info@nonomes.nl" :style="{color: textColor}">
                      info@nonomes.nl
                    </a>
                  </p>
                </mdb-col>
              </transition>

              <transition name="page-intro-zoom">
                <mdb-col v-show="objectToAnimate(sectionName,'emailIcon').show" md="3">
                  <mdb-btn tag="a" href="https://wa.me/31626814198 " floating color="green" class="accent-2">
                    <mdb-icon fab icon="whatsapp" />
                  </mdb-btn>
                  <p :style="{color: textColor}">
                    Whatsapp
                  </p>
                  <p :style="{color: textColor}" class="mb-md-0">
                    <a href="mailto:info@nonomes.nl" :style="{color: textColor}">
                      Stuur een berichtje!
                    </a>
                  </p>
                </mdb-col>
              </transition>
            </mdb-row>
          </address>
        </mdb-col>
      </transition>
    </mdb-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import {
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbIcon,
  mdbInput,
  mdbTextarea,
  mdbCard,
  mdbCardBody
} from 'mdbvue'

export default {
  name: 'Contact',
  components: {
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody
  },
  props: {
    sectionName: {
      required: true,
      type: String
    },
    textColor: {
      required: false,
      default: '',
      type: String
    }
  },
  computed: {
    ...mapGetters({
      sectionFindByName: 'pages/sectionFindByName',
      objectToAnimate: 'pages/GET_OBJECT_TO_ANIMATE_BY_NAME'
    }),
    section() {
      return this.sectionFindByName(this.sectionName)
    }
  },
  methods: {
    navigateTo: function() {
      const lat = 52.374052
      const long = 4.896458

      if (
        navigator.platform.indexOf('iPhone') !== -1 ||
        navigator.platform.indexOf('iPod') !== -1 ||
        navigator.platform.indexOf('iPad') !== -1
      )
        window.open(`maps://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`)
      else
        window.open(`http://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`)
    }
  }
}
</script>

<style scoped>
.address-block {
  display: inline-block;
}
</style>
