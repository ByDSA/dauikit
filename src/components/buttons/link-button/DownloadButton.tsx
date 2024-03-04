import FileDownloadIcon from "#icons/mui/FileDownloadIcon";
import { classNames } from "../../utils";
import LinkButton, { Props as LinkButtonProps } from "./LinkButton";
import styles from "./styles.module.css";

export type Props = LinkButtonProps;
const DownloadButton = ({icon = <FileDownloadIcon />, children="Descargar", ...otherProps}: Props) => {
  return (
    <LinkButton className={classNames(styles.downloadButton, otherProps.className)} icon={icon} {...otherProps}>{children}</LinkButton>
  )
}

export default DownloadButton;