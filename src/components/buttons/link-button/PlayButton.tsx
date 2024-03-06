import VideogameAssetIcon from "#icons/mui/VideogameAssetIcon";
import LinkButton, { Props as LinkButtonProps } from "./LinkButton";

export type Props = LinkButtonProps;
const PlayButton = ({icon = <VideogameAssetIcon />, children="Jugar", theme, ...otherProps}: Props) => {
  return (
    <LinkButton theme={theme} icon={icon} {...otherProps}>{children}</LinkButton>
  )
}

export default PlayButton;