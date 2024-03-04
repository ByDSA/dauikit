import { Themeable, classNames } from "../../utils";
import styles from "./Anchor.styles.module.css";

export type Props = Themeable & {
  children: React.ReactNode;
  href?: string;
  title?: string;
  disabled?: boolean;
};

export default function Anchor( {href, disabled, title, className, children}: Props) {
  if (disabled)
    return <span className={classNames(styles.anchor, styles.disabled, className)}>{children}</span>;

  return (
    <a href={href} className={classNames(styles.anchor, className)} title={title}>{children}</a>
  );
}