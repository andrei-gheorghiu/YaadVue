<template>
<b-modal id="SalaryCalculator" size="md" centered title="Salary Calculator">
   <template #modal-title> Salary Calculator <font-awesome-icon size="1x" :icon="['fas', 'calculator']"/></template>
    <b-tabs content-class="mt-3" align="center">
    <b-tab title="Amount" active><b-row class='mb-4'>
    <b-col class="text-right" cols="4" >
      Calculate:
    </b-col>
    <b-col class="text-center" cols="8">
            <b-form-radio-group
               id="radio-group-1"
                v-slot="{ ariaDescribedby }"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-options"
      ></b-form-radio-group>
    </b-col>
  </b-row>
<b-row class='mb-2'>
   <b-col class='text-right' cols="5"> Annual Net</b-col> <!---Drop down--->
    <b-col cols="6"><b-input/></b-col>
         </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="5"> Annual NIS Treshold</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
                <b-row class='mb-2'>
    <b-col class='text-right' cols="5"> Annual Tax Free Pay</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
                <b-row class='mt-4 mb-2 text-center'>
                  <b-col class='text-right' style="color:red" cols="3"> Gross</b-col>
        <b-col  cols="6"><b-input class="text-right" placeholder="0.00"/></b-col>
        <b-col class='text-right' style="color:red" cols="1"><b-btn v-b-tooltip.hover title="taxes" size="sm" variant="info"><font-awesome-icon size="1x" :icon="['fas', 'percent']"/></b-btn></b-col>
     </b-row></b-tab>
    <b-tab title="Taxes">
      <b-row>
        <b-col></b-col>
         <b-col></b-col>
          <b-col class="text-right"><b>Gross:</b></b-col>
           <b-col cols="5"><b-input/></b-col>
      </b-row>
      <b-row>
              <b-col class="text-right ml-3 mb-1">Rates</b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mb-1">
         <b-col class="text-right" style="height:30px">NIS:</b-col>
         <b-col><b-input style="height:30px"/></b-col>
          <b-col></b-col>
           <b-col cols="5"><b-input style="height:30px"/></b-col>
      </b-row>
        <b-row class="mb-1">
         <b-col class="text-right" style="height:30px">NHT:</b-col>
         <b-col><b-input style="height:30px"/></b-col>
          <b-col></b-col>
           <b-col cols="5"><b-input style="height:30px"/></b-col>
      </b-row>
            <b-row class="mb-1">
         <b-col class="text-right" style="height:30px">EDTAX:</b-col>
         <b-col><b-input style="height:30px"/></b-col>
          <b-col></b-col>
           <b-col cols="5"><b-input style="height:30px"/></b-col>
      </b-row>
            <b-row class="mb-2">
         <b-col class="text-right" style="height:30px" >PAYE:</b-col>
         <b-col><b-input style="height:30px"/></b-col>
          <b-col></b-col>
           <b-col cols="5"><b-input style="height:30px"/></b-col>
      </b-row>
        <b-row>
        <b-col></b-col>
         <b-col></b-col>
          <b-col class="text-right"><b>Net:</b></b-col>
           <b-col cols="5"><b-input/></b-col>
      </b-row>
    </b-tab>

  </b-tabs>

 </b-modal>
</template>

<script>

export default {
  name: 'SalaryCalculator',
  data: () => ({
    selected: 'first',
    options: [
      { text: 'Gross Salary', value: 'first' },
      { text: 'Net Salary', value: 'second' }
    ]
  })
};
</script>
<style scoped>

</style>
