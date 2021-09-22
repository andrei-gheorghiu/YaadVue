<template>
<div class="Schedule">
  <b-row class="mb-2 mt-4">
    <b-col  cols="3">
        <h5 class="mb-1">Entity Name</h5>
    <h6 class="mb-1"> Financial Year Ended December 31, 2021</h6>
    <h4 class="mb-1">Schedule </h4>
      </b-col>
      <b-col class="mt-5" cols="2">
        <b><b-input class="text-center"/></b>
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
        <b><i>Net Adjustments: $1,000,000.00</i></b>
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
  name: 'Schedule',
  data: () => ({
    fields: [
      { key: 'AccountNo', label: 'Account No.', class: 'cols-1 border' },
      { key: 'Acount Description', label: 'Account Decription', class: 'cols-1 border' },
      { key: 'type1a', label: 'UnAdjusted Dec. 31. 20', class: 'text-center' },
      { key: 'type1b', label: 'Adjustment', class: 'text-center cols-2', variant: 'light' },
      { key: 'type2a', label: 'Adjusted Dec. 31. 20', class: 'text-right border' },
      { key: 'type2c', label: 'Prior Year Dec. 31. 19', class: 'text-right border' },
      { key: 'type2d', label: 'Status', class: 'text-right border' },
      { key: 'type2e', label: 'icon="paperclipIcon"', icon: 'paperclipIcon', class: 'text-right border' },
      { key: 'type2f', label: 'Ref', class: 'text-right border' }
    ]
  })
};
</script>
