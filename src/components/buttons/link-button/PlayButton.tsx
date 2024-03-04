import VideogameAssetIcon from "#icons/mui/VideogameAssetIcon";
import { classNames } from "../../utils";
import LinkButton, { Props as LinkButtonProps } from "./LinkButton";

export type Props = LinkButtonProps;
const PlayButton = ({icon = <VideogameAssetIcon />, children="Jugar", ...otherProps}: Props) => {
  return (
    <LinkButton className={classNames(otherProps.className)} icon={icon} {...otherProps}>{children}</LinkButton>
  )
}

export default PlayButton;