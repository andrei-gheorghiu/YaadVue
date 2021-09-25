<template>
    <div>
        <b-row>
            <b-col>
                <router-view><div></div></router-view>
            </b-col>
            <b-col style="min-height:800px" cols="3" class="bg-light border-left">
                <div class="text-right">
             <b-form-checkbox v-model="checked"  name="PayrollEmployeecheck-button"  switch>
            </b-form-checkbox></div>
               <div>

  <div><h4 class="mb-2">Directory of Employee</h4></div>
  <div>
  <b-tabs content-class="mt-3">
    <b-tab title="Monthly" active><p>
            <!---------Dropdown--->
     <b-col class="text-right">
         <b-dropdown size="sm" id="dropdown-1" text="All"  class="mr-4">
    <b-dropdown-item>All</b-dropdown-item>
    <b-dropdown-item>Manager</b-dropdown-item>
    <b-dropdown-item>Execs</b-dropdown-item>
  </b-dropdown>

     </b-col>
         <!---------Dropdown--->
      <tree :data="treeData0" >
            <span class="tree-text" slot-scope="{ node }">
              <template v-if="!node.hasChildren()">
                <b-form-checkbox>
               <feather-icon size="1x" icon="UserIcon"/>
                {{ node.text }}</b-form-checkbox>
              </template>

              <template v-else>
                  <b-form-checkbox>
              <feather-icon size="1x" icon="FolderIcon"/>
                             {{ node.text }}
                             </b-form-checkbox>
              </template>
            </span>
</tree>
</p></b-tab>
    <b-tab title="Fortnightly"><p>
      <!---------Dropdown--->
     <b-col class="text-right">
         <b-dropdown size="sm" id="dropdown-1" text="All"  class="mr-4">
    <b-dropdown-item>All</b-dropdown-item>
    <b-dropdown-item>Manager</b-dropdown-item>
    <b-dropdown-item>Execs</b-dropdown-item>
  </b-dropdown>

     </b-col>
         <!---------Dropdown--->
            <tree :data="treeData1" >
            <span class="tree-text" slot-scope="{ node }">
              <template v-if="!node.hasChildren()">
                <b-form-checkbox>
               <feather-icon size="1x" icon="UserIcon"/>
                {{ node.text }}</b-form-checkbox>
              </template>

              <template v-else>
                  <b-form-checkbox>
              <feather-icon size="1x" icon="FolderIcon"/>
                             {{ node.text }}
                             </b-form-checkbox>
              </template>
            </span>
</tree>
</p></b-tab>
    <b-tab title="Bi-Monthly" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>

      </div>
            </b-col>
        </b-row>
    </div>

</template>
<script>
export default {
  name: 'PayrollHome',
  check: true,
  data: () => ({
    treeData0: [
      {
        text: 'ABC Inc:',
        state: { expanded: true },
        children: [
          {
            text: 'Accountant',
            children: [
              { text: 'Lead' },
              { text: 'User 2' },
              { text: 'User 3' }
            ]
          },
          {
            text: 'General Manager',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Manager',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Supervisor',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Other',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          }
        ]
      }
    ],
    treeData1: [
      {
        text: 'ABC Inc:',
        state: { expanded: true },
        children: [
          {
            text: 'Prep Cook',
            children: [
              { text: 'Lead' },
              { text: 'User 2' },
              { text: 'User 3' }
            ]
          },
          {
            text: 'Cooks',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Diswasher',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Servers',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Runners',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'House Keepers',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Kitchen Supervisor',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Server Supervisor',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          }]
      }
    ]
  })
};
</script>
<style lang="scss">
</style>
