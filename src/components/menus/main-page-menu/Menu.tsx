import { classNames, Themeable } from "#utils";
import styles from "./styles.module.css";

export type Props = {
  theme?: {
    wrap?: Themeable;
    menu?: Themeable;
  };
  children?: React.ReactNode;
};
const Menu = ( {children, theme}: Props) => (
  <section className={classNames(styles.menuWrap, theme?.wrap?.className)}>
    <span className={classNames(styles.menu, theme?.menu?.className)}>
      {children}
    </span>
  </section>
);

export default Menu;
