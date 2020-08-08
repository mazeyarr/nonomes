<template>
  <main :id="`about-main`">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <PageSection :id="`about-main`">
        <mdb-row center class="m-5">
          <mdb-col md="8">
            <article class="mb-3">
              <h1 class="text-black">
                Lid worden tijdens Corona
              </h1>

              <p>
                Wil jij van je studententijd een tijd maken om nooit meer te vergeten? Schrijf je dan in! Houd onze socials in de gaten om digitaal de sfeer te proeven. Wil je meer informatie of heb je nog vragen? Stuur dan een mail naar info@nonomes.nl of app Ruby (0626814198)!
              </p><br>

              <p>
                Vanwege de situatie omtrent het coronavirus zal de kennismakingstijd anders verlopen. Momenteel wordt er nog onderzocht hoe de kennismakingstijd precies plaats zal vinden. Houd hierbij voorlopig wel rekening met het weekend van 12 en 13 september. Verdere informatie zal zo snel mogelijk op deze pagina geplaatst worden. Houd deze dus goed in de gaten. Na inschrijving zal je natuurlijk via de mail op de hoogte worden gehouden van de vorderingen omtrent de Coronasituatie.
              </p><br><br>

              <h4 class="text-black">
                UPDATE <small>6 augustus 2020</small>
              </h4>

              <p>Uit de persconferentie van 6 augustus is gebleken dat de introductieperiode dit jaar op een andere manier zal verlopen dan normaal. Omdat dit nieuws allemaal vrij recent is, is er nog veel onduidelijkheid.</p>

              <p>Momenteel moeten wij afwachten wat de concrete plannen worden, maar wij zijn hard bezig om vooralsnog iedereen de mogelijkheid te geven om kennis te maken met onze mooie vereniging.</p>

              <p>Hou onze website en sociale media in de gaten om op de hoogte gehouden te worden. Bij verdere vragen kan er een mail gestuurd worden naar
                <a href="mailto:info@nonomes.nl.">info@nonomes.nl.</a>
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
  name: 'AboutCorona',
  head() {
    return {
      title: 'Lid worden tijdens Corona',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Wil jij van je studententijd een tijd maken om nooit meer te vergeten? Schrijf je dan in! Houd onze socials in de gaten om digitaal de sfeer te proeven. Wil je meer informatie of heb je nog vragen? Stuur dan een mail naar info@nonomes.nl of app Ruby (0626814198)!`
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
