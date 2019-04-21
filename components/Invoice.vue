<template>
  <PageSection :id="`order-invoice-${order.uuid}`" class="pt-5">
    <mdb-col md="12">
      <section class="mb-4">
        <mdb-card>
          <mdb-card-body class="d-flex justify-content-between">
            <h4 class="h4-responsive mt-3">
              {{ order.name }}
            </h4>
            <div>
              <mdb-btn color="primary" icon="print" iconRight @click="print">
                Print
              </mdb-btn>
            </div>
          </mdb-card-body>
        </mdb-card>
      </section>
      <section class="mb-4">
        <mdb-card>
          <mdb-card-body>
            <mdb-row>
              <mdb-col md="12">
                <figure>
                  <img class="invoice-logo hoverable" src="/images/NoNoMes-Wapen-Clean.png" alt="NoNoMes Wapen">
                </figure>
              </mdb-col>
              <mdb-col md="6" class="text-left border-right">
                <h2 class="h2-responsive text-black mb-4">
                  S.V.A.A. Nomen Non Magnum est
                </h2>
                <p>Postadres: Warmoesstraat 119-1</p>
                <p>1012 JA Amsterdam</p>
                <p>Bezoekadres: Warmoesstraat 121 1012 JA Amsterdam</p>
                <p>Telefoon: <a href="tel:020-6273067">020-6273067</a></p>
                <p>Mail: <a href="mailto:info@nonomes.nl">info@nonomes.nl</a></p>
              </mdb-col>

              <mdb-col md="6" class="text-right">
                <h4 class="h4-responsive">
                  <small>Bestel Nr.</small>
                  <br>
                  <strong>
                    <span class="blue-text">#{{ order.uuid }}</span>
                  </strong>
                </h4>
                <p>{{ order.consumer_name }}</p>
                <p>{{ order.consumer_bank_account }}</p>
                <p>{{ order.api_createdAt }}</p>
              </mdb-col>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>
      </section>
      <section class="mb-4">
        <mdb-card>
          <mdb-card-body>
            <mdb-row>
              <mdb-col>
                <mdb-tbl responsive>
                  <mdb-tbl-head color="primary-color" textWhite>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Aantal</th>
                      <th>Prijs</th>
                      <th>Totaal</th>
                    </tr>
                  </mdb-tbl-head>
                  <mdb-tbl-body>
                    <tr scope="row">
                      <th scope="row">
                        1
                      </th>
                      <td>{{ order.name }}</td>
                      <td>1</td>
                      <td>{{ order.amount | withZeros }}</td>
                      <td>{{ order.amount | withZeros }}</td>
                    </tr>
                  </mdb-tbl-body>
                </mdb-tbl>
                <ul class="list-unstyled text-right">
                  <li>
                    <strong>TOTAAL:</strong>
                    <span class="float-right ml-3">{{ order.currency | currency }} {{ order.amount | withZeros }}</span>
                  </li>
                </ul>
              </mdb-col>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>
      </section>
    </mdb-col>
  </PageSection>
</template>

<script>
import PageSection from '@/components/PageSection'
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbBtn,
  mdbTbl,
  mdbTblHead,
  mdbTblBody
} from 'mdbvue'
export default {
  name: 'Invoice',
  components: {
    PageSection,
    mdbBtn,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbTbl,
    mdbTblHead,
    mdbTblBody
  },
  filters: {
    currency(currency) {
      switch (currency) {
        case 'DOLLAR':
          return '$'
        case 'EUR':
          return '€'
        default:
          return '$$'
      }
    },
    withZeros(amount) {
      return amount.toFixed(2)
    }
  },
  props: {
    order: {
      type: Object,
      required: true,

      amount: {
        type: Number,
        required: true
      },

      api_canceledAt: {
        type: String,
        required: false
      },

      api_createdAt: {
        type: String,
        required: true
      },

      api_expiresAt: {
        type: String,
        required: true
      },

      api_failedAt: {
        type: String,
        required: true
      },

      api_paidAt: {
        type: String,
        required: true
      },

      consumer_name: {
        type: String,
        required: true
      },

      consumer_bank_account: {
        type: String,
        required: true
      },

      consumer_bic: {
        type: String,
        required: true
      },

      countryCode: {
        type: String,
        required: true
      },

      created_at: {
        type: String,
        required: true
      },

      currency: {
        type: String,
        required: true
      },

      deleted_at: {
        type: String,
        required: true
      },

      description: {
        type: String,
        required: true
      },

      locale: {
        type: String,
        required: true
      },

      mode: {
        type: String,
        required: true
      },

      name: {
        type: String,
        required: true
      },

      status: {
        type: Object,
        required: false,

        validated: {
          type: Boolean,
          required: true
        },
        success: {
          type: Boolean,
          required: true
        },
        warning: {
          type: Boolean,
          required: true
        },
        error: {
          type: Boolean,
          required: true
        },
        incomplete: {
          type: Boolean,
          required: true
        },
        waiting: {
          type: Boolean,
          required: true
        },
        waitingForPayment: {
          type: Boolean,
          required: true
        },
        paid: {
          type: Boolean,
          required: true
        },
        aborted: {
          type: Boolean,
          required: true
        },
        expired: {
          type: Boolean,
          required: true
        },
        failed: {
          type: Boolean,
          required: true
        },
        logged: {
          type: Boolean,
          required: true
        },
        previous_change: {
          type: Boolean,
          required: true
        }
      },

      uuid: {
        type: String,
        required: true
      }
    }
  },
  methods: {
    print() {
      this.$htmlToPaper(`order-invoice-${this.order.uuid}`)
    }
  }
}
</script>

<style scoped>
</style>
