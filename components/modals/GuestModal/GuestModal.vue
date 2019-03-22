<template>
  <mdb-modal v-if="modal('guest-register-modal').show" @close="hide(name)">
    <mdb-modal-header>
      <mdb-modal-title>Inschrijven</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ex, harum ipsa minus neque omnis similique. Accusantium ad autem ea
      enim expedita in minima neque placeat qui, sit, soluta voluptatem voluptatibus?
    </mdb-modal-body>
    <mdb-modal-footer>
      <mdb-btn color="secondary" @click.native="hide(name)">
        Close
      </mdb-btn>
      <mdb-btn color="primary">
        Inschrijven!
      </mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import {
  mdbModal,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbModalHeader,
  mdbBtn
} from 'mdbvue'
export default {
  name: 'GuestModal',
  components: {
    mdbModal,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbModalHeader,
    mdbBtn
  },
  data() {
    return {
      name: 'guest-register-modal'
    }
  },
  computed: {
    ...mapGetters({
      modal: 'modals/modalFindByName'
    })
  },
  methods: {
    ...mapMutations({
      hide: 'modals/hide'
    })
  }
}
</script>

<style scoped>
</style>
