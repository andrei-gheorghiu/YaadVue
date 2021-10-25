<template>
<b-modal id="ReturnProperties" size="lg" centered title="Financial Properties">
<b-row>
<b-col> <h6>Assignees</h6>
<div>Preparer</div>
<div><b-input style="height:20px"/></div>
<div class="mt-1">Reviewer</div>
<div><b-input style="height:20px"/></div>
<div class="mt-1">Partner</div>
<div><b-input style="height:20px"/></div>
</b-col>
<b-col>
  <h6>Return Status</h6>
<div>Status</div>
<div><b-input style="height:20px"/></div>
<div class="mt-4 text-center">
     <b-button-group size="sm">
      <b-button v-b-tooltip.hover title="Review Question" class="mr-1" variant="transparent"><font-awesome-icon size="2x" :icon="['fas', 'question-circle']"/></b-button>
      <b-button v-b-tooltip.hover title="Notes" class="mr-1" variant="transparent"><font-awesome-icon size="2x" :icon="['fas', 'sticky-note']"/></b-button>
      <b-button v-b-tooltip.hover title="Lock" class="mr-1" variant="transparent"><font-awesome-icon size="2x" :icon="['fas', 'lock']"/></b-button>
      <b-button v-b-tooltip.hover title="Bookmark" class="mr-1" variant="transparent"><font-awesome-icon size="2x" :icon="['fas', 'bookmark']"/></b-button>
      <b-button v-b-tooltip.hover title="Attachment" class="mr-1" variant="transparent"><font-awesome-icon size="2x" :icon="['fas', 'paperclip']"/></b-button>
       <b-button v-b-tooltip.hover title="Time" class="mr-1" variant="transparent"><font-awesome-icon size="2x" :icon="['fas', 'hourglass-end']"/></b-button>
        <b-button v-b-tooltip.hover title="Going Concern" class="mr-1" variant="transparent"><font-awesome-icon size="2x" :icon="['fas', 'fire']"/></b-button>
        </b-button-group>

</div>
</b-col>
</b-row>
              <template #modal-footer>
        <div>
               <b-button
            variant="light"
            size="sm"
            class="float-right ml-2"
           @click="closeModal()"
          >
            Cancel
          </b-button>
          <b-button
            variant="info"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Update
          </b-button>

        </div>
      </template>
 </b-modal>
</template>

<script>

export default {
  name: 'ReturnProperties',
  data: () => ({
    fields: [
      {
        key: 'index',
        label: '#'
      },
      'Enitty Name', 'Enitty Number', 'Financial Year' /* icon */
    ],
    items: []
  })
};
</script>
<style scoped>

</style>
