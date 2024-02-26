import { Themeable, classNames } from "../utils";
import styles from "./Hamburger.module.css";
import SideNav, { SideNavProps } from "./SideNav";

export type Theme = Themeable & {
  sideNav?: Themeable & {
    content?: Themeable;
  };
  shape?: Themeable;
};

export type Props = {
  theme?: Theme;
  sideNav?: Omit<SideNavProps, "children" | "className">;
  children?: React.ReactNode;
};

export default function Hamburger( {sideNav, theme, children}: Props) {
  return <span className={classNames(styles.root, theme?.className)}>
    <span className={classNames(styles.shape, theme?.shape?.className)}>
      <input id="menu-toggle" className={styles.menuToggle}type="checkbox" />
      <label className={styles["menu-button-container"]} htmlFor="menu-toggle">
        <div className={styles["menu-button"]}></div>
      </label>
    </span>
    <label htmlFor="menu-toggle" className={styles["black-screen"]}></label>
    {SideNav( {
      children,
      header: sideNav?.header,
      className: theme?.sideNav?.className,
    } )}
  </span>;
}