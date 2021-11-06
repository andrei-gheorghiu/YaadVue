<template>
<div class="inventory-filter-button">
                    <b-dropdown id=InventoryFilterButton variant="transparent"  text="Split Link" checkbox-menu allow-focus :right="right">
        <template #button-content>
        <span>
          <font-awesome-icon size="1x" :icon="['fas', 'filter']"/>
                  </span>
      </template>
      <b-form-checkbox class="ml-3"
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >All </b-form-checkbox>
        <b-form-checkbox
        class="ml-3"
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
    >Department </b-form-checkbox>
       <b-form-checkbox
       class="ml-3"
      id="checkbox-3"
      v-model="status"
      name="checkbox-3"
      value="accepted"
      unchecked-value="not_accepted"
    >Location </b-form-checkbox>
         <b-form-checkbox
         class="ml-3"
      id="checkbox-4"
      v-model="status"
      name="checkbox-4"
      value="accepted"
      unchecked-value="not_accepted"
    >Custom </b-form-checkbox>
  </b-dropdown>
</div>
       </template>
<script>
export default {
  name: 'InventoryFilterButton.vue'
};
</script>

<style scoped>
