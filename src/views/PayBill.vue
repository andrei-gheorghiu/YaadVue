<template>
<div>
  <b-container :fluid="true" class="paybill">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Pay Bill</h1>
        </div>
      </b-col>

                <b-col class="text-right" cols="6">
                <b-button-group>
              <b-button size="sm" variant="outline-secondary">Mark All</b-button>
              <b-button size="sm" class="mr-4" variant="outline-secondary">Unmark All</b-button>
                         </b-button-group>
                           <b-button size="sm" variant="info" class="mr-2 ml-4">Pay Selected Bills</b-button>
                           <b-button size="sm" variant="primary">Cancel</b-button>

                           </b-col>

      <b-col class="text-right" cols="4">
          <b-button size="sm" variant="transparent"><feather-icon size="1x" icon="PaperclipIcon" />Attached File</b-button>
<dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
      </b-col>
    </b-row>
      </b-container>
  <p class="border-top"></p>
    <!-----Row zero--->
  <b-row class="mb-1">
    <b-col class="text-right" style="font-size: 0.9rem;"><b>
         Filter By
    </b></b-col>
     <b-col class="text-left" style="font-size: 0.9rem;">
                 <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder="All Vendor"
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
    </b-col>
    <b-col>
    </b-col>
    <b-col>
   </b-col>
    <b-col>
     </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
             </b-col>
    <b-col class="text-left">
           </b-col>
</b-row>
<!-----First Row--->
<b-row>
    <b-col class="text-right" style="font-size: 0.9rem;"><b>
         Sort By
    </b></b-col>
     <b-col class="text-left" style="font-size: 0.9rem;">
                 <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder="Due Date"
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
    </b-col>
    <b-col>
    </b-col>
    <b-col>
   </b-col>
    <b-col>
     </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Amount Due</b>
    </b-col>
    <b-col class="border text-left">
         $10,000.00
    </b-col>
</b-row>
<!-----Second Row--->
<b-row>
    <b-col class="text-right" style="font-size: 0.9rem;">
             </b-col>
     <b-col>
       </b-col>
    <b-col>
    </b-col>
    <b-col>
    </b-col>
    <b-col>
     </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Discount Used</b>
    </b-col>
    <b-col class="border">
         $10.000.00
    </b-col>
</b-row>
<!-----Third Row--->
<b-row>
<b-col class="text-Left border-bottom"  style="font-size: 0.9rem;  color:red">
         <b>PAYMENT</b>
</b-col>
     <b-col class="border-bottom">
    </b-col>
    <b-col class="border-bottom">
    </b-col>
<b-col class="text-center"  style="font-size: 0.9rem;  color:red">
         <i><b>Discount & Credit Info.</b></i>
    </b-col>
    <b-col class="text-left"  style="font-size: 0.9rem;  color:red">
        <i><b></b></i>
    </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Credit Used</b>
    </b-col>
    <b-col class="border">
         $10,000.00
    </b-col>
</b-row>
<!-----fourth Row--->
<b-row>
    <b-col class="text-left" style="font-size: 0.9rem;"><b>
         Date
    </b>
    </b-col>
     <b-col class="text-left" style="font-size: 0.9rem;"><b>
         Method
    </b>
    </b-col>
    <b-col class="text-left"  style="font-size: 0.9rem;">
        <b> Account</b>
    </b-col>
    <b-col class="text-center"  style="font-size: 0.9rem;">
         <i><b>Sugg. Discount</b></i>
    </b-col>
    <b-col class="text-center"  style="font-size: 0.9rem;">
          <i><b>Total Credit Available</b></i>
    </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Payment Applied</b>
    </b-col>
    <b-col class="border">
         $10,000.00
    </b-col>
</b-row>
<!-----six Row--->
<b-row>
    <b-col class="text-left" style="font-size: 0.9rem;">
    <b-input-group>
        <b-form-input
        id="PaybillPaymentDateInput"
        style="height:30px"
        v-model="value"
        type="date"
        placeholder="yyyy-mm-dd"
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
     </b-col>
     <b-col class="text-left" style="font-size: 0.9rem;">
    <b-input-group>
        <b-form-input
        id="PaybillPaymentMethodInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder="Cheque"
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
    </b-col>
      <b-col class="text-left" style="font-size: 0.9rem;">
    <b-input-group>
        <b-form-input
        id="PaybillPaymentAccountInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder="Cheque A/C 4567"
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
    </b-col>
  <b-col class="text-center"  style="font-size: 0.9rem;  color:red">
         <b>$50,000.00</b>
    </b-col>
  <b-col class="text-center"  style="font-size: 0.9rem; color:red">
         <b>$50,000.00</b>
    </b-col>
     <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Balance Due</b>
    </b-col>
    <b-col class="border">
         $10,000.00
    </b-col>
</b-row>
<!-----Row five--->
<b-row class="mb-2">
    <b-col class="text-right" style="font-size: 0.8rem;" cols="3">
        <b-form-checkbox class="ml-4" > <i>To be printed</i></b-form-checkbox>
    </b-col>
     <b-col class="text-right" style="font-size: 0.8rem;">
          <b> Account balance: <i style="color:red"> $100,000,000.00</i></b>
        </b-col>
    <b-col class="text-left"  style="font-size: 0.7rem;">
                           </b-col>
    <b-col class="text-center"  style="font-size: 0.7rem;" >
              </b-col>
    <b-col class="text-left"  style="font-size: 0.7rem; color:red">
             </b-col>
    </b-row>
  <p class="border-top"></p>

<b-row>
    <!-----Row zero--->
     <b-col class="text-Left mb-1" style="font-size: 0.9rem;">
  <b>SELECT BILLS TO BE PAID</b>
     </b-col>
          <b-col class="text-left mb-1" style="font-size: 0.9rem;" cols="2.5">
      <b-form-group label="" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="optionsbillstobepaid"
        :aria-describedby="ariaDescribedby"
        name="plain-inline"
        plain
      ></b-form-radio-group>
      </b-form-group>
     </b-col>
    <b-col class="text-left mb-1" style="font-size: 0.9rem;" cols="1.5">
            <b-input-group>
        <b-form-input
        id="PaybillPaymentDateInput"
        style="height:30px"
        v-model="value"
        type="date"
        placeholder="yyyy-mm-dd"
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
    </b-col>
    <b-col class="text-left mb-1" />
</b-row>
  <!----Reconciliation table--->
  <b-row>
              <b-col class="ml-4 border">
    <b-table striped hover :items="filteredData" :fields="fields" :small="true" class="Mx-4">
        </b-table></b-col>

  </b-row>
  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    fields: ['#', 'Date Due', 'Vendor', 'REF No.', 'Amount Due', 'Disc. Used', 'Credit. Used', 'Amount to Pay' /* icon */
    ],
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Set Credit', icon: 'FileMinusIcon' },
        { name: 'Set Discount', icon: 'PercentIcon' },
        null,
        { name: 'Document Centre', icon: 'ArchiveIcon' },
        null,
        { name: 'Upload', icon: 'UploadIcon' }
      ]
    }].concat(userDropdown),
    selected: 'first',
    optionsbillstobepaid: [
      { text: 'Show All Bills', value: 'first' },
      { text: 'Due on or Before', value: 'second' }
    ]
  })
};
</script>
<style lang="scss">
.journal {
  .table-header-borders {
    height: 34px;
  }
  .table-container {
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    height: 400px;

    .ps {
      height: 400px;
    }

    th {
      position: sticky;
      top: 0;
      background-color: white;
    }

    &:before {
      content: '';
      position: absolute;
      top: 60px;
      width: 100%;
      left: 0;
    }

    .btn-space {
      margin-right: 5px;
    }
  }
}
