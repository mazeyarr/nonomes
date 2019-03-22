<template>
  <main :id="`about-info-${$route.params.info}`">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection :id="`about-info-${$route.params.info}-main-section`">
        <mdb-row center class="m-5">
          <mdb-col md="8">
            <article v-for="article in articles" :key="article.id">
              <h3 class="text-black">
                {{ article.title }}
              </h3>
              <hr>
              <p v-if="article.textType === 'text'" class="text-black" v-text="article.text" />
              <p v-if="article.textType === 'html'" class="text-black" v-html="sanitize(article.text)" />
            </article>
          </mdb-col>
        </mdb-row>
      </PageSection>
    </mdb-container>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageSection from '@/components/PageSection'
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'AboutOtherInfo',
  components: { PageSection, NavBar, mdbContainer, mdbRow, mdbCol },
  data() {
    return {
      title: 'Hello',
      articles: [
        {
          id: 1,
          title: 'Actief Reunist',
          textType: 'text',
          text:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },
        {
          id: 2,
          title: 'Stichting Reünisten van NoNoMes',
          textType: 'text',
          text:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },
        {
          id: 3,
          title: 'Reünist worden?',
          textType: 'html',
          text:
            'Om reünist van NoNoMes te worden kunt u mailen naar de Ab Actis op info@nonomes.nl'
        }
      ]
    }
  }
}
</script>
