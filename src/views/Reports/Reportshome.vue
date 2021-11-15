<template>
    <div>
        <b-row>
            <b-col style="min-height: 600px">
                <b-tabs
                    active-nav-item-class="font-weight-bold text-uppercase text-info"
                    active-tab-class="font-weight-bold text-success"
                 content-class="mt-3">
  <!-- This tabs content will always be mounted -->
  <b-tab title="Favourite">

  </b-tab>
  <!-- This tabs content will not be mounted until the tab is shown -->
  <!-- and will be un-mounted when hidden -->
  <b-tab title="Reports" lazy><b-alert show>I'm lazy mounted!</b-alert></b-tab>
  <b-tab title="Batches" lazy><b-alert show>I'm lazy mounted!</b-alert></b-tab>
</b-tabs>

            </b-col >
                 <b-col  class="border-left mt-3">
                     <b-row>
                     <b-col>
                   <b-btn variant="transparent"> <font-awesome-icon size="1x" :icon="['fas', 'history']" /> Recently Viewed </b-btn>
                     </b-col>
                     <b-col class="text-right mr-4">
                       <b-btn variant="transparent">  View All </b-btn>
                     </b-col>
                     </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
  name: 'Reportshome'
};
</script>
