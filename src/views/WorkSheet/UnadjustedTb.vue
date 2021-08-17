<template>
<div class="UnadjustedTrialbalance">
  <b-row class="mb-2 mt-4">
    <b-col>
      <h5 class="mb-1">UnAdjusted Trial Balance</h5>
        <h5 class="mb-1">Entity Name</h5>
    <h6 class="mb-1"> Financial Year Ended December 31, 2021</h6>
          </b-col>
      <b-col>
        <b-row >
          <b-col class="border text-center">
            <b>Completed By:</b>
          </b-col>
                    <b-col class="border text-center">
            <b>Reviewed By:</b>
          </b-col>
          <b-col/>
        </b-row>
        <b-row class="mb-3">
              <b-col class="border text-center">
            Harry Brown
          </b-col>
                    <b-col class="border text-center">
            Marlon Phillips
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
