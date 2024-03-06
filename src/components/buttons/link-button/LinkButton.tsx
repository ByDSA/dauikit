import { JSX } from "react";
import shadowsStyles from "../../../styles/shadows.module.css";
import { ALink, ALinkProps } from "../../link";
import { Themeable, classNames } from "../../utils";
import { Button, ButtonProps } from "../button";
import styles from "./styles.module.css";

export type Props = Omit<ButtonProps, "children" | "className" | "disabled" | "link"> & {
  href: string;
  disabled?: boolean;
  icon?: JSX.Element;
  children?: JSX.Element | string;
  theme?: {
    link?: Themeable;
    button?: Themeable;
  };
};

const LinkButton = ( {href, disabled, theme, children, icon}: Props) => {
  const linkProps: ALinkProps = {
    target: "_blank",
    rel:"noopener noreferrer",
    title: typeof children === "string" ? children : undefined,
    href,
    disabled,
    className: theme?.link?.className,
  };

  return <ALink {...linkProps}>
    <Button disabled={linkProps.disabled} className={classNames(styles.button, shadowsStyles.button, theme?.button?.className)}>{icon}{children}</Button>
  </ALink>;
};

export default LinkButton;