export type BreadcrumbInput = {
  paths?: Path[];
  showSearchAndUpload?: boolean;
  classes?: string;
};

type Path = {
  name: string;
  url: string;
};
