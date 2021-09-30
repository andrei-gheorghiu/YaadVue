<template>
<div class="adjustingjournal">
  <b-row class="mb-2">
    <b-col>
          </b-col>
          <b-col>
             <b-button size="sm" class="mr-2" variant="info" v-b-modal.NewAdjJournal><feather-icon size="1x" icon="PlusSquareIcon" /> New</b-button>
              <b-button size="sm" class="mr-2" variant="success"><feather-icon size="1x" icon="EditIcon" /> Edit</b-button>
               <b-button size="sm" variant="danger"><feather-icon size="1x" icon="MinusSquareIcon" /> Delete</b-button>
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
        <b-row class="mb-2">
              <b-col class="text-right">
            Total Credit
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
  name: 'AdjustingJournal',
  data: () => ({
    fields: [
      { key: 'Journal No', label: 'Journal No.', class: 'cols-1 border' },
      { key: 'AccountNo', label: 'Account No.', class: 'cols-1 border' },
      { key: 'Acount Description', label: 'Account Decription', class: 'cols-1 border' },
      { key: 'type1a', label: 'Debit', class: 'text-center border' },
      { key: 'type1b', label: 'Credit', class: 'text-center cols-2 border', variant: 'light' }
    ]

  })
};
</script>
<style scoped>

</style>
