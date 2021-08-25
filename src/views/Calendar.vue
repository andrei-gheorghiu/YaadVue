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
    <h2 class="h2">Custom Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Roll your own calendars using scoped slots
    </p>
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
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
