import { projects } from '@/mockups/projects';

export type ProjectsTableInput = {
  data: [];
};

export type TableRowInput = {
  row: (typeof projects)[0];
};
