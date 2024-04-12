import { projects } from "@/src/mockups/projects";
import { Project } from "../../types";

export type ProjectsTableInput = {
  data?: Project[];
};

export type TableRowInput = {
  row: Project;
  navigate: Function;
};
