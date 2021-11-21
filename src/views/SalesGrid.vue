/* eslint-disable no-dupe-keys */
<template>
  <div class="sales">
    <b-container class="Sales Header">
      <b-row>
        <b-col><h1>Sales <i>Grid</i></h1></b-col>
        <b-col class="d-flex align-items-center">
          <span>{{ timeString }}</span>
        </b-col>
        <b-col class="d-flex align-items-center justify-content-end">
          <div>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key"/>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="border-top"></div>
    <b-row>
      <b-col>
        <pre v-text="recipes"/>
      </b-col>
    </b-row>
    <b-row variant="transparent">
      <b-col>
        <router-view></router-view>
      </b-col>
      <b-col class="bg-light border-left" cols="6" md="4">
        <div>
          <b-list-group horizontal="md" class="row rounded flex-fill ">
            <b-list-group-item button class="col rounded border-right shadow">
              <div class="text-center" style="font-size: 0.8rem;">
                <font-awesome-icon size="3x" :icon="['fas', 'user']"/>
              </div>
              <div class="text-center" style="font-size: 0.8rem;"><b>Customer</b></div>
            </b-list-group-item>
            <b-list-group-item @click="$router.push('/salesgrid/order')" button class="col  rounded shadow">
              <div class="text-center" style="font-size: 0.8rem;">
                <font-awesome-icon size="3x" :icon="['fas', 'clipboard']"/>
              </div>
              <div class="text-center" style="font-size: 0.8rem;"><b>Orders</b></div>
            </b-list-group-item>
            <b-list-group-item @click="$router.push('/salesgrid/table')" button class="col mr-2 rounded border-left shadow"
            >
              <div class="text-center" style="font-size: 0.8rem;">
                <font-awesome-icon size="3x" :icon="['fas', 'chair']"/>
              </div>
              <div class="text-center" style="font-size: 0.8rem;"><b>Table Plan</b></div>
            </b-list-group-item
            >
          </b-list-group>
        </div>
        <div class="table-gridcontainer">
          <b-table class="text-center" :items="filteredData" :fields="fields" :small="true">
            <template #cell(extPrice)="{item}">
              {{ formatCurrency(item.quantity * item.price) }}
            </template>
          </b-table>
        </div>
        <!----Total Screen--->
        <div>
          <!----Total Screen Row1--->
          <b-row class="border-top">
            <b-col class="text-left">
              Items
            </b-col>
            <b-col class="border-right text-left mr-1" style="font-size: 0.9rem;">
              0
            </b-col>
            <b-col class="text-rigt ml-1" style="font-size: 1.1rem;">
              <b>TOTAL</b>
            </b-col>
            <b-col class="text-right" style="font-size: 0.9rem;">
              <h5> $0.00</h5>
            </b-col>
          </b-row>
          <!----Total Screen Row2--->
          <b-row>
            <b-col class="text-left">
              Discount
            </b-col>
            <b-col class="border-right text-left mr-1" style="font-size: 0.9rem;">
              $0.00
            </b-col>
            <b-col class=" text-rigt ml-1">
              Due
            </b-col>
            <b-col class="text-right" style="font-size: 0.9rem; color:red">
              $0.00
            </b-col>
          </b-row>
          <!----Total Screen Row3--->
          <b-row class="shadow">
            <b-col class="text-left ml-3 col-2">
            </b-col>
            <b-col class="text-right mr-1" style="font-size: 0.8rem;">
            </b-col>
            <b-col class="text-left mr-3 col-6">
              <b-form-checkbox switch size="sm"> Serivice charge</b-form-checkbox>
            </b-col>
            <b-col class="text-right" style="font-size: 0.9rem;">
              $0.00
            </b-col>
          </b-row>
        </div>
        <!----Action BUTTONS--->
        <div>
          <b-list-group horizontal="md" class="row rounded flex-fill ">
            <b-list-group-item @click="$router.push('/salesgrid')" button class="col mr-1 rounded border-right shadow">
              <div class="text-center" style="font-size: 0.7rem;">
                <font-awesome-icon size="2x" :icon="['fas', 'utensils']"/>
              </div>
              <div class="text-center" style="font-size: 0.7rem;"><b>Eat In Option</b></div>
            </b-list-group-item>
            <b-list-group-item @click="$router.push('/salesgrid/miscitems')" button class="col mr-1 rounded shadowr"
            >
              <div class="text-center">
                <font-awesome-icon size="2x" :icon="['fas', 'plus-circle']"/>
              </div>
              <div class="text-center" style="font-size: 0.7rem;"><b>Misc Product</b></div>
            </b-list-group-item
            >
            <b-list-group-item button class="col mr-1 rounded border shadow"
            >
              <div class="text-center" style="font-size: 0.7rem;">
                <font-awesome-icon size="2x" :icon="['fas', 'scroll']"/>
              </div>
              <div class="text-center" style="font-size: 0.7rem;"><b>Print</b></div>
            </b-list-group-item
            >
            <b-list-group-item button class="col mr-1 rounded border shadow"
            >
              <div class="text-center" style="font-size: 0.7rem;">
                <font-awesome-icon size="3x" :icon="['fas', 'times-circle']"/>
              </div>
              <div class="text-center " style="font-size: 0.7rem;"><b>No Sale</b></div>
            </b-list-group-item
            >
          </b-list-group>
        </div>
        <!----FINAL BUTTONS--->
        <div>
          <b-list-group horizontal="md" class="row rounded flex-fill ">
            <b-list-group-item button class="col-3 rounded border mr-2 shadow" variant="warning" cols="1">
              <div class="text-center"><h5>Delete</h5></div>
            </b-list-group-item>
            <b-list-group-item button class="col mr-2 rounded border shadow" variant="info"
            >
              <div class="text-center"><h5>Order</h5></div>
            </b-list-group-item
            >
            <b-list-group-item button class="col mr-2 rounded border shadow" variant="success"
                               @click="$router.push('/salesgrid/payment')">
              <div class="text-center"><h5>Pay</h5></div>
            </b-list-group-item
            >
          </b-list-group>
        </div>

      </b-col>
    </b-row>
    <b-row>
      <b-input v-model="firstRecipeName" />
    </b-row>
  </div>

</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import saleDnaDropdown from '@/util/saleDnaDropdown';
import userDropdown from '@/util/userDropdown';
import DateTime from '@/util/datetime';
import { formatCurrency } from '../util/helpers';

export default {
  components: { DropdownBarItem },
  mixins: { DateTime },
  data: () => ({
    fields: [
      'Product', 'QTY', 'Each', 'Total'
    ],
    dropdownBar: [].concat(saleDnaDropdown, userDropdown),
    filteredData: []
  }),
  computed: {
    recipes () {
      // return this.$store.state.recipes.entries;
      return this.$store.getters['recipes/yourGetter'];
    },
    firstRecipeName: {
      get () {
        return this.$store.state.recipes.entries[0]?.department || '';
      },
      set (val) {
        this.$store.commit('recipes/ADD_RECIPE', { id: this.$store.state.recipes.entries[0]?.id, department: val });
      }
    }
  },
  methods: {
    formatCurrency
  }
};

</script>
<style lang="scss">
.table-gridcontainer {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  height: 395px;

  .ps {
    height: 400px;
  }

  th {
    position: sticky;
    top: 0;
    background-color: white;
  }

  &:before {
    content: '';
    position: absolute;
    top: 60px;
    width: 100%;
    left: 0;
  }

  .btn-space {
    margin-right: 5px;
  }
}
</style>
