<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Reconcilation</h1>
        </div>
      </b-col>

                <b-col class="text-right">
                <b-button-group>
              <b-button size="sm" variant="outline-secondary">Mark All</b-button>
              <b-button size="sm" class="mr-4" variant="outline-secondary">Unmark All</b-button>
                         </b-button-group>
                           <b-button size="sm" variant="info" class="mr-2 ml-4">Reconcile Now</b-button>
                           <b-button size="sm" variant="primary">Leave</b-button>

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
<b-row>
    <!-----Row zero--->
     <b-col class="text-right" style="font-size: 0.9rem;">
  <b-form-checkbox class="ml-4" > <i>This period only</i></b-form-checkbox>
     </b-col>
</b-row>
<!-----First Row--->
<b-row>
    <b-col class="text-right" style="font-size: 0.9rem;"><b>
         For Period
    </b></b-col>
     <b-col class="text-left" style="font-size: 0.9rem;">
    January 25, 2021
    </b-col>
    <b-col>
    </b-col>
    <b-col>
   </b-col>
    <b-col>
     </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Beginning balance</b>
    </b-col>
    <b-col class="border text-left">
         $10,000.00
    </b-col>
</b-row>
<!-----Second Row--->
<b-row>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Bank Account:</b>
    </b-col>
     <b-col>
    Checking A/C 4567
    </b-col>
    <b-col>
    </b-col>
    <b-col>
    </b-col>
    <b-col>
     </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Ending Balance</b>
    </b-col>
    <b-col class="border">
         $10.000.00
    </b-col>
</b-row>
<!-----Third Row--->
<b-row>
    <b-col>
    </b-col>
     <b-col>
    </b-col>
    <b-col>
    </b-col>
<b-col class="text-center"  style="font-size: 0.9rem;  color:red">
         <i><b>Items marked Cleared</b></i>
    </b-col>
    <b-col>
    </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Cleared balance</b>
    </b-col>
    <b-col class="border">
         $10,000.00
    </b-col>
</b-row>
<!-----fourth Row--->
<b-row>
    <b-col>
    </b-col>
     <b-col class="text-right" style="font-size: 0.9rem;">
    </b-col>
    <b-col class="text-right"  style="font-size: 0.9rem; color:red">
        <b> 10</b>
    </b-col>
    <b-col class="text-center"  style="font-size: 0.9rem;">
         <i><b>Deposits</b></i>
    </b-col>
    <b-col class="text-left"  style="font-size: 0.9rem; color:red">
          <b>$50,000.00</b>
    </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Statement balance</b>
    </b-col>
    <b-col class="border">
         $10,000.00
    </b-col>
</b-row>
<!-----Fifth Row--->
<b-row class="mb-2">
    <b-col>
     </b-col>
     <b-col>
    </b-col>
  <b-col class="text-right"  style="font-size: 0.9rem; color:red">
         <b>5</b>
    </b-col>
  <b-col class="text-center"  style="font-size: 0.9rem;">
         <i><b>Payments</b></i>
    </b-col>
  <b-col class="text-left"  style="font-size: 0.9rem; color:red">
         <b>$50,000.00</b>
    </b-col>
     <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Variance</b>
    </b-col>
    <b-col class="border">
         $10,000.00
    </b-col>
</b-row>
  <p class="border-top"></p>

  <!----Reconciliation table--->
  <b-row>
      <b-col class="text-center"><b>Payment</b></b-col>
      <b-col class="text-center"><b>Deposit</b></b-col>
        </b-row>

  <b-row>
      <b-col class="mr-4 border">
     <b-table striped hover :items="filteredData" :fields="fields" :small="true" class="Mx-4">

        </b-table></b-col>
              <b-col class="ml-4 border">
    <b-table striped hover :items="filteredData" :fields="fields2" :small="true" class="Mx-4">
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
    fields: [
      '#', 'Date', 'Cheque No.', 'Payee', 'Amount' /* icon */
    ],
    fields2: ['#', 'Date', 'Reference No', 'Detail', 'Amount' /* icon */
    ],
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Document Centre', icon: 'ArchiveIcon' },
        null,
        { name: 'Upload', icon: 'UploadIcon' }
      ]
    }].concat(userDropdown)
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
