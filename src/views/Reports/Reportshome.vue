<template>
    <div>
        <b-row>
            <b-col style="min-height: 600px" class="border-right">
                <b-tabs
                    active-nav-item-class="font-weight-bold text-uppercase text-info"
                    active-tab-class="font-weight-bold text-success"
                 content-class="mt-3">
  <!-- This tabs content will always be mounted -->
  <b-tab title="Favourite">
      <b-card>
          Sales
        <b-alert class="border" show variant="light"><b-row><b-col class="border">test1</b-col><b-col>test2</b-col></b-row></b-alert>
         <b-alert class="border" show variant="light"><b-row><b-col class="border">test1</b-col><b-col>test2</b-col></b-row></b-alert>
      </b-card>
  </b-tab>
  <!-- This tabs content will not be mounted until the tab is shown -->
  <!-- and will be un-mounted when hidden -->
  <b-tab title="Lazy tab" lazy><b-alert show>I'm lazy mounted!</b-alert></b-tab>
</b-tabs>

            </b-col>
                 <b-col  class="border-left">
                     <h5>Recently Viewed</h5>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
  name: 'Reportshome'
};
</script>
