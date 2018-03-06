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
    icon: 'drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'cursor'
      },
      {
        name: 'Social Buttons',
        url: '/buttons/social-buttons',
        icon: 'cursor'
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
    icon: 'bell',
    children: [
      {
        name: 'Toastr',
        url: '/notifications/toastr',
        icon: 'bell'
      },
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'calculator',
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
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'cloud-download',
    class: 'mt-auto',
    variant: 'success'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'layers',
    variant: 'danger'
  }
];
