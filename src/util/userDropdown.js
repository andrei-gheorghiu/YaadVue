export default {
  name: 'Jane Doe',
  icon: 'UserIcon',
  expanded: true,
  items: [
    { name: 'Profile', icon: 'UserIcon' },
    null,
    { name: 'Notification', icon: 'BellIcon' },
    { name: 'Message', icon: 'MessageSquareIcon' },
    null,
    { name: 'Logout', icon: 'LogOutIcon', modalTarget: 'UserlogoutModal' },
    null,
    { name: 'Lock', icon: 'LockIcon', modalTarget: 'UserlockModal' }
  ]
};
