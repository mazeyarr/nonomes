<template>
  <component
    :is="componentLoader"
    :element="element"
  />
</template>

<script>
export default {
  name: 'FormElement',
  props: {
    element: {
      type: Object,
      required: true
    }
  },
  computed: {
    componentLoader() {
      switch (this.element.type) {
        case 'text':
        case 'email':
        case 'radio':
        case 'tel':
        case 'zipCode':
        case 'password':
        case 'checkbox':
          return () => import('@/components/form/_elements/Input.vue')
        case 'gender':
          return () => import('@/components/form/_elements/Gender.vue')
        case 'datepicker':
          return () => import('@/components/form/_elements/Datepicker.vue')
        default:
          return () => import('@/components/form/_elements/Input.vue')
      }
    }
  }
}
</script>

<style scoped>
</style>
