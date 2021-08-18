export default {
  name: 'Jane Doe',
  icon: 'UserIcon',
  expanded: true,
  items: [
    { name: 'Settings', icon: 'SettingsIcon' },
    null,
    { name: 'Notification', icon: 'BellIcon' },
    { name: 'Message', icon: 'MessageSquareIcon' },
    null,
    { name: 'Logout', icon: 'LogOutIcon', modalTarget: 'UserlogoutModal' },
    null,
    { name: 'Lock', icon: 'LockIcon' }
  ]
};
