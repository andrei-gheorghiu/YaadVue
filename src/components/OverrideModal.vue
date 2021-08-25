<template>

<b-modal id="OverrideModal" size="sm" centered hide-footer title="Lock">
    <template #modal-title> Override <font-awesome-icon size="1x" :icon="['fas', 'key']"/></template>

  <b-input-group class="mb-4 mt-2">
    <b-input-group-prepend is-text>
      <font-awesome-icon size="1x" :icon="['fas', 'user']"/>
    </b-input-group-prepend>
    <b-form-input aria-label="Userfield"></b-form-input>
  </b-input-group>

  <b-input-group class="mb-2 mt-2">
    <b-input-group-prepend is-text>
     <font-awesome-icon size="1x" :icon="['fas', 'lock']"/>
    </b-input-group-prepend>
    <b-form-input aria-label="Passwordfield"></b-form-input>
  </b-input-group>

      <b-button  class="mt-4" block variant="info">Override</b-button>
      </b-modal>

</template>
<script>
export default {
  name: 'OverrideModal'

};
</script>
