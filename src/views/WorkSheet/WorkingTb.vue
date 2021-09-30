<template>
<div class="WorkingTrialbalance">
  <b-row class="mb-2">
    <b-col>
               </b-col>
      <b-col>
        <b-row >
                    <b-col class="text-center">
                    </b-col>
          <b-col class="border text-center">
            UnAdjusted TB
          </b-col>
                    <b-col class="border text-center">
            Ajustment
          </b-col>
                   <b-col class="border text-center">
            Adjusted TB
          </b-col>
          <b-col/>
        </b-row>
        <b-row>
                       <b-col class="text-right">
            Total Debit
          </b-col>
          <b-col class="border text-right">
            $0.00
          </b-col>
                    <b-col class="border text-right">
             $0.00
          </b-col>
                   <b-col class="border text-right">
             $0.00
          </b-col>
          <b-col/>
        </b-row>
               <b-row>
                       <b-col class="text-right">
        Total Credit
          </b-col>
          <b-col class="border text-right">
             $0.00
          </b-col>
                    <b-col class="border text-right">
             $0.00
          </b-col>
                   <b-col class="border text-right">
             $0.00
          </b-col>
          <b-col/>
        </b-row>
               <b-row>
                       <b-col class="text-right">
            Variance
          </b-col>
          <b-col class="border text-right">
             $0.00
          </b-col>
                    <b-col class="border text-right">
             $0.00
          </b-col>
                   <b-col class="border text-right">
             $0.00
          </b-col>
          <b-col/>
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
      <template #thead-top>
        <b-tr >
          <b-th colspan="2"><span class="sr-only text-center" >Name and ID</span></b-th>
          <b-th  class="text-center" colspan="2">Unadjusted TB</b-th>
          <b-th variant="light" colspan="2" class="text-center">Journal Entry</b-th>
          <b-th  class="text-center" colspan="2">Adjusted TB</b-th>
          <b-th variant="light" colspan="1"><span class="sr-only text-center" >Action</span></b-th>
        </b-tr>
      </template>
    </b-table>

</div>

</template>
<script>
export default {
  name: 'WorkingTrialbalance',
  data: () => ({
    fields: [
      { key: 'AccountNo', label: 'Account No.', class: 'cols-1 border' },
      { key: 'name', label: 'Name', class: 'cols-1 border' },
      { key: 'type1a', label: 'Debit', class: 'text-center' },
      { key: 'type1b', label: 'Credit', class: 'text-center' },
      { key: 'type2a', label: 'Debit', variant: 'light', class: 'text-right border-left' },
      { key: 'type2b', label: 'Credit', variant: 'light', class: 'text-right border-right' },
      { key: 'type3a', label: 'Debit', class: 'text-center' },
      { key: 'type3b', label: 'Credit', class: 'text-center' },
      { key: 'Action', label: 'Action', variant: 'light', class: 'text-center' }
    ],
    items: [
      { name: 'Stephen Hawking', id: 1, type1a: false, type1b: true, type2a: false, type2b: false, type3: false },
      { name: 'Johnny Appleseed', id: 2, type1: false, type2a: true, type2b: true, type2c: false, type3: false },
      { name: 'George Washington', id: 3, type1: false, type2a: false, type2b: false, type2c: false, type3: true },
      { name: 'Albert Einstein', id: 4, type1: true, type2a: false, type2b: false, type2c: true, type3: false },
      { name: 'Isaac Newton', id: 5, type1: true, type2a: true, type2b: false, type2c: true, type3: false }
    ]
  })
};
</script>
<style scoped>

</style>
