<template>
<div>
  <b-container :fluid="true" class="calendar">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Calendar <b-button v-b-toggle.wsdocs variant="transparent"><feather-icon size="1x" icon="Edit3Icon" /></b-button></h1>
                                <div>
            <b-button-group class="mr-3">
              <b-button v-b-modal.WsUpload variant="outline-secondary"><feather-icon size="1x" icon="UploadIcon" /> Upload</b-button>
               <b-button variant="outline-secondary"><feather-icon size="1x" icon="PaperclipIcon" /> Attach</b-button>
                   </b-button-group>
                          </div>
        </div>
      </b-col>
         <b-col class="text-right">
          <div>
              <time-period-selector/>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key"/>
          </div>
        </b-col>
    </b-row>
  </b-container>
  <div class="border-top mb-3"/>
  <div class="text-center section">

  <b-calendar selected-variant="info"  block locale="en-US"></b-calendar>
  </div>
</div>
   </template>
<script>

import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';
import TimePeriodSelector from '../components/TimePeriodSelector';

export default {
  components: { TimePeriodSelector, DropdownBarItem },
  data: () => ({
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Receive Payment', icon: 'FileIcon' },
        null,
        { name: 'Document Centre', icon: 'ArchiveIcon' },
        null,
        { name: 'Upload', icon: 'UploadIcon' }
      ]
    }].concat(userDropdown)
  })
};
</script>
