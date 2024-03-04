import { ReactNode } from "react";
import { Badge, BadgePropsNoChildren } from "../Badge";
import styles from "./styles.module.css";

export type Props = BadgePropsNoChildren & {
  left: ReactNode;
  right: ReactNode;
};

export default function IconBadge( { left, right, ...badgeProps }: Props) {
  return <Badge {...badgeProps}><span className={styles.left}>{left}</span><span className={styles.right}>{right}</span></Badge>;
}
