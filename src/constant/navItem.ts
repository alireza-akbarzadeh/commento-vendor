import { IconProps } from 'components';

interface NavItem {
  title: string;
  path: string;
  icon?: IconProps['name'];
}

export const navList: NavItem[] = [
  {
    title: 'داشبورد',
    path: '/dashboard',
    icon: 'grid',
  },
  {
    title: 'مدیریت محصولات',
    path: '/products',
  },
  {
    title: 'گزارشات',
    path: '/reports',
  },
  {
    title: 'راهنما و آکادمی',
    path: '/help-academy',
  },
  {
    title: 'خدمات جانبی',
    path: '/additional-services',
  },
  {
    title: 'مدیریت کمپین و تبلیغات',
    path: '/campaign-management',
  },
];
