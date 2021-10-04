<template>
  <b-modal id="modal-center" size="lg" centered title="Add Inventory Item">
    <p class="md-1"><b>Item Name</b>
      <b-input />
</p>

<!-----first tab--->
<div >
  <b-tabs content-class="mt-3" align="left">
    <b-tab title="Basic Info" active><p>
  <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Type </b-col>
    <b-col cols="6">
    <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-radio-group>

    </b-col>
      </b-row>
    <b-row class='mb-2'>
    <b-col class='text-right md-2' cols="3"> Department  </b-col>
    <b-col cols="6"><b-input></b-input></b-col>
  </b-row>
    <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Measure </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Price</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Cost </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
        <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> UPC </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
        <b-row class='mb-4'>
    <b-col class='text-right' cols="3"> Tax </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
  <a class="border-top"></a>
          <b-row class='mb-1'>
    <b-col class='text-right' cols="4" style="color:red"> Quantity on Hand </b-col>
    <b-col cols="3"><b-input/></b-col>
    <b-col class='text-left' style="color:red" cols="1"> Status</b-col>
    <b-col><b-form-checkbox v-model="checked" name="AddInvcheck-button" switch>
         Active
    </b-form-checkbox>
    </b-col>
  </b-row>
      </p></b-tab>
      <!-----Second tab--->
    <b-tab title="More Info">
       <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Item Description</b-col>
    <b-col cols="6">
        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="3"
    ></b-form-textarea>

    </b-col>
 </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Vendor</b-col>
    <b-col cols="6"><b-input/></b-col>
    <b-col class='text-left' cols="2"> <b-btn variant="transparent"><feather-icon size="1x" icon="PlusCircleIcon"/></b-btn></b-col>
  </b-row>
     <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Manufacturer</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
       <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Reorder Point</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
       <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Item Image</b-col>
    <b-col cols="6">
<b-img src='../assets/img.png' width="150px" height="150px"></b-img>

    </b-col>
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
      rows="14"
      max-rows="14"
    ></b-form-textarea>

    </b-col>
 </b-row>
   </b-tab>

<!----- Fourth tab--->
  <b-tab title="Pricing">
         <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Regular Price</b-col>
    <b-col cols="6"><b-input/></b-col>
         </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> WholeSale Price</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Sales Price</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
    </b-tab>
     <!-----Final Tab tab--->
    <b-tab title="Margins">
             <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Price Margin</b-col>
    <b-col cols="6"><b-input/></b-col>
         </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Mark-up</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Contribution Margin</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>

    </b-tab>

    </b-tabs>
</div>

  </b-modal>
</template>

<script>
export default {
  name: 'AddInventoryItem.vue',
  /* data: () => ({
    fields: {
      Type: { type: 'text', model: '' },
      Department: { type: 'text', model: '' },
      Item_Description: { type: 'text', model: '' },
      Size: { type: 'text', model: '' },
      Attributes: { type: 'number', model: '' },
      Tax: { type: 'text', model: '' },
      UPC: { type: 'text', model: '' }
    }
  }) */
  data () {
    return {
      selected: 'Yes',
      checked: true,
      text: '',
      options: [
        { item: 'Yes', name: 'Inventory' },
        { item: 'No', name: 'Non Inventory' }
      ]
    };
  }
};
</script>

<style scoped>
 ::v-deep .tab-content {
   min-height: 385px;
 }
</style>
