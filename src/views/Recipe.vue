<template>
  <div>
    <b-container :fluid="true" class="recipe">
      <b-row>
        <b-col><h1>Recipe</h1></b-col>
        <b-col class="text-right">
          <div>
            <b-button v-b-toggle.sidebar-right class="mr-1" variant="secondary">
              <feather-icon size="1x" icon="ListIcon"/>
              Detail
            </b-button>
            <b-button v-b-modal.AddRecipe class="mr-1" variant="secondary">
              <feather-icon size="1x" icon="PlusCircleIcon"/>
              Add
            </b-button>
            <b-button variant="secondary">
              <feather-icon size="1x" icon="Edit3Icon"/>
              Edit
            </b-button>
            <div>
            </div>
          </div>
        </b-col>
        <b-col class="text-right">
          <div>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key"/>
          </div>
        </b-col>
      </b-row>

      <!-- <b-row>
        <b-col>
          <div class="d-flex justify-content-between">
            <h1>Recipe</h1>
            <div>
              <b-button-group>
                <b-button variant="outline-secondary">Share</b-button>
                <b-button class="mr-2" variant="outline-secondary">Export</b-button>
                           </b-button-group>
                             <b-button v-b-modal.AddRecipe variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" />New</b-button>
                             <b-button variant="transparent"><feather-icon size="1x" icon="SaveIcon" />Save</b-button>
                             <b-button variant="transparent" class='mr-4'><feather-icon size="1x" icon="DeleteIcon" />Delete</b-button>

                                                 <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                                 v-bind="dd"
                                 :key="key" />
                  </div>

          </div>
        </b-col>
      </b-row>  -->
    </b-container>
    <p class="border-top"></p>
    <b-row>
      <!----Items count --->
      <b-col cols="2" style="color:red"><h6><i>Total Item(s)</i></h6></b-col>
      <b-col cols="3" class=" mx-2 text-left"><b>0</b></b-col>
      <b-col class=" mx-2 text-right">
        <b-form-checkbox v-model="checked" name="Customercheck-button" switch>
        </b-form-checkbox>
      </b-col>
    </b-row>
    <b-table striped hover :items="filteredData" :fields="fields" :small="true"
             class="Mx-4"
    ></b-table>
  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    fields: [
      'Recipe #', 'Name', 'Category', 'Measure ', 'Quantity on Hand', 'Price', 'ingredients', 'Location', 'Folder', 'UPC', 'Tax', 'Picture'
    ],

    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Location', icon: 'CpuIcon' },
        null,
        { name: 'Folder', icon: 'FileTextIcon' },
        null,
        { name: 'test1', icon: 'UploadIcon', modalTarget: 'Ingredients' }
      ]
    }].concat(userDropdown),
    checked: true
  })
};
</script>
