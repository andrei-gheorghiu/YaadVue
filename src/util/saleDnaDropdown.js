export default {
  name: '',
  icon: 'CropIcon',
  expanded: true,
  items: [
    { name: 'Return', icon: 'RotateCcwIcon' },
    { name: 'On-Hold', icon: 'InboxIcon', dataModal: 'test-modal' },
    { name: 'End of Day', icon: 'LayersIcon', modalTarget: 'EndofdayModal' },
    null,
    { name: 'History', icon: 'ActivityIcon', to: '/Saleshistory' },
    null,
    { name: 'Open Cash Draw', icon: 'InboxIcon' },
    null,
    { name: 'Settings', icon: 'ToolIcon' }
  ]
};
