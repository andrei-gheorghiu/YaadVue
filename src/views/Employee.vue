<template>
  <div class="employee">
     <b-container   class="Employee Header">
      <b-row variant="bottom-border">
        <b-col><h1>Employee</h1></b-col>
        <b-col>
          <div class="text-right">
          <b-button v-b-toggle.sidebar-right class="mr-1" variant="secondary"><feather-icon size="1x" icon="ListIcon" /> Detail</b-button>
         <b-button v-b-modal.AddEmployee class="mr-1" variant="secondary"><feather-icon size="1x" icon="PlusCircleIcon" /> Hire</b-button>
          <b-button variant="secondary"><feather-icon size="1x" icon="Edit3Icon" /> Edit</b-button>
           <add-employee foo="bar"/>
          </div>
        </b-col>
        <b-col class="text-right">
           <div>

                             <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
          </div>
        </b-col>
          </b-row>
        </b-container>
        <p class="border-top"></p>
          <b-row>
    <b-col cols="2" style="color:red"><h6><i>Number of Employee(s)</i></h6></b-col>
    <b-col cols="6" class=" mx-2 text-left"><b>0</b></b-col>
    <b-col  class=" mx-2 text-right"><b-form-checkbox v-model="checked"  name="AddVendcheck-button"  switch>
            </b-form-checkbox></b-col>
  </b-row>
                        <b-table striped hover :items="filteredData" :fields="fields" :small="true"
                    class="Mx-4"
                    >

        </b-table>
        </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import FeatherIcon from '@/components/FeatherIcon';
import empDnaDropdown from '@/util/empDnaDropdown';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem, FeatherIcon },
  data: () => ({
    fields: [
      'Employee #', 'First Name', 'Last Name', 'Address ', 'Phone No.', 'Email', 'Picture'
    ],
    dropdownBar: [].concat(empDnaDropdown, userDropdown),
    checked: true
  })
};
</script>
