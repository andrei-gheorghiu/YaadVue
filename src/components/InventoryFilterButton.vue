<template>
<div class="inventory-filter-button">
                    <b-dropdown id=InventoryFilterButton variant="transparent"  text="Split Link"  :right="right">
        <template #button-content>
        <span>
          <font-awesome-icon size="1x" :icon="['fas', 'filter']"/>
                  </span>
      </template>
    <b-dropdown-item>    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >All </b-form-checkbox></b-dropdown-item>
       <b-dropdown-item>    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >Department </b-form-checkbox></b-dropdown-item>
       <b-dropdown-item>    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >Location </b-form-checkbox></b-dropdown-item>
           <b-dropdown-item>    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >Custom </b-form-checkbox></b-dropdown-item>
  </b-dropdown>
</div>
       </template>
<script>
export default {
  name: 'InventoryFilterButton.vue'
};
</script>

<style scoped>
