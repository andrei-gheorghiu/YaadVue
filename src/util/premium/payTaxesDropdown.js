export default {
  name: 'Payroll & Taxes',
  icon: 'FileIcon',
  expanded: true,
  items: [
    { name: 'Run Payroll', icon: 'FileIcon', modalTarget: 'RunPayroll' },
    null,
    { name: 'Other Income', icon: 'FileTextIcon', to: '/Payroll/OtherIncome' },
    { name: 'Make Retroactive Pay', icon: 'FileTextIcon' },
    null,
    { name: 'Voluntary Deduction', icon: 'FileIcon', to: '/Payroll/Deduction' },
    null,
    { name: 'Reverse Payroll', icon: 'FileIcon' },
    null,
    { name: 'Print Payroll', icon: 'FileIcon' }
  ]
};
