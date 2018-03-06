export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'home',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Users',
    url: '/admin/users',
    icon: 'person',
    children: [
      {
        name: 'User Manager',
        url: '/admin/usermanager',
        icon: 'person'
      },
      {
        name: 'Add User',
        url: '/admin/adduser',
        icon: 'person'
      },
      {
        name: 'User Language',
        url: '/admin/userlang',
        icon: 'person'
      },
      {
        name: 'User Skills',
        url: '/admin/userskill',
        icon: 'person'
      },
      {
        name: 'User Email',
        url: '/admin/useremil',
        icon: 'person'
      }
    ]
  },
  {
    name: 'Roles',
    url: '/admin/roles',
    icon: 'person',
    children: [
      {
        name: 'Role Manager',
        url: '/admin/rolemanager',
        icon: 'person'
      }
    ]
  },
  {
    name: 'Menu',
    url: '/admin/menu',
    icon: 'person',
    children: [
      {
        name: 'Menu Manager',
        url: '/admin/menumanager',
        icon: 'person'
      }
    ]
  },
  {
    name: 'Master Tables',
    url: '/admin/mastertables',
    icon: 'person',
    children: [
      {
        name: 'Gender',
        url: '/admin/genders',
        icon: 'person'
      },
      {
        name: 'Language',
        url: '/admin/languages',
        icon: 'person'
      },
      {
        name: 'Address type',
        url: '/admin/addresstypes',
        icon: 'person'
      },
      {
        name: 'Country',
        url: '/admin/countries',
        icon: 'person'
      },
      {
        name: 'State',
        url: '/admin/states',
        icon: 'person'
      }
    ]
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'person'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'person'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'class',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'class'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'class'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'class'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'class'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'class'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'class'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'class'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'class'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'class'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'class'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'class'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'event',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'event'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'event'
      },
      {
        name: 'Social Buttons',
        url: '/buttons/social-buttons',
        icon: 'event'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'insert_chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'star',
    children: [
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'launch',
    children: [
      {
        name: 'Toastr',
        url: '/notifications/toastr',
        icon: 'launch'
      },
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'launch'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'launch'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'http',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'star',
    children: [
      {
        name: 'Login',
        url: '/pages/login',
        icon: 'star'
      },
      {
        name: 'Register',
        url: '/pages/register',
        icon: 'star'
      },
      {
        name: 'Error 404',
        url: '/pages/404',
        icon: 'star'
      },
      {
        name: 'Error 500',
        url: '/pages/500',
        icon: 'star'
      }
    ]
  }
];
