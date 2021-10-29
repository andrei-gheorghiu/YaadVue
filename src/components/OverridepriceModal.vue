<template>
<b-modal id="OverridepriceModal" size="md" hide-footer centered title="Override Price">
<b-row>
  <b-col/>
  <b-col cols="7">
  <b-input-group>
     <b-form-input type="number" min="0.00"></b-form-input>

     </b-input-group>
  </b-col>
<b-col/>
</b-row>
<b-row>
    <b-col/>
    <b-col cols="7" class="text-center">
  Current: $90.00
  </b-col>
<b-col/>
</b-row>
<b-row >
  <b-col class="text-center mt-4">
    <b-button variant="outline-secondary" size="sm" class="mr-2">Cancel</b-button>
  <b-button variant="outline-info" size="sm" class="mr-2">Override Once</b-button>
  <b-button variant="outline-info" size="sm" class="mr-2">Override All Day</b-button>
  <b-button variant="outline-info" size="sm">Update Price</b-button>
  </b-col>
  </b-row>
</b-modal>
</template>

<script>

export default {
  name: 'OverridepriceModal'
};
</script>
<style scoped>

</style>
