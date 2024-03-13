import { ReactNode } from 'react';
import { Icon } from '../icon';

export type CardInput = {
  children?: ReactNode;
};

export type CardHeadingInput = {
  icon?: keyof typeof Icon;
  title?: string;
  children?: ReactNode;
};
