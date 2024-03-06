import FileDownloadIcon from "#icons/mui/FileDownloadIcon";
import { classNames } from "../../utils";
import LinkButton, { Props as LinkButtonProps } from "./LinkButton";
import styles from "./styles.module.css";

export type Props = LinkButtonProps;
const DownloadButton = ({icon = <FileDownloadIcon />, children="Descargar", theme, ...otherProps}: Props) => {
  const actualTheme: LinkButtonProps["theme"] = {
    button: {
      className: classNames(styles.downloadButton, theme?.button?.className),
    },
    link: theme?.link,
  };
  return (
    <LinkButton theme={actualTheme} icon={icon} {...otherProps}>{children}</LinkButton>
  )
}

export default DownloadButton;