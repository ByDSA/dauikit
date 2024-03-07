/// <reference types="vite-plugin-svgr/client" />

import { IconProps } from "../Icon";
import IconSrc from "../IconSrc";

import svg from "../../public/icons/logos/github.svg?react";

export default ( {inline}: IconProps) => {
  const title = "Logo GitHub";

  if (inline) {
    return svg( {
      title,
    } );
  }

  return IconSrc( {
    alt: title,
    src: "logos/github.svg",
  } );
};