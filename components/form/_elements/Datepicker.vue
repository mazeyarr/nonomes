<template>
  <mdb-view>
    <mdb-icon
      class="d-none d-md-inline-block datePickerIcon"
      :icon="element.icon"
    />
    <mdb-date-picker
      ref="datepicker"
      class="d-inline-block datePicker"
      :option="datePickerOptions"
      @getValue="getPickerValue"
    />
    <input
      v-model="value"
      type="text"
      class="d-none"
      :name="element.name"
    >
  </mdb-view>
</template>

<script>
import { mdbView, mdbIcon, mdbDatePicker } from 'mdbvue'
export default {
  name: 'Datepicker',
  components: {
    mdbView,
    mdbIcon,
    mdbDatePicker
  },
  props: {
    element: {
      required: true,
      type: Object,

      name: {
        type: String,
        required: false,
        default: ''
      },
      icon: {
        type: String,
        required: false,
        default: ''
      },
      placeholder: {
        type: String,
        required: false,
        default: ''
      }
    }
  },
  data() {
    return {
      value: '',
      datePickerOptions: {
        format: 'DD-MM-YYYY',
        SundayFirst: false,
        week: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
        month: [
          'Januari',
          'Februari',
          'Maart',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Augustus',
          'September',
          'Oktober',
          'November',
          'December'
        ],
        placeholder: this.element.placeholder,
        buttons: {
          ok: 'Bevestig',
          cancel: 'Annuleren',
          today: 'Vandaag',
          clear: 'Reset'
        }
      }
    }
  },
  methods: {
    getPickerValue(value) {
      this.value = value
    }
  }
}
</script>

<style scoped>
.datePicker {
  width: 91%;
}
.datePickerIcon {
  font-size: 2em;
  margin-right: 8px;
}

@media only screen and (max-width: 580px) {
  .datePicker {
    width: 100%;
  }
}
</style>
