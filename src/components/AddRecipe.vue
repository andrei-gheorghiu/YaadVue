<template>
  <b-modal id="AddRecipe" size="lg" centered title="Add Recipe">
    <template #modal-footer>
      <b-btn variant="link">Cancel</b-btn>
      <b-btn variant="primary" @click="addRecipe">Add recipe</b-btn>
    </template>
    <p class="md-1"><b>Item Name</b>
      <b-input/>
    </p>
    <!-----first tab--->
    <div>
      <b-tabs content-class="mt-3" align="left">
        <b-tab title="Basic Info" active>
          <p>
            <b-row class='mb-2'>
              <b-col class='text-right' cols="3"> Type</b-col>
              <b-col cols="6">
                <b-form-radio-group
                  v-model="selected"
                  :options="options"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
                ></b-form-radio-group>

              </b-col>
            </b-row>
            <b-row class='mb-2'>
              <b-col class='text-right md-2' cols="3"> Department</b-col>
              <b-col cols="6">
                <b-input v-model="recipe.department"/>
              </b-col>
            </b-row>
            <b-row class='mb-2'>
              <b-col class='text-right' cols="3"> Measure</b-col>
              <b-col cols="6">
                <b-input v-model="recipe.measure"/>
              </b-col>
            </b-row>
            <b-row class='mb-2'>
              <b-col class='text-right' cols="3"> Price</b-col>
              <b-col cols="6">
                <b-input v-model="recipe.price" type="number"/>
              </b-col>
            </b-row>
            <b-row class='mb-2'>
              <b-col class='text-right' cols="3"> UPC</b-col>
              <b-col cols="6">
                <b-input v-model="recipe.upc"/>
              </b-col>
            </b-row>
            <b-row class='mb-4'>
              <b-col class='text-right' cols="3"> Tax</b-col>
              <b-col cols="6">
                <b-input v-model="recipe.tax" type="number"/>
              </b-col>
            </b-row>
            <a class="border-top"></a>
            <b-row class='mb-1'>
              <b-col class='text-right' cols="4" style="color:red"> Qunatity on Hand</b-col>
              <b-col cols="3">
                <b-input v-model="recipe.quantity" type="number"/>
                  </b-col>
                                  <b-col class='text-left' style="color:red" cols="1"> Status</b-col>
    <b-col><b-form-checkbox v-model="checked" name="AddInvcheck-button" switch>
         Active
    </b-form-checkbox>
    </b-col>
            </b-row>
          </p>
        </b-tab>
        <!-----Second tab--->
        <b-tab title="Ingredients">

<b-row class="mb-2">
      <b-col class="text-center" cols="5"><b>Item </b></b-col>
      <b-col class="text-center" cols="2">Quantity</b-col>
      <b-col class="text-center" cols="2">cost</b-col>
      <b-col class="text-center" cols="2">Ext Cost</b-col>
    </b-row>
    <b-row v-for="item in recipe.items" :key="item.id" class="mb-2">
      <b-col class="text-center" cols="5">
        <b-input v-model="item.itemName" :disabled="true" />
      </b-col>
      <b-col class="text-center" cols="2">
        <b-form-input
          placeholder="Pull Number"
          type="number"
          min="0"
          v-model="item.quantity"
          v-on:keyup="changedQuantity(item)"
        ></b-form-input>
      </b-col>
      <b-col class="text-center" cols="2">${{ item.cost }}</b-col>
      <b-col class="text-center" cols="2"> ${{ item.totalAmount }} </b-col>
    </b-row>
    <a class="border-top" />
    <b-row class="mb-1">
      <b-col class="text-center" cols="2"><!---blank---></b-col>
      <b-col class="text-center" cols="2"><!---blank---></b-col>
      <b-col class="text-right" cols="4" style="color: red"
        ><b>Total Cost</b></b-col
      >
      <b-col class="text-right" cols="3" style="color: red" placeholder="0.00"
        ><b>${{ totalAmount }}</b></b-col
      >
    </b-row>
        </b-tab>
              <!-----Third tab--->
        <b-tab title="Notes">
          <b-row class='mb-4'>
            <b-col class='text-right' cols="3"> Notes</b-col>
            <b-col cols="8">
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="14"
                max-rows="14"
              ></b-form-textarea>

            </b-col>
          </b-row>
        </b-tab>
        <!-----four tab--->
        <b-tab title="Views">
      <b-row class='mb-4'>
              <b-col class='text-right md-2' cols="3"> Department</b-col>
              <b-col cols="6">
                <b-input/>
              </b-col>
            </b-row>
            <b-row class='mb-2'>
              <b-col class='text-right' cols="3"> Location</b-col>
              <b-col cols="6">
                <b-input/>
              </b-col>
            </b-row>
            <b-row class='mb-2'>
              <b-col class='text-right' cols="3"> Folder</b-col>
              <b-col cols="6">
                <b-input/>
              </b-col>
            </b-row>
            <b-row class='mb-2'>
              <b-col class='text-right' cols="3"> Button Colour</b-col>
              <b-col cols="6">
                <b-input/>
              </b-col>
            </b-row>
           </b-tab>

        <!-----Final Tab tab--->
        <b-tab title="Margins">
          <b-row class='mb-2'>
            <b-col class='text-right' cols="3"> Price Margin</b-col>
            <b-col cols="6">
              <b-input/>
            </b-col>
          </b-row>
          <b-row class='mb-2'>
            <b-col class='text-right' cols="3"> Mark-up</b-col>
            <b-col cols="6">
              <b-input/>
            </b-col>
          </b-row>
          <b-row class='mb-2'>
            <b-col class='text-right' cols="3"> Contribution Margin</b-col>
            <b-col cols="6">
              <b-input/>
            </b-col>
          </b-row>

        </b-tab>

      </b-tabs>
    </div>
  </b-modal>
</template>

<script>
import { v4 } from 'uuid';
export default {
  name: 'AddRecipe.vue',
  data: () => ({
    input: '',
    RecipeExtCost: '',
    text: '',
    selected: 'Yes',
    checked: true,
    options: [
      {
        item: 'Yes',
        name: 'Inventory'
      },
      {
        item: 'No',
        name: 'Non Inventory'
      }
    ],
    changeQuantity: null,
    recipe: {
      totalAmountOrderItem: null,
      items: [
        {
          id: 1,
          itemName: 'Canon lens 20mm',
          quantity: null,
          cost: 20,
          totalAmount: 0
        },
        {
          id: 2,
          itemName: 'Canon lens 30mm',
          quantity: null,
          cost: 30,
          totalAmount: 0
        },
        {
          id: 3,
          itemName: 'Canon lens 40mm',
          quantity: null,
          cost: 40,
          totalAmount: 0
        },
        {
          id: 4,
          itemName: 'Canon lens 50mm',
          quantity: null,
          cost: 50,
          totalAmount: 0
        },
        {
          id: 5,
          itemName: 'Canon lens 60mm',
          quantity: null,
          cost: 60,
          totalAmount: 0
        }
      ],
      department: '',
      measure: '',
      price: 0,
      upc: '',
      tax: 15,
      quantity: 1
    }
  }),
  computed: {
    totalAmount () {
      return this.recipe.items
        .map(item => (item.quantity * (item.cost || 0)))
        .reduce((a, b) => a + b);
    }
  },
  watch: {},
  methods: {
    loadData () {},
    changedQuantity (item) {
      this.totalAmountItem(item);
    },
    addRecipe () {
      this.$store.commit('recipes/ADD_RECIPE', { ...this.recipe, id: v4() });
    }
    // totalAmount (item) {
    //   this.order.orderItem.forEach((element) => {
    //     if (element.id === item.id) {
    //       element.quantity = item.quantity;
    //       element.itemCost = parseFloat(item.quantity) * item.cost;
    //       this.order.totalAmountOrderItem += element.totalAmount;
    //     }
    //   });
    // }
  }
};
</script>

<style scoped>
 ::v-deep .tab-content {
   min-height: 370px;
 }
</style>
