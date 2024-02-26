import { Themeable, classNames } from "../utils";
import styles from "./SideNav.module.css";

export type SideNavProps = Themeable & {
  header?: React.ReactNode;
  children: React.ReactNode;
};

export default function SideNav( {header, children, className}: SideNavProps) {
  return (<aside className={classNames(styles.sideNav, className)}>
    {header}
    {children}
  </aside>);
}