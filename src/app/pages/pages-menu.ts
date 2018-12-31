import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true
  },
  {
    title: 'Dashboard',
    icon: 'nb-bar-chart',
    children: [
      {
      title: 'Retweets',
      link: '/pages/dashboard/retweets',
      },
      {
      title: 'Replies',
      link: '/pages/dashboard/replies',
      }
    ]
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
