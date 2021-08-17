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
        <b-col class="text-right mr-4">

        <b-btn v-b-modal.AddEmployee size="sm" class="sm mr-2" variant="Transparent"><a style="color:blue"><strong>Status:</strong></a> Not Started </b-btn>
      <b-dropdown  size="sm" class="sm mb-1" variant="info" right text= 'Action'>
       <b-dropdown-item v-b-modal.AddEmployee >Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>

      </b-dropdown>
        </b-col>
       </b-row>
  <router-view><div>Test</div></router-view>
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
        text: 'Disc C:',
        state: { expanded: true },
        children: [
          { text: 'PerfLogs' },
          {
            text: 'Users',
            children: [
              { text: 'User 1' },
              { text: 'User 2' },
              { text: 'User 3' }
            ]
          },
          { text: 'tomcat' },
          { text: 'sysCache' },
          {
            text: 'Program Files',
            children: [
              { text: 'Intel' },
              { text: 'Internet Explorer' },
              { text: 'Opera' },
              { text: 'Oracle' }
            ]
          }
        ]
      }
    ]
  })
};
</script>
