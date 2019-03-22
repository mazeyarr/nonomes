<template>
  <div id="about-disputen">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection>
        <mdb-row>
          <mdb-col class="p-5 mt-sm-5 mt-5">
            <h1 class="text-black text-center">
              De Disputen
            </h1>
          </mdb-col>
        </mdb-row>
        <mdb-row center>
          <mdb-col md="2" sm="12">
            <mdb-row>
              <mdb-col class="text-center" col="6">
                <mdb-btn
                  tag="a"
                  gradient="aqua"
                  floating
                  :size="genderSwitch === 1 ? 'lg' : 'md'"
                  @click="genderSwitch = 1"
                >
                  <mdb-icon icon="mars" />
                </mdb-btn>
                <br>
                <mdb-badge class="gender-labels" color="info-color">
                  Heren
                </mdb-badge>
              </mdb-col>

              <mdb-col class="text-center" col="6">
                <mdb-btn
                  tag="a"
                  gradient="purple"
                  floating
                  :size="genderSwitch === 0 ? 'lg' : 'md'"
                  @click="genderSwitch = 0"
                >
                  <mdb-icon icon="venus" />
                </mdb-btn>
                <br>
                <mdb-badge class="gender-labels" color="secondary-color">
                  Dames
                </mdb-badge>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>

        <transition-group name="slide-fade" tag="div" class="row justify-content-center p-5">
          <mdb-col
            v-for="dispuut in disputen.male"
            v-show="dispuut.show"
            :key="dispuut.name"
            class="mt-3"
            md="3"
            sm="6"
          >
            <DispuutCard :name="dispuut.name" :description="dispuut.description" :logo-src="dispuut.logoSrc" />
          </mdb-col>

          <mdb-col
            v-for="dispuut in disputen.female"
            v-show="dispuut.show"
            :key="dispuut.name"
            class="mt-3"
            md="2"
            sm="4"
          >
            <DispuutCard :name="dispuut.name" :description="dispuut.description" :logo-src="dispuut.logoSrc" />
          </mdb-col>
        </transition-group>
      </PageSection>
    </mdb-container>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import PageSection from '@/components/PageSection'
import DispuutCard from '@/components/DispuutCard'

import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbBadge } from 'mdbvue'
export default {
  components: {
    NavBar,
    PageSection,
    mdbContainer,
    DispuutCard,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbBadge
  },
  data() {
    return {
      genderSwitch: false,
      disputen: {
        male: [
          {
            id: 2,
            name: 'Ridders',
            logoSrc: '/images/dispuut-wapens/rid.png',
            description:
              "Het Broederschap der Kruisridders is het oudste en het actiefste dispuut dat NoNoMes rijk is. Met je dispuut breng je tijdens je studie een groot deel van je tijd door. Samen zorgen we er dan ook voor dat je je nooit hoeft te vervelen. Weekenden weg, vakanties, genootschappen, diners: er is altijd wat te doen. Sinds 1989 zijn wij een grote groep vrienden, en dat zullen we altijd blijven. Samen bouwen we feestjes, helpen we elkaar, starten we bedrijven en genieten we volop van onze studententijd. Kom vooral langs in een van onze dispuutshuizen of in onze stamkroeg 'De Inter' om hier meer over te horen.",
            show: false
          },
          {
            id: 4,
            name: 'Auxillia',
            logoSrc: '/images/dispuut-wapens/aux.png',
            description:
              'AUXILIA heeft een rijk verleden maar een frisse wind in de zeilen. Ontdek met ons de mooie dingen binnen Amsterdam en daar buiten. Stevig en tot laat staan wij op de dinsdagavond in de Soos. Voor eenieder is er plek binnen ons divers maar gebonden dispuut. Oost West, Thuis Best.',
            show: false
          },
          {
            id: 3,
            name: 'Import Mokum',
            logoSrc: '/images/dispuut-wapens/imp.png',
            description:
              'Een echte Importeur is te herkennen aan de kleuren Import-blauw en Import-wit, tevens aan zijn grote voorliefde voor de banaan. Met een grote variëteit aan leden is er immer iemand te vinden om de hoognodige dorst mee te lessen. Daarnaast zit een Importeur graag met de blote billen in de Alpensneeuw, feest hij immer tot in de vroege morgen door, houdt hij van overdadige diners en gala’s, gaat hij graag met wat dames op weekend en heeft hij uiteraard de drive zijn studie op een optimale manier te combineren met alles wat Import en Amsterdam te bieden hebben.',
            show: false
          },
          {
            id: 1,
            name: 'P.E.N.T.A.G.O.N.',
            logoSrc: '/images/dispuut-wapens/pen.png',
            description:
              'Voor iedereen, behalve echte illuminaten, een ondoorgrondelijk geheim.',
            show: false
          }
        ],
        female: [
          {
            id: 1,
            name: 'Colombine',
            logoSrc: '/images/dispuut-wapens/col.png',
            description:
              'Typerend aan Colombine is juist dat er eigenlijk geen typische Colombiner is. Damesdispuut Colombine is opgericht in 1989 en is daarmee het oudste damesdispuut van studentenvereniging NoNoMes. Wij staan voor: groen/zwart, hechte vriendschappen, borrelen in het Pleidooi, diversiteit, samen brak zijn, groene fietsen, zwoele zomeravonden in het park, eigenzinnigheid, stapavonden, creativiteit, veel rose, in voor feestjes, jezelf kunnen zijn, reislust, tijd voor elkaar, gezelligheid, het Valentijnsfeest, weekendjes weg, gekke dronken buien, de duif, er altijd voor elkaar zijn!',
            show: false
          },
          {
            id: 2,
            name: 'Born',
            logoSrc: '/images/dispuut-wapens/bor.png',
            description:
              'Amsterdams damesdispuut BORN biedt je de mogelijkheid om het maximale uit je studententijd te halen! Samen borrelen, op vakantie, naar festivals, diners en feestjes en daarnaast onze jaarlijkse activiteiten zoals het Blind Date Diner, maakt dat je bij BORN vriendinnen voor het leven maakt. Met 34 actieve leden en bijna 100 reünisten vormt Amsterdams damesdispuut een hechte en actieve groep dames. Iedere BORN dame is uniek maar één ding hebben we allemaal gemeen: we are BORN to be wild!',
            show: false
          },
          {
            id: 3,
            name: 'Lux',
            logoSrc: '/images/dispuut-wapens/lux.png',
            description:
              'Lumen Unanimus Xenon, oftewel LUX, is een hechte en bijzondere groep actieve dames met uiteenlopende persoonlijkheden die keer op keer weer zorgen voor mooie belevenissen. Jong, recht voor z’n raap, no-nonsense en lekker relaxed zijn termen waarmee je LUX het beste kan omschrijven. We maken geen onderscheid tussen de verschillende lichtingen en vormen één grote groep vriendinnen. LUX: niets moet, maar we willen alles!   ',
            show: false
          },
          {
            id: 4,
            name: 'Kleito',
            logoSrc: '/images/dispuut-wapens/kle.png',
            description:
              'Al 25 jaar is Kleito niet te missen in haar roze-zwart. Zowel binnen als buiten de vereniging zijn wij ontzettend actief, waardoor we elkaar nooit lang hoeven te missen! Een grote groep dames met ieder hun eigen karakter die samen van het Amsterdamse studentenleven genieten. Jetino!',
            show: false
          },
          {
            id: 5,
            name: 'LCF',
            logoSrc: '/images/dispuut-wapens/lcf.png',
            description:
              'Een groep vol enthousiaste dames met als motto ‘doe maar lekker gek, want dat is veel leuker’. Je studententijd is immers de mooiste tijd van je leven! Met LCF verveel je je nooit. Met zijn allen genieten we van Amsterdam, maar vooral van alle borrels, diners, festivals, weekendjes weg en de vriendschappen voor het leven. We maken overal een feestje van! Touché!',
            show: false
          }
        ]
      }
    }
  },
  watch: {
    genderSwitch: function(newVal) {
      let delay = 200
      if (newVal === 1) {
        for (const index in this.disputen.female) {
          this.disputen.female[index].show = false
        }

        for (const index in this.disputen.male) {
          setTimeout(() => (this.disputen.male[index].show = true), delay)

          delay += 50
        }
      } else if (newVal === 0) {
        for (const index in this.disputen.male) {
          this.disputen.male[index].show = false
        }

        for (const index in this.disputen.female) {
          setTimeout(() => (this.disputen.female[index].show = true), delay)

          delay += 50
        }
      }
    }
  },
  created() {
    this.genderSwitch = 1
  }
}
</script>
