import { Themeable, classNames } from "#utils";
import styles from "./styles.module.css";

type Props = Themeable & {
  value: string;
  disabled?: boolean;
};
export default function Button( { value, disabled, className }: Props) {
  return <button className={classNames(styles.button, className)} disabled={disabled}>{value}</button>;
}
