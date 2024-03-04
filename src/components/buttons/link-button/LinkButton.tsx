import { JSX } from "react";
import shadowsStyles from "../../../styles/shadows.module.css";
import { Anchor, AnchorProps } from "../../Anchor";
import { classNames } from "../../utils";
import { Button, ButtonProps } from "../button";
import styles from "./styles.module.css";

export type Props = Omit<ButtonProps, "anchor" | "children" | "disabled"> & {
  href: string;
  disabled?: boolean;
  icon?: JSX.Element;
  children?: JSX.Element | string;
};

const LinkButton = ( {href, disabled, className, children, icon}: Props) => {
  const anchorProps: AnchorProps = {
    target: "_blank",
    rel:"noopener noreferrer",
    title: typeof children === "string" ? children : undefined,
    href,
    disabled,
  };

  return <Anchor {...anchorProps}>
    <Button disabled={anchorProps.disabled} className={classNames(styles.button, shadowsStyles.button, className)}>{icon}{children}</Button>
  </Anchor>;
};

export default LinkButton;