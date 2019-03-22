<template>
  <article class="h-100" :class="section(sectionName).styleClasses">
    <mdb-row
      v-if="section(sectionName).title !== ''"
      class="mt-5"
      center
    >
      <div v-if="section(sectionName).title !== ''">
        <div
          v-if="section(sectionName).title.type === 'html'"
          :class="section(sectionName).title.styleClasses"
          v-html="sanitize(section(sectionName).title.text)"
        />
        <h2
          v-if="section(sectionName).title.type === 'plain'"
          :class="section(sectionName).title.styleClasses"
          v-text="section(sectionName).title.text"
        />
      </div>
    </mdb-row>

    <mdb-row
      v-if="section(sectionName).preContent !== ''"
      :class="section(sectionName).preContent.styleClasses"
      :around="section(sectionName).preContent.position.around"
      :between="section(sectionName).preContent.position.between"
      :center="section(sectionName).preContent.position.center"
      :end="section(sectionName).preContent.position.end"
      :start="section(sectionName).preContent.position.start"
    >
      <mdb-col
        class="pl-5 pr-5"
        :sm="section(sectionName).preContent.colSize.sm"
        :md="section(sectionName).preContent.colSize.md"
        :lg="section(sectionName).preContent.colSize.lg"
      >
        <article v-html="sanitize(section(sectionName).preContent.content)" />
      </mdb-col>
    </mdb-row>

    <mdb-row
      :class="section(sectionName).styleClasses"
      :around="section(sectionName).contentPosition.around"
      :between="section(sectionName).contentPosition.between"
      :center="section(sectionName).contentPosition.center"
      :end="section(sectionName).contentPosition.end"
      :start="section(sectionName).contentPosition.start"
    >
      <mdb-col
        v-for="(content, index) in section(sectionName).content"
        :key="content.id"
        :class="content.styleClasses"
        :sm="content.colSize.sm"
        :md="content.colSize.md"
      >
        <div v-if="content.title !== ''">
          <div :class="content.title.styleClasses" v-html="content.title.type === 'html' ? sanitize(content.title.text) : ''" />
          <h2
            v-if="content.title.type === 'plain'"
            :class="content.title.styleClasses"
          >
            {{ content.title.text }}
          </h2>
        </div>

        <div
          v-if="content.body !== '' && content.body.type === 'html'"
          :class="content.body.styleClasses"
          v-html="sanitize(content.body.content)"
        />

        <slot v-if="hasDefaultSlot && index === slotIndex" />
      </mdb-col>
    </mdb-row>
    <slot name="footer" />
  </article>
</template>

<script>
import { mdbRow, mdbCol } from 'mdbvue'
import { mapGetters } from 'vuex'

export default {
  name: 'SectionContent',
  components: {
    mdbRow,
    mdbCol
  },
  props: {
    sectionName: {
      required: true,
      type: String
    },
    slotFirst: {
      required: false,
      default: false,
      type: Boolean
    },
    slotCustom: {
      required: false,
      default: 0,
      type: Number
    },
    slotLast: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      slotIndex: false
    }
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    },
    ...mapGetters({
      section: 'pages/sectionFindByName'
    })
  },
  created() {
    this.handleSlot()
  },
  methods: {
    handleSlot: function() {
      if (this.slotFirst) this.slotIndex = 0

      if (
        this.slotCustom &&
        this.slotIndex <= this.section(this.sectionName).content.length
      )
        this.slotIndex = this.slotCustom

      if (this.slotLast)
        this.slotIndex = this.section(this.sectionName).content.length - 1

      if (
        this.hasDefaultSlot &&
        !this.slotFirst &&
        !this.slotCustom &&
        !this.slotLast
      )
        this.slotIndex = 0
    }
  }
}
</script>

<style scoped>
</style>
