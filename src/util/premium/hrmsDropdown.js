export default {
  name: 'HRMS',
  icon: 'BookIcon',
  expanded: true,
  items: [
    { name: 'Personal Records', icon: 'FileIcon' },
    null,
    { name: 'Add New Employee', icon: 'FileTextIcon', modalTarget: 'AddEmployee' },
    { name: 'Make Employee Inactive', icon: 'FileTextIcon' },
    null,
    { name: 'Do Appraisal', icon: 'FileIcon' },
    { name: 'Leave of Absence', icon: 'FileTextIcon' },
    null,
    { name: 'Documents', icon: 'FileIcon' }
  ]
};
