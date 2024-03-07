import FacebookIcon from "#icons/logos/FacebookIcon";
import { SocialBadge } from "../badge";
import styles from "./styles.module.css";

type Props = {
  user: string;
};

const Facebook = ( {user}: Props) => {
  const url = `https://facebook.com/${user}`;

  return SocialBadge( {
    children: <FacebookIcon inline />,
    url,
    title: "Facebook",
    className: styles.button,
  } );
};

export default Facebook;
