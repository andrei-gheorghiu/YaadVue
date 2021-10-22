<template>
<b-modal id="WsNewEntity" size="lg" centered title="Add New Entity">
<b-row class="mt-0">
<b-col>
  <b-row><b-col class="ml-3" cols="-4">Entity Name</b-col><b-col> <b-input style="height:20px"/></b-col></b-row>
  <b-row class="mt-3 mb-3"><b-col ><div>Financial year start</div><div><b-input type="date" style="height:20px"/></div></b-col><b-col><div>Financial year end</div><div><b-input type="date" style="height:20px"/></div></b-col></b-row>
  <b-row>
<div class="mr-1 ml-1">
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Contact" active>
        <b-card-text><!---Tab contents 1-->

        <b-row class="mt-1 mb-1"><b-col ><div>Client Name</div><div><b-input  style="height:20px"/></div></b-col><b-col><div>Businees Number</div><div><b-input  style="height:20px"/></div></b-col></b-row>
        <b-row class="mt-2 mb-1"><b-col ><div>Client code</div><div><b-input  style="height:20px"/></div></b-col><b-col></b-col></b-row>
        </b-card-text>
      </b-tab>
     <!--- <b-tab title="Tab 2">
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>-->
    </b-tabs>
  </b-card>
</div>
  </b-row>
</b-col>
<!---Left side Assignees-->
<b-col cols="5" class="bg-light border-left">
<h6>Assignees</h6>
<div>Preparer</div>
<div><b-input style="height:20px"/></div>
<div class="mt-1">Reviewer</div>
<div><b-input style="height:20px"/></div>
<div class="mt-1">Partner</div>
<div><b-input style="height:20px"/></div>

<h6 class="mt-4">Visibility</h6>
<b-btn :pressed="true" class="mb-2" size="sm" variant="outline-info">Public</b-btn>
<b-btn :pressed="false" class="mb-2" size="sm" variant="outline-info">Private</b-btn>
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
            Add Entity
          </b-button>

        </div>
      </template>
 </b-modal>
</template>

<script>

export default {
  name: 'WsNewEntity',
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
