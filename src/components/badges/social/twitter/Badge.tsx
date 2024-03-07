import TwitterIcon from "#icons/logos/TwitterIcon";
import { SocialBadge } from "../badge";
import styles from "./styles.module.css";

type Props = {
  user: string;
};
const Twitter = ( {user}: Props) => {
  const url = `https://twitter.com/${user}`;

  return SocialBadge( {
    children: <TwitterIcon inline />,
    url,
    title: "Twitter",
    className: styles.button,
  } );
};

export default Twitter;
