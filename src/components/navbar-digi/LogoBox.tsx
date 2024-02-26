import { Themeable, classNames } from "../utils";
import styles from "./LogoBox.module.css";

export type LogoBoxImg = {
  src: string;
  alt?: string;
};

type Props = Themeable & {
  img: LogoBoxImg;
  root?: string;
};
export default function LogoBox( {img,root, className}: Props) {
  return <div className={classNames(styles.logoBox, className)}>
    <a href={root} rel="home" itemProp="url"
    ><img src={img.src} alt={img.alt} itemProp="logo"/></a>
  </div>;
}