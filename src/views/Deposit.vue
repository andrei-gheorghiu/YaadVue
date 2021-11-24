<template>
<div>
  <b-container :fluid="true" class="Deposit">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Deposit</h1>
          <div>
            <b-button-group>
              <b-button size="sm" variant="outline-secondary">Print</b-button>
              <b-button size="sm" class="mr-3" variant="outline-secondary">Export</b-button>
                         </b-button-group>
                           <b-button size="sm" variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" />Save & new</b-button>
                           <b-button size="sm" variant="transparent"><feather-icon size="1x" icon="SaveIcon" />Save</b-button>
                           <b-button size="sm" variant="transparent"><feather-icon size="1x" icon="DeleteIcon" />Cancel</b-button>
                           <b-button size="sm" variant="transparent"><feather-icon size="1x" icon="CopyIcon" />Close</b-button>
                           <b-button size="sm" class="mr-3" variant="transparent"><feather-icon size="1x" icon="PaperclipIcon" />Attached File</b-button>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>

        </div>
      </b-col>
    </b-row>
  </b-container>
  <p class="border-top"></p>
    <!-----Row zero--->

<!-----First Row--->
<b-row class="mb-1">
    <b-col class="text-right" style="font-size: 0.9rem;"><b>
         ACCOUNT:
    </b></b-col>
     <b-col class="text-left" style="font-size: 0.9rem;">
                 <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
    </b-col>
     <b-col class="text-right"  style="font-size: 0.9rem;"><b>
Date</b>
             </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;"><b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="date"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
      </b-input-group>
   </b-col>
      <b-col class="text-left" style="font-size: 0.9rem;">
      </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Total</b>
    </b-col>
    <b-col style="height:30px" class="border text-left">
         $10,000.00
    </b-col>
</b-row>
<!-----Second Row--->
<b-row class="mb-1">
    <b-col class="text-right" style="font-size: 0.9rem;"><b>
        </b>
             </b-col>
     <b-col class="text-left" style="font-size: 0.8rem; color:red">
     <b><i>  Balance: $1,000.00</i></b>
                        </b-col>
    <b-col>
    </b-col>
    <b-col>
    </b-col>
    <b-col>
     </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
         <b>Selected Payment Total</b>
    </b-col>
    <b-col style="height:30px"  class="border">
        <h5> $10.000.00</h5>
    </b-col>
</b-row>

<!-----Row five--->
<b-row class="mb-2">
    <b-col cols="1"/>
      <b-col class='text-left' style="font-size: 0.8rem;"> <i><b><b-btn v-b-toggle.banktransfermemo variant="transparent" style="font-size: 0.8rem; color:black"><feather-icon size="1x" icon="Edit3Icon"/></b-btn></b></i>
        <b-collapse id="banktransfermemo" class="mt-2">
          <b-row>
             <b-col cols='10'>
                <b-form-textarea
                     id="textarea"
      v-model="text"
      col="4"
      placeholder="Memo"
      rows="2"
      max-rows="2"
    ></b-form-textarea>
             </b-col>
             <b-col>
             </b-col>
          </b-row>
      </b-collapse>
    </b-col>
     <b-col class="text-right" style="font-size: 0.8rem;">
                  </b-col>
        </b-row>
  <div class="border-top mb-2"></div>

  <!----Reconciliation table--->
  <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Undeposited Funds" active>
        <b-card-text>
          <b-row class="mb-1">
            <b-col cols="4"><b>Select the payment included in this deposit</b></b-col>
            <b-col class="text-center" cols="2">
                        <b-button-group>
              <b-button size="sm" variant="outline-secondary">Select All</b-button>
              <b-button size="sm" class="mr-4" variant="outline-secondary">Clear All</b-button>
                         </b-button-group>
            </b-col>
             <b-col class="text-right">
              <b> Payment Method </b>
             </b-col>
               <b-col class="text-left" style="font-size: 0.9rem;" cols="2">
                 <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
       </b-input-group></b-col>
       <b-col class="ml-4" style="color:red">
         <i>Items: 10 </i>
       </b-col>
          </b-row>
          <b-row>
              <b-col class="ml-4 border">
    <b-table striped hover :items="filteredData" :fields="fields" :small="true" class="Mx-4">
        </b-table></b-col>

  </b-row>

        </b-card-text>
      </b-tab>
      <b-tab title="Other" active>
        <b-card-text>
                <b-row>
              <b-col class="ml-4 border">
    <b-table striped hover :items="filteredData" :fields="fields2" :small="true" class="Mx-4">
        </b-table></b-col>

  </b-row>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>

  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    fields: ['#', 'Received From', 'Date', 'Type', 'Payment Method', 'Ref No.', 'Amount' /* icon */
    ],
    fields2: ['#', 'Received From', 'Account No.', 'Account Name', 'Payment Method', 'Ref No.', 'Amount' /* icon */
    ],
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Duplicate', icon: 'CopyIcon' },
        { name: 'Reverse', icon: 'FileTextIcon' },
        { name: 'Void', icon: 'FileTextIcon' },
        null,
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Un-Apply Payment', icon: 'FileMinusIcon' },
        { name: 'Discount & Credit', icon: 'PercentIcon' },
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
