<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Journal</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
                         </b-button-group>
                           <b-button variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" />New</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="SaveIcon" />Save</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="DeleteIcon" />Delete</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="CopyIcon" />Create a Copy</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="RotateCcwIcon" />Reverse</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="PaperclipIcon" />Attached File</b-button>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>

        </div>
      </b-col>
    </b-row>
  </b-container>
  <p class="border-top"></p>

<!-----First Row--->
  <b-row class="fluid">
    <b-col class=text-right> <b>Date </b>
       </b-col>
    <b-col cols='3'>
        <b-input-group class="mb-2">
      <b-form-input
      style="height:30px"
        id="example-input"
        class="mx-5"
        v-model="value"
        type="date"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>

    </b-input-group>
  </b-col>
    <b-col><!---leave blank--></b-col>
    <b-col class="text-right">Debit</b-col>
    <b-col style="height:30px" class="border mb-2 mx-4 text-right">$10,000</b-col>
  </b-row>

   <!-----Row Two--->
<!-----First Row--->
  <b-row>
    <b-col class=text-right> <b>Journal Entry No. </b>
       </b-col>
    <b-col style="height:30px" cols='3'>
        <b-input-group class="mb-2">
      <b-form-input
      style="height:30px"
        id="example-input"
        class="mx-5"
        v-model="value2"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
  </b-col>
    <b-col><!---leave blank--></b-col>
    <b-col class="text-right">Credit</b-col>
    <b-col style="height:30px" class="border mb-2 mx-4 text-right">-$10,000</b-col>
  </b-row>
   <!-----First Row--->
  <b-row>
    <b-col class=text-right> <b>Adjusted Entry </b>
       </b-col>
    <b-col cols='3'>
<b-form-checkbox class="ml-4" ></b-form-checkbox>
  </b-col>
    <b-col><!---leave blank--></b-col>
    <b-col  class="text-right">Difference</b-col>
    <b-col style="height:30px" class="border mx-4 text-right">$0,00</b-col>
  </b-row>

                    <b-table striped hover :items="items" :fields="fields"  :small="true"
                    class="Mx-4 mt-2"
                    >
    <template v-slot:cell(index)="{ index }">
      {{ index + 1 }}
      </template>
                        <template v-slot:cell()="{ item, field: { key }}">
      <b-form-input style="height:30px"  v-model="item[key]" />
    </template>

        </b-table>
  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    items: [
      { EntityID: '', AcctNum: '', AcctName: '', Descript: '', Debit: '', Credit: '' },
      { EntityID: '', AcctNum: '', AcctName: '', Descript: '', Debit: '', Credit: '' },
      { EntityID: '', AcctNum: '', AcctName: '', Descript: '', Debit: '', Credit: '' },
      { EntityID: '', AcctNum: '', AcctName: '', Descript: '', Debit: '', Credit: '' }
    ],
    fields: [
      {
        key: 'index',
        label: '#'
      },
      'Entity ID', 'Account Number', 'Account Name', 'Description', 'Debit', 'Credit' /* icon */
    ],

    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Use Template', icon: 'FileTextIcon' },
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
