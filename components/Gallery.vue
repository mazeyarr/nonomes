<template>
  <div>
    <mdb-carousel
      :interval="100000"
      showControls
      showIndicators
      multi
      slide
      top
      navClass="btn-success"
      indicatorClass="success-color"
    >
      <mdb-carousel-item>
        <mdb-row class="mdb-lightbox px-5">
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(0)">
            <figure>
              <img :src="imgs[0]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(1)">
            <figure>
              <img :src="imgs[1]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(2)">
            <figure>
              <img :src="imgs[2]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(3)">
            <figure>
              <img :src="imgs[3]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(4)">
            <figure>
              <img :src="imgs[4]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(5)">
            <figure>
              <img :src="imgs[5]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
      <mdb-carousel-item>
        <mdb-row class="mdb-lightbox px-2">
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(0)">
            <figure>
              <img :src="imgs2[0]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(1)">
            <figure>
              <img :src="imgs2[1]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(2)">
            <figure>
              <img :src="imgs2[2]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(3)">
            <figure>
              <img :src="imgs2[3]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(4)">
            <figure>
              <img :src="imgs2[4]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(5)">
            <figure>
              <img :src="imgs2[5]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
      <mdb-carousel-item>
        <mdb-row class="mdb-lightbox px-2">
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(0)">
            <figure>
              <img :src="imgs3[0]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(1)">
            <figure>
              <img :src="imgs3[1]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(2)">
            <figure>
              <img :src="imgs3[2]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(3)">
            <figure>
              <img :src="imgs3[3]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(4)">
            <figure>
              <img :src="imgs3[4]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(5)">
            <figure>
              <img :src="imgs3[5]" class="img-fluid" alt="">
            </figure>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
    </mdb-carousel>
    <mdb-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <mdb-lightbox
      :visible="visible2"
      :imgs="imgs2"
      :index="index2"
      @hide="handleHide2"
    />
    <mdb-lightbox
      :visible="visible3"
      :imgs="imgs3"
      :index="index3"
      @hide="handleHide3"
    />
  </div>
</template>

<script>
import {
  mdbCarousel,
  mdbCarouselItem,
  mdbRow,
  mdbCol,
  mdbLightbox
} from 'mdbvue'

export default {
  name: 'Gallery',
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbRow,
    mdbCol,
    mdbLightbox
  },
  data() {
    return {
      imgs: [
        '/images/gallery/nonomes-gallery-1.jpeg',
        '/images/gallery/nonomes-gallery-2.jpg',
        '/images/gallery/nonomes-gallery-3.jpg',
        '/images/gallery/nonomes-gallery-4.jpg',
        '/images/gallery/nonomes-gallery-15.jpeg',
        '/images/gallery/nonomes-gallery-18.jpg'
      ],
      imgs2: [
        '/images/gallery/nonomes-gallery-17.jpg',
        '/images/gallery/nonomes-gallery-14.jpeg',
        '/images/gallery/nonomes-gallery-13.jpeg',
        '/images/gallery/nonomes-gallery-8.jpg',
        '/images/gallery/nonomes-gallery-7.jpg',
        '/images/gallery/nonomes-gallery-5.jpg'
      ],
      imgs3: [
        '/images/gallery/nonomes-gallery-20.jpg',
        '/images/gallery/nonomes-gallery-10.jpg',
        '/images/gallery/nonomes-gallery-11.jpg',
        '/images/gallery/nonomes-gallery-12.jpg',
        '/images/gallery/nonomes-gallery-6.jpg',
        '/images/gallery/nonomes-gallery-21.jpg'
      ],
      visible: false,
      visible2: false,
      visible3: false,
      index: 0,
      index2: 0,
      index3: 0
    }
  },
  methods: {
    showLightbox(index) {
      this.index = index
      this.visible = true
    },
    showLightbox2(index2) {
      this.index2 = index2
      this.visible2 = true
    },
    showLightbox3(index3) {
      this.index3 = index3
      this.visible3 = true
    },
    handleHide() {
      this.visible = false
    },
    handleHide2() {
      this.visible2 = false
    },
    handleHide3() {
      this.visible3 = false
    }
  }
}
</script>

<style scoped>
img {
  height: 500px !important;
  width: 600px !important;
}
</style>
