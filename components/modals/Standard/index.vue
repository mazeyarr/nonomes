<template>
  <mdb-modal v-if="modal.show" @close="hide(modal.id)">
    <mdb-modal-header>
      <mdb-modal-title>{{ modal.title }}</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body>
      <p class="text-center py-2">
        {{ modal.description }}
      </p>

      <FormBuilder
        v-if="modal.hasForm"
        :id="modal.form.id"
        ref="form"
      />
    </mdb-modal-body>
    <mdb-modal-footer>
      <mdb-btn color="danger" icon="times" @click.native="hide(modal.id)">
        Close
      </mdb-btn>
      <mdb-btn color="success" icon="paper-plane" iconRight @click="send">
        Inschrijven!
      </mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import FormBuilder from '@/components/form/FormBuilder'
import {
  mdbModal,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbModalHeader,
  mdbBtn
} from 'mdbvue'
export default {
  name: 'StandardModal',
  components: {
    mdbModal,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbModalHeader,
    mdbBtn,
    FormBuilder
  },
  computed: {
    ...mapGetters({
      modal: 'modals/GET_ACTIVE_MODAL',
      form: 'forms/GET_FORM_BY_ID'
    })
  },
  methods: {
    ...mapMutations({
      hide: 'modals/SET_HIDE_MODAL'
    }),
    send() {
      if (this.modal.hasForm) {
        this.$refs.form.submit()
      }
    }
  }
}
</script>

<style scoped>
</style>
