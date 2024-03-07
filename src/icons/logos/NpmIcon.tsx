import { IconProps } from "../Icon";
import IconSrc from "../IconSrc";

export default ( {inline}: IconProps) => {
  const title = "Logo npm";

  if (inline)
    return <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="npm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"></path></svg>;

  return IconSrc( {
    alt: title,
    src: "logos/npm.svg",
  } );
};