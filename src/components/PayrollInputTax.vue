<template>
<b-modal id="PayrollInputTax" size="lg" centered title="Payroll Input Tax">
  <b-row class='mb-2'>
   <b-col class='text-right' cols="4"> Payroll Tax Name</b-col> <!---Drop down--->
    <b-col cols="6"><b-input/></b-col> <!---Drop down--->

         </b-row>
           <b-row class='mb-1'>
       <b-col class="text-center">
            <b-form-radio-group
        id="radio-group-1"
        v-model="selected"
        :options="options"
        name="radio-options"
      ></b-form-radio-group>
    </b-col>
     </b-row>
     <div class="border-top"/>
                      <b-table striped hover :items="filteredData" :fields="fields" :small="true"
                    class="Mx-4"
                    >

        </b-table>
 </b-modal>
</template>

<script>

export default {
  name: 'PayrollInputTax',
  data: () => ({
    selected: 'first',
    filteredData: [],
    options: [
      { text: 'Current', value: 'first' },
      { text: 'Show History', value: 'second' }
    ],
    fields: [
      'Tax Name', 'Rate', 'Annual MINIMUM Taxable Emoluments', 'Annual MAXIMUM Taxable Emoluments', 'Effective', 'Status'
    ]
  })
};
</script>
<style scoped>

</style>
