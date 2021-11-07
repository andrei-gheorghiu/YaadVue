<template>
  <div>
    <b-container :fluid="true" class="accounting">
      <b-row>
        <b-col>
          <div class="d-flex justify-content-between">
            <h1>Report</h1>
            <div class="text-right">
            <!---   <b-button-group>
                <b-button size="md" variant="outline-secondary">Print</b-button>
                <b-button size="md" class="mr-2" variant="outline-secondary">Export</b-button>
              </b-button-group>
             Drop Down Top------>
              <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                                 v-bind="dd"
                                 :key="key"/>
            </div>
          </div>
        </b-col>
      </b-row>
        </b-container>
    <div class="border-top mb-2"></div>
            <b-row class="mb-2">
         <!-----breadgrumps-->
         <b-col class="ml-2">
            <b-btn class="sm" variant="trasparent" > <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon> Home
            </b-btn></b-col>
            <b-col cols="-2" class="text-right">
              Date
            </b-col>
            <b-col>
              <b-input-group>
                   <b-form-input
        id="example-input"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder="Today"
        autocomplete="off"
      ></b-form-input>
      </b-input-group>
            </b-col>
            <b-col cols="-2" class="text-right">
             From
            </b-col>
            <b-col>
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
            <b-col cols="-2" class="text-right">
              To:
            </b-col>
               <b-col>
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
        <b-col class="text-right mr-4">
            <b-button-group class="mr-1">
        <b-button title="Print">
          <b-icon icon="printer" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Export">
          <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Email">
          <b-icon icon="envelope" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
        </b-col>
       </b-row>
       <div class="border-top mb-2"/>
  <router-view></router-view>
  </div>
</template>
<script>
import repAccDropdown from '@/util/repAccDropdown';
import repSalDropdown from '@/util/repSalDropdown';
import repEmpDropdown from '@/util/repEmpDropdown';
import repInvDropdown from '@/util/repInvDropdown';
import repCusDropdown from '@/util/repCusDropdown';
import repDnaDropdown from '@/util/repDnaDropdown';
import repPurchaseDropdown from '@/util/repPurchaseDropdown';
import repPayableDropdown from '@/util/repPayableDropdown';
import userDropdown from '@/util/userDropdown';
import DropdownBarItem from '@/components/DropdownBarItem.vue';

export default {
  components: { DropdownBarItem },
  data: () => ({
    dropdownBar: []
      .concat(repSalDropdown, repPurchaseDropdown, repInvDropdown, repEmpDropdown, repCusDropdown, repPayableDropdown, repAccDropdown, repDnaDropdown, userDropdown)
  })
};
</script>
<style>
.tooltip {
  opacity: .9;
}
</style>
