<template>
  <main :id="`about-info-${$route.params.info}`">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection :id="`about-info-${$route.params.info}-main-section`">
        <mdb-row center class="m-5">
          <mdb-col md="8">
            <ArticleContent
              v-for="articleContent in content"
              :key="articleContent.id"
              :article="articleContent"
            />
          </mdb-col>
        </mdb-row>
      </PageSection>
    </mdb-container>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageSection from '@/components/PageSection'
import ArticleContent from '@/components/ArticleContent'
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'AboutOtherInfo',
  components: {
    PageSection,
    NavBar,
    mdbContainer,
    mdbRow,
    mdbCol,
    ArticleContent
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get(`/article/${params.id}`)
    return data
  }
}
</script>
