<template>
    <div class="mt-1">
        <b-row>
         <div class="text-left"><b-btn @click="$router.push('/salesgrid')" variant="transparent"><font-awesome-icon size="1x" :icon="['fas', 'home']" /></b-btn></div>
        </b-row>
         <b-card no-body>
    <b-tabs card align="center">
      <b-tab title="Order" active>
  <b-card-text>Feature Not Yet Available</b-card-text>

              </b-tab>
      <b-tab title="Discount">
        <b-card-text>Feature Not Yet Available</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
export default {
  name: 'SalesGridOrder'

};
</script>
