<template>
    <div class="mt-1">
        <b-row>
         <div class="text-left"><b-btn @click="$router.push('/salesgrid')" variant="transparent"><font-awesome-icon size="1x" :icon="['fas', 'home']" /></b-btn></div>
        </b-row>
         <b-card no-body>
    <b-tabs card align="center">
      <b-tab title="Table" active>
  <b-card-text>Feature Not Yet Available</b-card-text>

              </b-tab>
      <b-tab title="Layout">
        <b-card-text>
          <b-row>
            <b-col>
          Add:
                    <b-button-group class="p-1">
            <b-btn size="sm" class="mr-1 rounded" variant="transparent"><font-awesome-icon  size="2x" :icon="['fas', 'chair']" /></b-btn>
            <b-btn size="sm" class="mr-1 rounded" variant="transparent"><font-awesome-icon  size="2x" :icon="['fas', 'couch']" /></b-btn>
            <b-btn size="sm" class="mr-1 rounded" variant="transparent"><font-awesome-icon  size="2x" :icon="['fas', 'square']" /></b-btn>
            <b-btn size="sm" class="mr-1 rounded" variant="transparent"><font-awesome-icon  size="2x" :icon="['fas', 'circle']" /></b-btn>
            <b-btn size="sm" class="mr-1 rounded" variant="transparent"><font-awesome-icon  size="2x" :icon="['fas', 'pencil-alt']" /></b-btn>
          </b-button-group>
                      </b-col>
                      <b-col class="text-right">
<b-btn size="sm" class="mr-1 rounded" variant="transparent"><font-awesome-icon  size="1x" :icon="['fas', 'lock']" /></b-btn>
                      </b-col>
          </b-row>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
export default {
  name: 'SalesGridTable'

};
</script>
