<template>

<b-modal id="UserlogoutModal" size="sm" centered hide-footer title="Logout">
    <template #modal-title> Logout <font-awesome-icon size="1x" :icon="['fas', 'lock']"/></template>
     <font-awesome-icon size="1x" :icon="['fas', 'question-circle']"/> Are you sure you want to log-out?

      <b-button  class="mt-4" block variant="info">Logout</b-button>
      </b-modal>

</template>
<script>
export default {
  name: 'UserlogoutModal'

};
</script>
