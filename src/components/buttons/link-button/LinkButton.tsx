import { JSX } from "react";
import shadowsStyles from "../../../styles/shadows.module.css";
import { ALink, ALinkProps } from "../../link";
import { classNames } from "../../utils";
import { Button, ButtonProps } from "../button";
import styles from "./styles.module.css";

export type Props = Omit<ButtonProps, "children" | "disabled" | "link"> & {
  href: string;
  disabled?: boolean;
  icon?: JSX.Element;
  children?: JSX.Element | string;
};

const LinkButton = ( {href, disabled, className, children, icon}: Props) => {
  const linkProps: ALinkProps = {
    target: "_blank",
    rel:"noopener noreferrer",
    title: typeof children === "string" ? children : undefined,
    href,
    disabled,
  };

  return <ALink {...linkProps}>
    <Button disabled={linkProps.disabled} className={classNames(styles.button, shadowsStyles.button, className)}>{icon}{children}</Button>
  </ALink>;
};

export default LinkButton;