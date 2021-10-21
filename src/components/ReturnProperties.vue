<template>
<b-modal id="ReturnProperties" size="lg" centered title="Return Properties">
<!---<b-row>
  <b-col cols="4">
    Roll Forward from
  </b-col>
      <b-col>
        <b-input/>
  </b-col>
</b-row>
<div class="border mt-1 mb-1" />

                    <b-table striped hover :items="items" :fields="fields"  :small="true"
                    class="Mx-4 mt-2"
                    >
    <template v-slot:cell(index)="{ index }">
      {{ index + 1 }}
      </template>
                        <template v-slot:cell()="{ item, field: { key }}">
      <b-form-input v-model="item[key]" />
    </template>

        </b-table>--->
 </b-modal>
</template>

<script>

export default {
  name: 'ReturnProperties',
  data: () => ({
    fields: [
      {
        key: 'index',
        label: '#'
      },
      'Enitty Name', 'Enitty Number', 'Financial Year' /* icon */
    ],
    items: []
  })
};
</script>
<style scoped>

</style>
