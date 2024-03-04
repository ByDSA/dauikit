import shadowsStyle from "src/styles/shadows.module.css";
import { Themeable, classNames } from "../../utils";
import Anchor from "./Anchor";
import styles from "./styles.module.css";

export type Props = Themeable & {
  disabled?: boolean;
  noButton?: boolean;
  children: React.ReactNode;
  link?: {
    href: string;
    title: string;
  };
};

export type PropsNoChildren = Omit<Props, "children">;

const Badge = ( { className, disabled, noButton, children, link }: Props) => {
  const classes = [styles.badge];

  if (!noButton && !disabled)
    classes.push(shadowsStyle.button);

  if (className)
    classes.push(className);

  const badge = <span className={classNames(...classes)}>{children}</span>;

  return <Anchor disabled={disabled} href={link?.href} title={link?.title}>{badge}</Anchor>;
};

export default Badge;