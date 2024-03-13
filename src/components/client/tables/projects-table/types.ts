import { projects } from "@/src/mockups/projects";

export type ProjectsTableInput = {
  data: [];
};

export type TableRowInput = {
  row: (typeof projects)[0];
  navigate: any;
};
