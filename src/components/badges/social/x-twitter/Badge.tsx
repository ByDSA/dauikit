import XIcon from "#icons/logos/XIcon";
import { SocialBadge } from "../badge";
import styles from "./styles.module.css";

type Props = {
  user: string;
};
const XTwitter = ( {user}: Props) => {
  const url = `https://x.com/${user}`;

  return SocialBadge( {
    children: <XIcon inline />,
    url,
    title: "Twitter",
    className: styles.button,
  } );
};

export default XTwitter;
