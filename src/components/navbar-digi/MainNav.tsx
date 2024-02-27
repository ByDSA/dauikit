import { classNames } from "#utils";
import styles from "./MainNav.module.css";
import NavUl from "./NavUl";
import { Props as CommonProps } from "./Props";

export type Props = CommonProps & {
  className?: string;
};

export default function MainNav(props: Props) {
  return (<nav className={classNames(styles.main, props.className)}>
    {NavUl(props)}
  </nav>);
}