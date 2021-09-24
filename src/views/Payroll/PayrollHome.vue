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
<tree :data="treeData0" >
            <span class="tree-text" slot-scope="{ node }">
              <template v-if="!node.hasChildren()">
                <b-form-checkbox>
               <feather-icon size="1x" icon="FileTextIcon"/>
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
          { text: 'Financials' },
          { text: 'Working Trial Balance' },
          { text: 'Adjusting Entries' },
          {
            text: 'Cash & Bank',
            children: [
              { text: 'Lead' },
              { text: 'User 2' },
              { text: 'User 3' }
            ]
          },
          {
            text: 'Receivables',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Other Current Assets',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Non-Current Assets',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Accounts Payable',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Other Current Liabilities',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Non-Current Liabilities',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Equity',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Income',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Cost of Sales',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          {
            text: 'Expense',
            children: [
              { text: 'Lead' },
              { text: 'Internet Explorer' },
              { text: 'Opera' }
            ]
          },
          { text: 'Analysis' },
          { text: 'Review Notes' }
        ]
      }
    ]
  })
};
</script>
<style lang="scss">
</style>
