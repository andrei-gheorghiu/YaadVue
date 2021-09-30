<template>
<div>
  <b-container :fluid="true" class="worksheet">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Work Sheets <b-button v-b-toggle.wsdocs variant="transparent"><feather-icon size="1x" icon="LayersIcon" /></b-button></h1>
                                <div>
            <b-button-group class="mr-3">
              <b-button v-b-modal.WsUpload variant="outline-secondary"><feather-icon size="1x" icon="UploadIcon" /> Upload</b-button>
               <b-button variant="outline-secondary"><feather-icon size="1x" icon="PaperclipIcon" /> Attach</b-button>
                   </b-button-group>
                   <ws-upload foo="bar"/>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
    <!-----------------This is just a test to remove--->
    <b-sidebar id="wsdocs" title="Document Manager" right :shadow="true">
      <div class="px-3 py-2">
        <div class="text-right">
                  <b-button variant="light" @click="$router.push('/worksheet')"><b-icon icon="back"></b-icon></b-button>
        </div>
        <p>
<tree :data="treeData0" >
            <span class="tree-text" slot-scope="{ node }">
              <template v-if="!node.hasChildren()">
               <feather-icon size="1x" icon="FileTextIcon"/>
                {{ node.text }}
              </template>

              <template v-else>
              <feather-icon size="1x" icon="FolderIcon"/>
                             {{ node.text }}
              </template>
            </span>
          </tree>
        </p>
             </div>
    </b-sidebar>
       <div class="border-top mb-1"></div>
       <b-row>
         <!-----breadgrumps-->
         <b-col>
            <b-breadcrumb style="background:white" type="light">
    <b-breadcrumb-item to='/worksheet'>
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
       Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo" >Entity</b-breadcrumb-item>
    <b-breadcrumb-item href="#bar">Year</b-breadcrumb-item>
    <b-breadcrumb-item active>Unadjusted Trial Balance</b-breadcrumb-item>
  </b-breadcrumb>
         </b-col>
        <b-col class="text-right mr-4">

        <b-btn v-b-modal.AddEmployee size="sm" class="sm mr-2" variant="Transparent"><a style="color:blue"><strong>Status:</strong></a> Not Started </b-btn>
      <b-dropdown  size="sm" class="sm mb-1" variant="info" right text= 'Action'>
       <b-dropdown-item v-b-modal.AddEmployee >Action</b-dropdown-item>
    <b-dropdown-item href="#">test</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>

      </b-dropdown>
        </b-col>
       </b-row>
  <router-view></router-view>
   </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import wsWorkingPaperDropdown from '@/util/premium/wsWorkingPaperDropdown';
import wsAnalysisDropdown from '@/util/premium/wsAnalysisDropdown';
import wsStatementDropdown from '@/util/premium/wsStatementDropdown';
import wsUtilityDropdown from '@/util/premium/wsUtilityDropdown';
import worksheetDnaDropdown from '@/util/premium/worksheetDnaDropdown';
import userDropdown from '@/util/userDropdown';
import WsUpload from '../components/WsUpload';

export default {
  components: { DropdownBarItem, WsUpload },
  data: () => ({
    dropdownBar: [].concat(wsWorkingPaperDropdown, wsAnalysisDropdown, wsStatementDropdown, wsUtilityDropdown, worksheetDnaDropdown, userDropdown),
    treeData0: [
      {
        text: 'ABC Inc:',
        state: { expanded: true },
        children: [
          { text: 'Financials' },
          { text: 'Working Trial Balance' },
          { text: 'Adjusting Entries' },
          {
            text: 'Cash & Bank',
            children: [
              { text: 'Lead' },
              { text: 'User 2' },
              { text: 'User 3' }
            ]
          },
          {
            text: 'Receivables',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Other Current Assets',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Non-Current Assets',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Accounts Payable',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Other Current Liabilities',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Non-Current Liabilities',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Equity',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Income',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Cost of Sales',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Expense',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          { text: 'Analysis' },
          { text: 'Review Notes' }
        ]
      }
    ]
  })
};
</script>
