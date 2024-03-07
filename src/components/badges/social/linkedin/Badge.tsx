import LinkedInIcon from "#icons/logos/LinkedInIcon";
import { SocialBadge } from "../badge";
import styles from "./styles.module.css";

type Props = {
  profileUrl: string;
};
const Linkedin = ( { profileUrl }: Props) => {
  const fullUrl = `https://www.linkedin.com/in/${profileUrl}`;

  return SocialBadge( {
    children: <LinkedInIcon inline/>,
    url: fullUrl,
    title: "LinkedIn",
    className: styles.button,
  } );
};

export default Linkedin;
