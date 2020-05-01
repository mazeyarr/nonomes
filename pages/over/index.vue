<template>
  <main :id="`about-main`">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection :id="`about-main`">
        <mdb-row center class="m-5">
          <mdb-col md="8">
            <article class="mb-3">
              <h1 class="text-black">
                Geschiedenis
              </h1>

              <p>
                S.V.A.A. Nomen Non Magnum est is opgericht op 25 maart 1988. De vereniging is ontstaan uit een vraag naar een sterkere verbondenheid tussen studenten van de Amsterdamsche Academie. De naam, wat letterlijk betekent ‘de naam is niet belangrijk’, vloeide voort uit het feit dat de oprichters zich niet konden vinden in de bestaande studentenverenigingen en hun bijbehorende tradities.
                <br><br>
                In de jaren die volgden groeide NoNoMes sterk als vereniging waarbij het gros van de nieuwe studenten van de Amsterdamsche Academie zich aansloot bij NoNoMes. Op 29 april 1992 betrok de vereniging haar eigen sociëteit De Heilige Zeug aan de Warmoesstraat 121.
                <br> <br>
                Dit pand werd in 1999 gekocht door de vereniging. Toen de Amsterdamsche Academie ophield met bestaan werd NoNoMes een onafhankelijke studentenvereniging. Na enkele jaren van transitie begon de vereniging erg te groeien. In 2012 was de sociëteit dan ook toe aan een verbouwing om zo te fungeren als een betere borrel locatie voor het groeiende aantal leden.
                <br><br>
                Tegenwoordig heeft NoNoMes zo’n 300 leden en behoort het tot een van de grote vijf Amsterdamse gezelligheidsverenigingen dat aangesloten is bij de Amsterdamse Kamer van Verenigingen. Daarnaast is NoNoMes ook lid van de Landelijke Kamer van Verenigingen.
              </p>
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
  name: 'AboutMain',
  head() {
    return {
      title: 'Geschiedenis',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `S.V.A.A. Nomen Non Magnum est is opgericht op 25 april 1988 en is ontstaan uit een vraag naar een sterkere verbondenheid tussen studenten van de Amsterdamsche Academie. De naam, wat letterlijk betekent ‘de naam is niet belangrijk’, vloeide voort uit het feit dat de oprichters zich niet konden vinden in bestaande studentenvereniging en de bijbehorende tradities. In de jaren die volgden groeide NoNoMes sterk als vereniging waarbij het gros van de nieuwe studenten van de Amsterdamsche Academie zich aansloot bij NoNoMes.`
        }
      ]
    }
  },
  components: {
    PageSection,
    NavBar,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>
