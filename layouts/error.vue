<template>
  <div class="container">
    <figure class="brand-container">
      <img class="img-fluid" src="/images/NoNoMes-Wapen-Clean.png" alt="logo">
    </figure>
    <div class="text-container">
      <mdb-row>
        <mdb-col col="12">
          <p><i>Deze pagina bestaat niet... :(</i></p>
        </mdb-col>
        <mdb-col col="6">
          <mdb-btn color="danger" icon="arrow-left" iconLeft block @click="$router.history.go(-1)">
            Terug
          </mdb-btn>
        </mdb-col>
        <mdb-col col="6">
          <mdb-btn color="success" icon="arrow-right" iconRight block @click="$router.push('/')">
            Naar homepagina
          </mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>
  </div>
</template>

<script>
import { mdbBtn, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'Error',
  components: {
    mdbBtn,
    mdbRow,
    mdbCol
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  overflow: hidden;
  position: fixed;
  top: 30%;
  left: 50%;
  width: 35em;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -15em; /*set to a negative number 1/2 of your width*/
}
.brand-container > img {
  text-align: center;
  height: 500px;
}
.text-container {
  text-align: center;
}
</style>
