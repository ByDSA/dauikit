import { LogoBoxImg } from "./LogoBox";

export type TreeNode = {
  title: string;
  path?: string;
  children?: TreeNode[];
};

export type SideNavProps = {
  disabled?: true;
  header: {
    custom?: React.ReactNode;
    logo?: LogoBoxImg;
    text?: string;
  };
};

export type Props = {
  tree: TreeNode[];
  currentUrl: string;
  root: string;
  sideNav?: SideNavProps;
};