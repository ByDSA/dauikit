import NpmIcon from "#icons/logos/NpmIcon";
import { SocialBadge } from "../badge";
import styles from "./styles.module.css";

type Props = {
  user: string;
};
const Npm = ( {user}: Props) => {
  const url = `https://www.npmjs.com/~${user}`;

  return SocialBadge( {
    children: <NpmIcon inline/>,
    url,
    title: "npm",
    className: styles.button,
  } );
};

export default Npm;
