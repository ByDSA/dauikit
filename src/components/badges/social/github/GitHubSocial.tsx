import GitHubIcon from "#icons/logos/GitHubIcon";
import { SocialBadge } from "../badge";
import styles from "./styles.module.css";

type Props = {
  user: string;
};

const Github = (props: Props) => {
  const url = `https://github.com/${props.user}`;

  return SocialBadge( {
    url,
    children: <GitHubIcon inline/>,
    title: "GitHub",
    className: styles.button,
  } );
};

export default Github;
