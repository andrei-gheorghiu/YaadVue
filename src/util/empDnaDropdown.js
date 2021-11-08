export default {
  name: '',
  icon: 'CropIcon',
  expanded: true,
  items: [
    { name: 'Scheduling', icon: 'CalendarIcon' }, // availability
    { name: 'Task', icon: 'LayersIcon' },
    null,
    { name: 'Time Sheet', icon: 'WatchIcon' },
    null,
    { name: 'Raise & Promotion', icon: 'SmileIcon' },
    { name: 'Payroll', icon: 'ClockIcon', to: '/Payroll' },
    null,
    { name: 'Custom', icon: 'CalendarIcon' }
  ]
};
