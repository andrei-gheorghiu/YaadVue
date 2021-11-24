<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Cheque</h1>
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

   <!-----Row Two--->
<!-----First Row--->
  <b-row>
    <b-col class="text-right" style="font-size:15px"> <b>BANK ACCOUNT</b>
       </b-col>
    <b-col cols='3'>
        <b-input-group class="mb-2">
      <b-form-input
        id="example-input"
        style="height:30px"
        class="mx-2"
        v-model="value2"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
  </b-col>
    <b-col>ENDING BALANCE <b class="ml-2">$100,000.00</b> </b-col>
    <b-col class="text-right"> <b-form-checkbox class="ml-4" ></b-form-checkbox> </b-col>
    <b-col class="mb-2  text-left"><i>Print Later</i></b-col>
  </b-row>
   <!-----First Row--->

  <!------Cheque ------->

<b-card class="mr-2 mb-3" style="max-width: 800px; min-length: 500px;" bg-variant="light" text-variant="white" title="" >
  <b-card-text>
    <b-card bg-variant="secondary" text-variant="white">
  <b-card-text>
      <!---Date--->
             <div class="h-50">
             <b-row class="h-50">
              <b-col cols='8' class="text-right" style="font-size:20px">
            <b>No.</b>
         </b-col>
         <b-col class="text-left">
              <b-input-group>
                   <b-form-input
        id="example-input"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
      </b-input-group>
         </b-col>
          </b-row >
                <!---Date--->
             <b-row class="mt-2">
              <b-col cols='8' class="text-right" style="font-size:20px">
            <b>Date</b>
         </b-col>
         <b-col class="text-left">
              <b-input-group>
                   <b-form-input
        id="example-input"
        style="height:30px"
        v-model="value"
        type="date"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>
      </b-input-group>
         </b-col>
          </b-row>
           <!---Amount--->
             <b-row class="mt-2 mb-2">
              <b-col cols='8' class="text-right" style="font-size:20px">
            <b>$</b>
         </b-col>
         <b-col class="text-left">
              <b-input-group>
                   <b-form-input
        id="example-input"
        style="height:30px"
        v-model="value"
        type="currency"
        placeholder="0.00"
        autocomplete="off"
      ></b-form-input>
      </b-input-group>
         </b-col>
          </b-row>
          <!---Payto--->
             <b-row class="mt-4">
              <b-col class="text-center" style="font-size:15px">
            <b>PAY TO THE ORDER OF</b>
         </b-col>
         <b-col cols='6' class="text-left mr-5">
              <b-input-group>
                   <b-form-input
        id="example-input"
        v-model="value"
        type="currency"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
      </b-input-group>
         </b-col>
         <b-col></b-col>
          </b-row>

           <!---Amount--->
             <b-row class="mt-2">
              <b-col cols='8' class="text-right border-bottom ml-4" >
            <b><!---Amount in word goes here--></b>
         </b-col>
         <b-col class="text-left">
            <i> Dollars </i>
         </b-col>
          </b-row>
                     <!---Memo--->
             <b-row class="mt-2">
              <b-col cols='1.5' class="text-left  ml-4">
            <i> Memo</i>
         </b-col>
         <b-col class="text-right mt-2">
              <b-input class="col-6" style="height:20px"/>
                     </b-col>
          </b-row>

        </div>

               </b-card-text>

</b-card>

  </b-card-text>

</b-card>

<!------Table------->
<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Expenses" active>
        <b-card-text>
             <b-table striped hover :items="items" :fields="fields"  :small="true" class="Mx-4">
    <template v-slot:cell(index)="{ index }">
      {{ index + 1 }}
      </template>
                        <template v-slot:cell()="{ item, field: { key }}">
      <b-form-input style="height:30px"  v-model="item[key]" />
    </template>
        </b-table>

        </b-card-text>
      </b-tab>
      <b-tab title="Items">
        <b-card-text>Tab contents 2</b-card-text>
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
    items: [
      { EntityID: '', AcctNum: '', AcctName: '', Descript: '', Amount: '', Customer: '' },
      { EntityID: '', AcctNum: '', AcctName: '', Descript: '', Amount: '', Customer: '' },
      { EntityID: '', AcctNum: '', AcctName: '', Descript: '', Amount: '', Customer: '' },
      { EntityID: '', AcctNum: '', AcctName: '', Descript: '', Amount: '', Customer: '' }
    ],
    fields: [
      {
        key: 'index',
        label: '#'
      },
      'Entity ID', 'Account Number', 'Account Name', 'Description', 'Amount', 'Customer' /* icon */
    ],
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Duplicate', icon: 'CopyIcon' },
        { name: 'Void', icon: 'FileTextIcon' },
        { name: 'Delete', icon: 'FileTextIcon' },
        null,
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Void Cheque', icon: 'FileMinusIcon' },
        null,
        { name: 'Document Centre', icon: 'ArchiveIcon' },
        null,
        { name: 'Cheque Register', icon: 'UploadIcon' },
        { name: 'Order Cheques', icon: 'UploadIcon' }
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
 .syleObject {
  width: 150px;
  height: 150px;
  float: left;
  margin: 10px;
}

.square {
  background-color: blue;
}
    }
</style>
