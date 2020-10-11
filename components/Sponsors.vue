<template>
  <mdb-row class="p-5">
    <mdb-col
      v-for="sponsor in sponsors"
      :key="sponsor.id"
      md="3"
    >
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
          <a @click="goToSponsor(sponsor.link)">
            <mdb-mask overlay="dark-slight" waves flexCenter />
          </a>
        </mdb-view>
      </figure>
    </mdb-col>
  </mdb-row>
</template>

<script>
import { mdbRow, mdbCol, mdbView, mdbMask } from 'mdbvue'

export default {
  name: 'Sponsers',
  components: {
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask
  },
  data() {
    return {
      sponsors: [
        {
          id: 1,
          name: 'Opzeggen 24',
          imgSrc: '/images/sponsors/sponsor-1.png',
          link:
            'https://www.opzeggen24.nl/abonnement-opzeggen/videoland-opzeggen.html/',
          alt: 'videoland opzeggen',
          show: false
        },
        // {
        //   id: 2,
        //   name: 'Studeersnel',
        //   imgSrc: '/images/sponsors/sponsor-2.png',
        //   link: '',
        //   alt: 'Studeersnel',
        //   show: false
        // },
        // {
        //   id: 3,
        //   name: 'EasySwitch',
        //   imgSrc: '/images/sponsors/sponsor-3.png',
        //   link: 'https://www.easyswitch.nl/energie-vergelijken/',
        //   alt: 'EasySwitch',
        //   show: false
        // },
        // {
        //   id: 4,
        //   name: 'Overstappen',
        //   imgSrc: '/images/sponsors/sponsor-4.png',
        //   link: 'http://overstappen.nl',
        //   alt: 'Overstappen',
        //   show: false
        // },
        // {
        //   id: 5,
        //   name: 'Auto Verzekeringen',
        //   imgSrc: '/images/sponsors/sponsor-5.png',
        //   link: 'https://www.autoverzekering.nl/',
        //   alt: 'Auto Verzekeringen',
        //   show: false
        // },
        {
          id: 6,
          name: 'Becam Financiëren',
          imgSrc: '/images/sponsors/sponsor-6.png',
          link: 'https://www.becam.nl',
          alt: 'Becam Financiëren',
          show: false
        },
        // {
        //   id: 7,
        //   name: 'Best4ugroup',
        //   imgSrc: '/images/sponsors/sponsor-7.png',
        //   link: 'https://www.best4u.nl/',
        //   alt: 'Best4ugroup',
        //   show: false
        // },
        {
          id: 8,
          name: 'Dakdek-Gigant',
          imgSrc: '/images/sponsors/sponsor-8.png',
          link: 'https://www.dakdek-gigant.nl/',
          alt: 'Dakdek-Gigant',
          show: false
        },
        {
          id: 9,
          name: 'Drukbedrijf',
          imgSrc: '/images/sponsors/sponsor-9.png',
          link: '',
          alt: 'Drukbedrijf',
          show: false
        },
        // {
        //   id: 10,
        //   name: 'Geld.nl',
        //   imgSrc: '/images/sponsors/sponsor-10.png',
        //   link: 'https://www.geld.nl/',
        //   alt: 'Geld.nl',
        //   show: false
        // },
        // {
        //   id: 11,
        //   name: 'Huizenmarkt',
        //   imgSrc: '/images/sponsors/sponsor-11.png',
        //   link: 'https://www.huizenmarkt.nl',
        //   alt: 'Huizenmarkt',
        //   show: false
        // },
        {
          id: 12,
          name: 'Huurzone',
          imgSrc: '/images/sponsors/sponsor-12.png',
          link: 'https://www.huurzone.nl/huren/amsterdam.html',
          alt: 'huurwoningen amsterdam',
          show: false
        },
        {
          id: 13,
          name: 'Schilder-Gigant',
          imgSrc: '/images/sponsors/sponsor-13.png',
          link: '',
          alt: 'Schilder-Gigant',
          show: false
        },
        {
          id: 14,
          name: 'Aannemer-Gigant',
          imgSrc: '/images/sponsors/sponsor-14.png',
          link: 'https://www.aannemer-gigant.nl/',
          alt: 'Aannemer-Gigant',
          show: false
        },
        {
          id: 15,
          name: 'Sim-only',
          imgSrc: '/images/sponsors/sponsor-15.png',
          link: 'https://www.simonlydiscount.nl/sim-only-aanbiedingen.html',
          alt: 'Sim-only',
          show: false
        },
        {
          id: 16,
          name: 'MR Korting',
          imgSrc: '/images/sponsors/sponsor-16.png',
          link: 'https://www.mrkorting.nl/aboutyou.nl',
          alt: 'kortingscode about you',
          show: false
        },
        {
          id: 17,
          name: 'Knaek',
          imgSrc: '/images/sponsors/sponsor-17.png',
          link: 'https://www.knaek.nl/studentenkorting/Amsterdam',
          alt: 'Knaek',
          show: false
        },
        // {
        //   id: 18,
        //   name: 'Uitvaartverzekering',
        //   imgSrc: '/images/sponsors/sponsor-18.png',
        //   link: 'https://www.uitvaartverzekering.nl',
        //   alt: 'Uitvaartverzekering',
        //   show: false
        // },
        // {
        //   id: 19,
        //   name: 'Uitvaartverzekering.nl',
        //   imgSrc: '/images/sponsors/sponsor-19.png',
        //   link: 'https://www.uitvaartverzekering.nl',
        //   alt: 'Uitvaartverzekering.nl',
        //   show: false
        // },
        // {
        //   id: 20,
        //   name: 'hoyhoy',
        //   imgSrc: '/images/sponsors/sponsor-20.JPG',
        //   link: 'https://www.hoyhoy.nl/energievergelijker/',
        //   alt: 'hoyhoy',
        //   show: false
        // },
        // {
        //   id: 21,
        //   name: 'Skepp',
        //   imgSrc: '/images/sponsors/sponsor-21.jpg',
        //   link: 'https://skepp.nl/nl/',
        //   alt: 'Skepp',
        //   show: false
        // },
        // {
        //   id: 22,
        //   name: 'Pricewise',
        //   imgSrc: '/images/sponsors/sponsor-22.gif',
        //   link: 'https://www.pricewise.nl/energie-vergelijken',
        //   alt: 'Pricewise',
        //   show: false
        // },
        // {
        //   id: 23,
        //   name: 'United Consumers',
        //   imgSrc: '/images/sponsors/sponsor-23.jpg',
        //   link: '',
        //   alt: 'United Consumers',
        //   show: false
        // }
      ]
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    goToSponsor(link) {
      window.open(link)
    },
    animate: function() {
      for (const index in this.sponsors) {
        setTimeout(() => {
          this.sponsors[index].show = true
        }, this.animationDelay)
        this.animationDelay += 200
      }
    },
    isValidUrl(url) {
      const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      )
      return !!pattern.test(url)
    }
  }
}
</script>

<style scoped>
.sponsor-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  max-height: 70px;
}
.sponsor-view > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
