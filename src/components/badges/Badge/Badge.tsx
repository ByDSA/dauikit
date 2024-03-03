import shadowsStyle from "src/styles/shadows.module.css";
import { Themeable, classNames } from "../../utils";
import styles from "./styles.module.css";

export type InheritingProps = Themeable & {
  disabled?: boolean;
};

type Props = InheritingProps & {
  left?: string;
  leftIcon?: React.ReactNode;
  right: string;
  disabled?: boolean;
};

const Badge = ( { left, right, leftIcon, className, disabled }: Props) => {
  const classes = [styles.badge, shadowsStyle.button];

  if (disabled)
    classes.push(styles.disabled);

  if (className)
    classes.push(className);

  return <span className={classNames(...classes)}><span className={styles.left}>{leftIcon}{left}</span><span className={styles.right}>{right}</span></span>;
};

export default Badge;