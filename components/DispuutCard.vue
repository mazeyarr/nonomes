<template>
  <mdb-card narrow>
    <mdb-view hover cascade zoom>
      <mdb-card-image :src="logoSrc" :alt="name" class="img-logo bg-nonomes-gradient" />
      <mdb-mask flex-center waves overlay="white-slight" />
    </mdb-view>

    <mdb-card-body cascade>
      <mdb-card-title><strong>{{ name }}</strong></mdb-card-title>
      <mdb-card-text class="mb-5">
        {{ description }}
      </mdb-card-text>
      <mdb-btn color="unique" class="read-more">
        <mdb-icon icon="book" />
        Lees meer
      </mdb-btn>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardTitle,
  mdbCardBody,
  mdbCardText,
  mdbIcon,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbCardImage
} from 'mdbvue'

export default {
  name: 'PageSection',
  components: {
    mdbCard,
    mdbCardTitle,
    mdbCardBody,
    mdbCardText,
    mdbIcon,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbCardImage
  },
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    logoSrc: {
      type: String,
      required: true,
      default: '/images/nonomes_wapen.png'
    }
  }
}
</script>

<style>
.img-logo > img {
  margin: auto;
}
.even {
  background-color: white;
}
.odd {
  background-color: #51a16f;
}

.read-more {
  position: absolute;
  bottom: 10px;
}
</style>
