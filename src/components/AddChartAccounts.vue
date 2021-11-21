<template>
<b-modal id="AddChartAccounts" size="md" centered title="Add Chart of Accounts">
  <!-----first tab--->
<div >
  <b-tabs content-class="mt-3" align="left">
<b-tab title="Basic">
             <b-row class='mb-2'>
    <b-col class='text-right' cols="4"> Account Number</b-col>
    <b-col cols="6"><b-input/></b-col>
         </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="4"> Account Name</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="4"> Account Type</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>

    </b-tab>
       <!-----Tab 2--->
    <b-tab title="Description">
             <b-row class='mb-2'>
        <b-col cols="4"></b-col>
         </b-row>
           <b-row class='mb-2'>
             <b-col>
          <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="5"
      max-rows="7"
    ></b-form-textarea>
             </b-col>
     </b-row>

    </b-tab>
     <!-----Final Tab tab--->
    <b-tab title="Controls">
             <b-row class='mb-2'>
    <b-col class='text-right' cols="4"> DP Restrictions</b-col>
    <b-col cols="6"><b-input/></b-col>
         </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="4"> Basis Controls Type</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>

    </b-tab>

    </b-tabs>
</div>

 </b-modal>
</template>

<script>

export default {
  name: 'AddChartAccounts',
  data: () => ({
    text: ''
  })
};
</script>
<style scoped>

</style>
