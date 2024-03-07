/// <reference types="vite-plugin-svgr/client" />

import svg from "../../public/icons/logos/linkedin.svg?react";
import { IconProps } from "../Icon";

export default ( {inline}: IconProps) => {
  const title = "Logo LinkedIn";

  if (inline) {
    return svg( {
      title,
    } );
  }

  throw new Error("Not implemented");
};