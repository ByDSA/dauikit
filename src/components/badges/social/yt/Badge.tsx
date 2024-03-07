import YouTubeIcon from "#icons/logos/YouTubeIcon";
import { SocialBadge } from "../badge";
import styles from "./styles.module.css";

type Props = {
  channelId: string;
  autosubscribe: boolean;
};

const Youtube = ( { channelId, autosubscribe }: Props) => {
  let url = `https://www.youtube.com/channel/${channelId}`;

  if (autosubscribe)
    url += "?sub_confirmation=1";

  return SocialBadge( {
    children: <YouTubeIcon inline/>,
    url,
    title: "YouTube",
    className: styles.button,
  } );
};

export default Youtube;
