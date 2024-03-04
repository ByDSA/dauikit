import shadowsStyle from "src/styles/shadows.module.css";
import Anchor, { AnchorProps } from "../../Anchor/Anchor";
import { Themeable, classNames } from "../../utils";
import styles from "./styles.module.css";

export type Props = Themeable & {
  noButton?: boolean;
  children: React.ReactNode;
  anchor?: AnchorProps;
};

export type PropsNoChildren = Omit<Props, "children">;

const Badge = ( { className, noButton, children, anchor: anchorProps }: Props) => {
  const classes = [styles.badge];

  if (!noButton && !anchorProps?.disabled)
    classes.push(shadowsStyle.button);

  if (className)
    classes.push(className);

  const badge = <span className={classNames(...classes)}>{children}</span>;

  return <Anchor {...anchorProps}>{badge}</Anchor>;
};

export default Badge;