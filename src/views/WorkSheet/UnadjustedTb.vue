<template>
<div class="UnadjustedTrialbalance">
  <b-row class="mb-1">
    <b-col>
       </b-col>
      <b-col>
        <b-row >
          <b-col class="text-right">
            Total Debit
          </b-col>
                    <b-col class="border text-right">
            $0.00
          </b-col>
          <b-col/>
        </b-row>
        <b-row >
          <b-col class="text-right">
            Total Credit
          </b-col>
                    <b-col class="border text-right">
            -$0.00
          </b-col>
          <b-col/>
        </b-row>
        <b-row class="mb-3">
              <b-col class="text-right">
            Variance
          </b-col>
                    <b-col class="border text-right">
            $0.00
          </b-col>
          <b-col class="text-right"> </b-col>
        </b-row>
      </b-col>
          </b-row>
      <b-row >
        <b-col class="text-right mr-4" style="color:red font-size: 0.8rem">
        <b><i>Net profit: $1,000,000.00</i></b>
        </b-col>
      </b-row>

      <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
    >

    </b-table>

</div>

</template>
<script>
export default {
  name: 'UnAdjustedTrialbalance',
  data: () => ({
    fields: [
      { key: 'AccountNo', label: 'Account No.', class: 'cols-1 border' },
      { key: 'Acount Description', label: 'Account Decription', class: 'cols-1 border' },
      { key: 'type1a', label: 'Debit', class: 'text-center border' },
      { key: 'type1b', label: 'Credit', class: 'text-center cols-2 border', variant: 'light' },
      { key: 'type2c', label: 'Mapping', class: 'text-center border' },
      { key: 'type2e', label: 'Grouping', class: 'text-center' }
    ]

  })
};
</script>
<style scoped>

</style>
