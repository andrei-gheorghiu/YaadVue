<template>
  <div id="app">
    <top-navbar />
    <left-sidebar/>
    <b-container :fluid="true">
      <b-row>
        <b-col class="py-3">
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
    <editing-modal/>
    <b-modal id="test-modal">
      This is a test modal...
    </b-modal>
    <bank-transfer/>
    <add-recipe />
    <add-employee />
    <new-reconciliation />
    <sidebar-right />
    <sale-switch/>
    <roll-forward/>
    <new-adj-journal/>
    <change-due/>
    <salary-calculator/>
    <payroll-input-tax/>
    <add-chart-accounts/>
    <utility/>
     <ingredients/>
      <payroll-year-holiday/>
      <userlogout-modal/>
      <userlock-modal/>
      <override-modal/>
      <employment-status/>
       <ws-new-entity/>
       <template-modal/>

  </div>
</template>

<script>
import LeftSidebar from '@/components/LeftSidebar';
import TopNavbar from '@/components/TopNavbar';
import EditingModal from '@/components/EditingModal';
import BankTransfer from './components/BankTransfer';
import AddRecipe from './components/AddRecipe';
import NewReconciliation from './components/NewReconciliation.vue';
import SidebarRight from './components/RightSidebar.vue';
import SaleSwitch from './components/SaleSwitch';
import RollForward from './components/RollForward.vue';
import NewAdjJournal from './components/NewAdjJournal.vue';
import ChangeDue from './components/ChangeDue.vue';
import SalaryCalculator from './components/SalaryCalculator.vue';
import PayrollInputTax from './components/PayrollInputTax.vue';
import Utility from './components/Utility.vue';
import Ingredients from './components/Ingredients.vue';
import AddChartAccounts from './components/AddChartAccounts';
import PayrollYearHoliday from './components/PayrollYearHoliday.vue';
import AddEmployee from './components/AddEmployee.vue';
import UserlogoutModal from './components/UserlogoutModal.vue';
import UserlockModal from './components/UserlockModal.vue';
import OverrideModal from './components/OverrideModal.vue';
import EmploymentStatus from './components/EmploymentStatus.vue';
import WsNewEntity from './components/WsNewEntity.vue';
import TemplateModal from './components/TemplateModal';

export default {
  components: { EditingModal, TopNavbar, LeftSidebar, BankTransfer, AddRecipe, NewReconciliation, SidebarRight, SaleSwitch, RollForward, NewAdjJournal, ChangeDue, SalaryCalculator, PayrollInputTax, Utility, Ingredients, AddChartAccounts, PayrollYearHoliday, AddEmployee, UserlogoutModal, UserlockModal, OverrideModal, EmploymentStatus, WsNewEntity, TemplateModal }
};
</script>,
    ChangeDue

,
    RollForward<style lang="scss">
#app {
  padding-top: 60px;
  min-height: 100vh;
  display: flex;
}
.left-sidebar {
  background-color: #f8f9fa;
  border-right: 1px solid #dfe0e1;
  width: 230px;
  min-width: 230px;
}
:focus {
  outline: none;
}
.dropdown-menu {
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.1), 0 2px 2px 0 rgba(0,0,0,.07), 0 3px 1px -2px rgba(0,0,0,.06)
}
</style>
