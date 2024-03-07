import { iconsUrl } from "../config/public";

type Props = {
  src: string;
  alt: string;
};
export default ( {alt, src}: Props) => {
  const actualSrc = `${iconsUrl()}/${src}`;

  return <img alt={alt} src={actualSrc} />;
};