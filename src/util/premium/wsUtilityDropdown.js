export default {
  name: 'Utilities ',
  icon: 'ToolIcon',
  expanded: true,
  items: [
    { name: 'Authorization', icon: 'FileTextIcon' },
    { name: 'Track Changes', icon: 'FileTextIcon' },
    null,
    { name: 'Roll Forward', icon: 'RotateCwIcon', modalTarget: 'RollForward' },
    { name: 'Template', icon: 'FileTextIcon', modalTarget: 'TemplateModal' },
    null,
    { name: 'Review', icon: 'FileIcon' },
    null,
    { name: 'Export Data', icon: 'FileIcon' }
  ]
};
