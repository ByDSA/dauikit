import { LinkButton, LinkButtonProps } from "../../../buttons/link-button";
import { classNames } from "../../../utils";
import styles from "./styles.module.css";

export type Props = LinkButtonProps;
const Button = ( { theme, ...restOfProps }: Props) => {
  const actualTheme: LinkButtonProps["theme"] = {
    button: {
      className: classNames(styles.button, theme?.button?.className),
    },
    link: {
      className: classNames(styles.link, theme?.link?.className),
    },
  };

  return <LinkButton
    theme={actualTheme}
    {...restOfProps}
  />;
};

export default Button;