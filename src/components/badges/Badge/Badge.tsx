import shadowsStyle from "src/styles/shadows.module.css";
import Link, { LinkProps } from "../../link/Link";
import { Themeable, classNames } from "../../utils";
import styles from "./styles.module.css";

export type Props = Themeable & {
  noButton?: boolean;
  children: React.ReactNode;
  link?: LinkProps;
};

export type PropsNoChildren = Omit<Props, "children">;

const Badge = ( { className, noButton, children, link: linkProps }: Props) => {
  const classes = [styles.badge];

  if (!noButton && !linkProps?.disabled)
    classes.push(shadowsStyle.button);

  if (className)
    classes.push(className);

  const badge = <span className={classNames(...classes)}>{children}</span>;

  return <Link {...linkProps}>{badge}</Link>;
};

export default Badge;