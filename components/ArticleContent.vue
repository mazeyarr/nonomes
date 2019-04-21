<template>
  <article v-show="article.display !== 'none'" class="pt-5 pt-md-0">
    <mdb-btn
      v-show="article.display === 'folded'"
      :class="article.display === 'folded' ? 'd-inline-block btn-question' : ''"
      outline="success"
      @click="display = !display"
    >
      <mdb-icon :icon="display ? 'caret-down' : 'caret-right'" size="1x" />
    </mdb-btn>
    <h3
      class="d-inline-block text-black"
      :class="article.display === 'folded' ? 'fold-able' : ''"
      @click="article.display === 'folded' ? display = !display : false"
    >
      {{ article.title }}
    </h3>
    <hr :class="article.display === 'folded' ? 'd-none' : ''">
    <transition-group name="page-intro-slide-left">
      <mdb-icon
        v-if="display && article.display === 'folded'"
        :key="`icon-article-${article.id}`"
        icon="quote-left"
        size="2x"
        class="d-block ml-5 mb-2 mt-2"
      />
      <p
        v-if="article.type === 'plain'"
        v-show="display"
        :key="`text-article-${article.id}`"
        class="text-black ml-5 pl-3"
        v-text="article.text"
      />
      <p
        v-if="article.type === 'html'"
        v-show="display"
        :key="`text-article-${article.id}`"
        class="text-black"
        v-html="sanitize(article.text)"
      />
    </transition-group>
    <hr :class="article.display !== 'folded' ? 'd-none' : ''">
  </article>
</template>

<script>
import { mdbBtn, mdbIcon } from 'mdbvue'

export default {
  name: 'ArticleContent',
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.article.text}`
        }
      ]
    }
  },
  components: {
    mdbBtn,
    mdbIcon
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      display: true
    }
  },
  mounted() {
    switch (this.article.display) {
      case 'none':
      case 'folded':
        this.display = false
        break
      default:
        this.display = true
    }
  }
}
</script>

<style scoped>
.fold-able {
  cursor: pointer;
}
.btn-question {
  vertical-align: middle;
  font-size: 25px;
}
</style>
