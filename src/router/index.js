import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'MonitorIcon'
  },
  {
    path: '/sales',
    name: 'Sales',
    component: () => import(/* webpackChunkName: "sales" */ '../views/Sales.vue'),
    icon: 'TagIcon'
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import(/* webpackChunkName: "inventory" */ '../views/Inventory.vue'),
    icon: 'PackageIcon'
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import(/* webpackChunkName: "customer" */ '../views/Customer.vue'),
    icon: 'ShoppingCartIcon'
  },
  {
    path: '/bank',
    name: 'Bank',
    component: () => import(/* webpackChunkName: "bank" */ '../views/Bank.vue'),
    icon: 'HomeIcon'
  },
  {
    path: '/accounting',
    name: 'Accounting',
    component: () => import(/* webpackChunkName: "accounting" */ '../views/Accounting.vue'),
    icon: 'BookIcon'
  },
  {
    path: '/vendor',
    name: 'Vendor',
    component: () => import(/* webpackChunkName: "vendor" */ '../views/Vendor.vue'),
    icon: 'TruckIcon'
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import(/* webpackChunkName: "employee" */ '../views/Employee.vue'),
    icon: 'UsersIcon'
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import(/* webpackChunkName: "reports" */ '../views/Reports.vue'),
    children: [
      {
        path: '/reports',
        name: 'ReportsHome',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/Reports/Reportshome.vue')
      },
      {
        path: '/reports/view',
        name: 'ReportsView',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/Reports/View.vue')
      }
    ],
    icon: 'BarChart2Icon'
  },
  {
    path: '/preference',
    name: 'Preference',
    component: () => import(/* webpackChunkName: "preference" */ '../views/Preference.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/premium',
    name: 'Premium',
    component: () => import(/* webpackChunkName: "connection" */ '../views/Premium.vue'),
    icon: 'PocketIcon'
  },
  {
    path: '/saleshistory',
    name: 'Sales History',
    component: () => import(/* webpackChunkName: "saleshistory" */ '../views/SalesHistory.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/itemhistory',
    name: 'Item History',
    component: () => import(/* webpackChunkName: "saleshistory" */ '../views/ItemHistory.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/journal',
    name: 'Journal',
    component: () => import(/* webpackChunkName: "journal" */ '../views/Journal.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/chartofaccounts',
    name: 'ChartofAccounts',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/ChartofAccounts.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/Recipe.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/bankreconciliation',
    name: 'BankReconciliation',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/BankReconciliation.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/payroll',
    name: 'Payroll',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/Payroll.vue'),
    children: [
      {
        path: '/payroll',
        name: 'PayrollHome',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/Payroll/PayrollHome.vue'),
        children: [
          {
            path: '/payroll/timesheet',
            name: 'PayrollTimeSheet',
            props: true,
            component: () =>
              import(/* webpackChunkName: "target" */ '../views/Payroll/PayrollTimeSheet.vue')
          },
          {
            path: '/payroll/otherincome',
            name: 'PayrollOtherIncome',
            props: true,
            component: () =>
              import(/* webpackChunkName: "target" */ '../views/Payroll/PayrollOtherIncome.vue')
          },
          {
            path: '/payroll/deduction',
            name: 'PayrollDedcution',
            props: true,
            component: () =>
              import(/* webpackChunkName: "target" */ '../views/Payroll/PayrollDeduction.vue')
          }
        ]
      }
    ],
    icon: 'SettingsIcon'
  },
  {
    path: '/worksheet',
    name: 'WorkSheet',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/WorkSheet.vue'),
    children: [
      {
        path: '/worksheet',
        name: 'WorkSheet',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/WorkSheet/WorkSheet.vue')
      },
      {
        path: '/worksheet/workingtb',
        name: 'WorkingTb',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/WorkSheet/WorkingTb.vue')
      },
      {
        path: '/worksheet/leadschedule',
        name: 'LeadSchedule',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/WorkSheet/LeadSchedule.vue')
      },
      {
        path: '/worksheet/unadjustedtb',
        name: 'UnadjustedTb',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/WorkSheet/UnadjustedTb.vue')
      },
      {
        path: '/worksheet/adjustingjournal',
        name: 'AdjustingJournal',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/WorkSheet/AdjustingJournal.vue')
      }
    ],
    icon: 'SettingsIcon'
  },
  {
    path: '/writecheque',
    name: 'WriteCheque',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/WriteCheque.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/creditcard',
    name: 'CreditCard',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/CreditCard.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/enterbills',
    name: 'EnterBills',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/EnterBills.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/Calendar.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/timestamp',
    name: 'TimeStamp',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/TimeStamp.vue'),
    children: [
      {
        path: '/timestamp',
        name: 'TimeStampHome',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/Timestamp/Timestamphome.vue')
      }
    ],
    icon: 'SettingsIcon'
  },
  {
    path: '/paybill',
    name: 'PayBill',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/PayBill.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/Invoice.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/customerpayment',
    name: 'CustomerPayment',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/CustomerPayment.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import(/* webpackChunkName: "chartofaccounts" */ '../views/Deposit.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/salesgrid',
    name: 'SalesGrid',
    component: () => import(/* webpackChunkName: "salesgrid" */ '../views/SalesGrid.vue'),
    children: [
      {
        path: '/salesgrid',
        name: 'SalesGridItem',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/Sales/SalesGridItem.vue')
      },
      {
        path: '/salesgrid/miscitems',
        name: 'SalesMiscItems',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views/Sales/SalesMiscItems.vue')
      },
      {
        path: '/salesgrid/payment',
        name: 'SalesGridPay',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views//Sales/SalesGridPay.vue')
      },
      {
        path: '/salesgrid/order',
        name: 'SalesGridOrder',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views//Sales/SalesGridOrder.vue')
      },
      {
        path: '/salesgrid/table',
        name: 'SalesGridTable',
        props: true,
        component: () =>
          import(/* webpackChunkName: "target" */ '../views//Sales/SalesGridTable.vue')
      }
    ],
    icon: 'SettingsIcon'
  }
];

const router = new VueRouter({
  routes,
  foo: 'bar'
});

export default router;
