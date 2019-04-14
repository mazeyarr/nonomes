<template>
  <mdb-row :tag="section.tag" class="h-100" :class="section.styleClasses">
    <div v-if="section.type === 'default'" class="w-100">
      <mdb-row
        v-if="section.title !== null"
        class="mt-5"
        center
      >
        <div v-if="section.title !== null">
          <div
            v-if="section.title.type === 'html'"
            :class="section.title.styleClasses"
            v-html="sanitize(section.title.text)"
          />
          <h2
            v-if="section.title.type === 'plain'"
            :class="section.title.styleClasses"
            v-text="section.title.text"
          />
        </div>
      </mdb-row>

      <mdb-row
        v-if="section.preContent !== null"
        :class="section.preContent.content.styleClasses"
        :around="section.preContent.position.around"
        :between="section.preContent.position.between"
        :center="section.preContent.position.center"
        :end="section.preContent.position.end"
        :start="section.preContent.position.start"
        tag="article"
      >
        <mdb-col
          class="pl-5 pr-5"
          :sm="section.preContent.colSize.sm"
          :md="section.preContent.colSize.md"
          :lg="section.preContent.colSize.lg"
        >
          <div v-html="sanitize(section.preContent.content.text)" />
        </mdb-col>
      </mdb-row>

      <mdb-row
        :class="section.styleClasses"
        :around="section.contentPosition.around"
        :between="section.contentPosition.between"
        :center="section.contentPosition.center"
        :end="section.contentPosition.end"
        :start="section.contentPosition.start"
      >
        <mdb-col
          v-for="(content, index) in section.content"
          :key="content.id"
          :class="content.styleClasses"
          :sm="content.colSize.sm"
          :md="content.colSize.md"
          :tag="content.tag"
        >
          <div v-if="content.title !== null">
            <div
              v-if="content.title.type === 'html'"
              :class="content.title.styleClasses"
              v-html="sanitize(content.title.text)"
            />
            <h2
              v-if="content.title.type === 'plain'"
              :class="content.title.styleClasses"
              v-text="content.title.text"
            />
          </div>

          <div
            v-if="content.body !== null && content.body.type === 'html'"
            :class="content.body.styleClasses"
            v-html="sanitize(content.body.text)"
          />

          <slot v-if="hasDefaultSlot && index === slotIndex" />
        </mdb-col>
      </mdb-row>
    </div>
    <div v-else-if="section.type === 'custom'" class="w-100">
      <component
        :is="componentLoader"
        :section-name="section.name"
        :class="section.styleClasses"
        text-color="white"
      />
    </div>
    <slot name="footer" />
  </mdb-row>
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
    section() {
      return this.getSection(this.sectionName)
    },
    ...mapGetters({
      getSection: 'pages/sectionFindByName'
    }),
    componentLoader() {
      return () => import(`@/components/${this.section.component}.vue`)
    }
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
