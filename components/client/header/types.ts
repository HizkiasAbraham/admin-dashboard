import { ReactNode } from 'react';

export type NavItemProp = {
  icon: 'Home' | 'Location' | 'Notification' | 'Account';
  text: string;
  isActive: boolean;
  onClick?: Function;
};
