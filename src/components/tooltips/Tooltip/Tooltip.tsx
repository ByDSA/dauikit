import { ReactNode } from "react";
import { Themeable, classNames } from "../../utils";
import styles from "./styles.module.css";

export type Position = "bottom" | "left" | "right" | "top";

export type Props = {
  content: ReactNode;
  children: React.ReactNode;
  noArrow?: boolean;
  position?: Position;
  theme?: {
    wrap?: Themeable;
    box?: Themeable;
  };
};

export const defaultValues = Object.freeze( {
  noArrow: false,
  position: "top",
} );

const Tooltip = ( {theme, content, noArrow = defaultValues.noArrow, children, position = defaultValues.position}: Props) => {
  const boxClasses = [styles.box, styles[position]];

  if (!noArrow)
    boxClasses.push(styles.arrow);

  if (theme?.box?.className)
    boxClasses.push(theme.box.className);

  const wrapClasses = [styles.tooltip];

  if (theme?.wrap?.className)
    wrapClasses.push(theme.wrap.className);

  return (
    <div className={classNames(...wrapClasses)}><div className={classNames(...boxClasses)}>{content}</div>{children}</div>
  );
};

export default Tooltip;