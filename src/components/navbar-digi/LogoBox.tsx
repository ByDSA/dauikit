import "./LogoBox.css";

export type LogoBoxImg = {
  src: string;
  alt?: string;
};

type Props = {
  img: LogoBoxImg;
  root?: string;
};
export default function LogoBox( {img,root}: Props) {
  return <div className="logo-box">
    <a href={root} rel="home" itemProp="url"
    ><img src={img.src} alt={img.alt} itemProp="logo"/></a>
  </div>;
}