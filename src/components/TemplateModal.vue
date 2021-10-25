<template>
<b-modal id="TemplateModal" size="lg" centered title="Template">
  <div>
  <b-card no-body>
    <b-tabs class="mt-3" pills card vertical>
      <b-tab  title="Sales" active><b-card-text>

  <b-tabs content-class="mt-3" align="center">
    <b-tab title="First" ><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>

        </b-card-text></b-tab>
         <b-tab  title="Purchases" active><b-card-text>Tab contents 1
        </b-card-text></b-tab>
      <b-tab title="Accounting"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Banking"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
Test1
</b-modal>
</template>

<script>

export default {
  name: 'TemplateModal'
};
</script>
<style scoped>

</style>
