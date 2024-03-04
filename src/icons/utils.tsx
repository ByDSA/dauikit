import { iconsUrl } from "../config/public";

/* eslint-disable import/prefer-default-export */
type CreateIconProps = {
  src: string;
  alt: string;
};
export function createIcon( {alt, src}: CreateIconProps) {
  return function Icon() {
    const actualSrc = `${iconsUrl()}/${src}`;

    return <img alt={alt} src={actualSrc} />;
  };
}