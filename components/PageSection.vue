<template>
  <mdb-row :id="id" class="section-row">
    <section :id="`section-${id}`" class="mx-auto w-100">
      <slot />
    </section>
  </mdb-row>
</template>

<script>
import { mdbRow } from 'mdbvue'

export default {
  name: 'PageSection',
  components: {
    mdbRow
  },
  props: {
    id: {
      type: String,
      required: false,
      default: 'page-section-default  '
    }
  }
}
</script>

<style scoped>
.section-row {
  min-height: 500px;
}
.even {
  background-color: white;
}
.odd {
  background-color: #51a16f;
}
</style>
