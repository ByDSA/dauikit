import { ReactNode } from "react";
import { Themeable, classNames } from "#utils";
import styles from "./styles.module.css";

export type Props = Themeable & {
  disabled?: boolean;
  children: ReactNode;
};

export default function Button( { children, disabled, className }: Props) {
  return <button className={classNames(styles.button, className)} disabled={disabled}>{children}</button>;
}
