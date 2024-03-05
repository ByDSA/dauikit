import { Themeable, classNames } from "../utils";
import styles from "./styles.module.css";

export type LinkProps = {
  href?: string;
  title?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
};

export type Props = LinkProps & Themeable & {
  children: React.ReactNode;
};

export default function Link( {disabled, className, children,...aProps}: Props) {
  const classes = [styles.link];

  if (disabled)
    classes.push(styles.disabled);

  classes.push(className);

  if (disabled || !aProps.href)
    return <span className={classNames(...classes)}>{children}</span>;

  return (
    <a {...aProps} className={classNames(...classes)}>{children}</a>
  );
}