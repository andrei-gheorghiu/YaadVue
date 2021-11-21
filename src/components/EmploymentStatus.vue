<template>
<div>
    <b-modal size="lg" id="EmploymentStatus" centered title="Employment Status">
    <span class="my-2">
      <b-row>
       <h5 class="ml-4"> JOHN BROWN</h5>
      </b-row>
    <b-row>
      <b-col class="text-right mb-2" cols="3">Current Position:</b-col>
     <b-col cols="4"><b>SERVER</b></b-col>
      <b-col class="text-right" cols="3"><b-btn block size="sm">Close</b-btn></b-col>

      </b-row>
         <b-row class=mt-2>
      <b-col class="text-right mb-1" cols="3">Cost Center Name:</b-col>
      <b-col cols="4"><b>**NAME**</b></b-col>
      <b-col class="text-right" cols="3"><b-btn block variant="info">make INACTIVE</b-btn></b-col>
         </b-row>
              <b-row>
      <b-col class="text-right mb-1" cols="3"><b-btn variant="trasparent" size="sm" class=""><font-awesome-icon size="1x" :icon="['fas', 'book']"/> Job Description</b-btn></b-col>
      <b-col cols="7"></b-col>
      <b-col></b-col>
      </b-row>

    </span>
    <b-card class="mr-2 mb-1" style="max-width: 800px; min-length: 500px;" bg-variant="light" text-variant="white" title="" >
      <b-card bg-variant="transparent" text-variant="primary">
      <b-card-text>
        <!-------radio buttons--->
     <b-row class='mb-1'>
       <b-col class='text-right' text-variant="primary" cols="3"> Status:</b-col>
       <b-col cols="8">
             <b-form-group  v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="radio-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-options"
      ></b-form-radio-group>
    </b-form-group>
       </b-col>
   </b-row>
     <!-------dropdown--->
     <b-row class='mb-1'>
       <b-col class='text-right' text-variant="primary" cols="3"> Action:</b-col>
       <b-col cols="6"> <b-input></b-input></b-col>
       <b-col  class='text-left'><b-btn size="sm" v-b-tooltip.hover title="Add" variant="transparent" ><font-awesome-icon size="1x" :icon="['fas', 'plus']"/></b-btn></b-col>
   </b-row>
        <!-------date--->
     <b-row class='mb-1'>
       <b-col class='text-right' text-variant="primary" cols="3"> Action Date:</b-col>
       <b-col cols="4"> <b-input type="date"></b-input></b-col>
   </b-row>
        <!------Comment section--->
                    <b-row class='mb-1'>
    <b-col class='text-right' text-variant="primary" cols="3"> Comment</b-col>
    <b-col cols="8">
        <b-form-textarea
        bg-variant="secondary"
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="4"
      max-rows="4"
    ></b-form-textarea>

    </b-col>
 </b-row>
<!-------last part--->
     <b-row class='mb-2'>
       <b-col class='text-right' text-variant="primary" cols="3"> Expire Date:</b-col>
       <b-col cols="8"> <b-form-checkbox>Never Expire</b-form-checkbox></b-col>
   </b-row>

    </b-card-text>
    </b-card>
    </b-card>
  </b-modal>
</div>
</template>
<script>
export default {
  name: 'EmploymentStatus.vue',
  data () {
    return {
      selected: 'first',
      text: '',
      options: [
        { text: 'Active', value: 'first' },
        { text: 'Inactive', value: 'second' }

      ]
    };
  }
};
</script>
