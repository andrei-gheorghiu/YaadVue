<template>
  <b-modal id="AddEmployee" size="lg" centered title="Add Employee">
    <p class="md-1"><b>Employee Name</b>
      <b-input />
</p>

<!-----first tab--->
<div >
  <b-tabs content-class="mt-3" align="left">
    <b-tab title="Basic Info" active>

    <b-row class='mb-2'>
    <b-col class='text-right md-2' cols="3"> First Name  </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
    <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Last Name </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Phone Number </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Email Address </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>

            <b-row class='mb-1'>
    <b-col class='text-right' cols="4" style="color:red"> Status</b-col>
    <b-col cols="3"><b-form-checkbox v-model="checked" name="check-button" switch>
         Active
    </b-form-checkbox>
    </b-col>
  </b-row>
      </b-tab>
      <!-----Second tab--->
    <b-tab title="Address">
         <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Street 1 </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
        <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Street 2 </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
        <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> City </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
          <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> State</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
     <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Country</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
       <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Postal Code</b-col>
    <b-col cols="4"><b-input/></b-col>
  </b-row>

  </b-tab>
<!-----Third tab--->
   <b-tab title="Notes">
            <b-row class='mb-4'>
    <b-col class='text-right' cols="3"> Notes</b-col>
    <b-col cols="8">
        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="10"
      max-rows="10"
    ></b-form-textarea>

    </b-col>
 </b-row>
   </b-tab>

<!----- Fourth tab--->
  <b-tab title="Payroll">
              <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Position </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
        <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Base Pay </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
        <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Commission % </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
          <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Pay Frequency</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
     <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Report Group </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
       <b-row class='mb-2'>
    <b-col class='text-right' cols="3">Card/FRID# </b-col>
    <b-col cols="4"><b-input/></b-col>
  </b-row>
    </b-tab>
       <!-----fifthd tab--->
    <b-tab title="More Info">
               <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Item Image</b-col>
    <b-col cols="6">
<b-img src='../assets/img.png' width="150px" height="150px"></b-img>

    </b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Date of Birth</b-col>
    <b-col cols="6"><b-input/></b-col>
    <b-col class='text-left' cols="2"> <b-btn variant="transparent"><feather-icon size="1x" icon="PlusCircleIcon"/></b-btn></b-col>
  </b-row>
     <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Martial Status</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
<p class='border-top'/>
       <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Medical Leave per annum</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
       <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Vacation Leave per annum</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>

  </b-tab>

    </b-tabs>
</div>

  </b-modal>
</template>

<script>
export default {
  name: 'AddEmployee.vue',
  data: () => ({
    checked: true,
    text: ''
  })
  /**  data () {
    return {

      checked: true :'Active'
      else 'inactive'
    };
  }
*/
};
</script>

<style scoped>

</style>
