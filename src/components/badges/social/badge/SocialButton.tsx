import { ReactNode } from "react";
import { ALink } from "src/Link";
import { Themeable, classNames } from "../../../utils";
import styles from "./SocialButton.module.css";

type Props = Themeable & {
  url: string;
  title: string;
  children: ReactNode;
};
const SocialButton = ( {url, title, children, className = ""}: Props) => (
  <ALink href={url} target="_blank" rel="noreferrer" title={title} className={classNames(styles.socialButton, className)}>
    {children}
  </ALink>
);

export default SocialButton;