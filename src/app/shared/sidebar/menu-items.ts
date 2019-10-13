import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/backoffice/users',
    title: 'Users',
    icon: 'mdi mdi-account',
    class: '',
    label: '',
    labelClass: '',
    permission: 'Pages.Users',
    extralink: false,
    submenu: []
  },
  {
    path: '/backoffice/farms',
    title: 'Farms',
    icon: 'mdi mdi-gate',
    class: '',
    label: '',
    labelClass: '',
    permission: 'Pages.Farms',
    extralink: false,
    submenu: []
  },
  {
    path: '/leathers',
    title: 'Animals',
    icon: 'mdi mdi-cow',
    class: '',
    label: '',
    labelClass: '',
    permission: 'Pages.Leather',
    extralink: false,
    submenu: []
  },
  {
    path: '/slaughter',
    title: 'Slaughter',
    icon: 'mdi mdi-cow',
    class: '',
    label: '',
    labelClass: '',
    permission: 'Pages.Slaughterhouse',
    extralink: false,
    submenu: []
  },
  {
    path: '/tannery',
    title: 'Tannery',
    icon: 'mdi mdi-cow',
    class: '',
    label: '',
    labelClass: '',
    permission: 'Pages.Tannery',
    extralink: false,
    submenu: []
  },
  {
    path: '/inventory',
    title: 'Inventory',
    icon: 'mdi mdi-home',
    class: '',
    label: '',
    labelClass: '',
    permission: 'Pages.Inventory',
    extralink: false,
    submenu: []
  },
  {
    path: '/production',
    title: 'Productions',
    icon: 'mdi mdi-city',
    class: '',
    label: '',
    labelClass: '',
    permission: 'Pages.Production',
    extralink: false,
    submenu: []
  }
];
