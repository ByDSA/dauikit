import { LogoBoxImg } from "./LogoBox";

export type TreeNode = {
  title: string;
  path?: string;
  children?: TreeNode[];
};

export type Props = {
  tree: TreeNode[];
  currentUrl: string;
  root: string;
  logo?: LogoBoxImg;
};