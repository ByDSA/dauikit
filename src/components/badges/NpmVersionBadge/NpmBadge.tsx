"use client";

import { useEffect, useState } from "react";
import { Badge } from "../Badge";
import { Props as CommonProps } from "./common";

export type Props = CommonProps & {
  version?: string;
  logoSrc?: string;
};

export default function NpmBadge( {pkg, logoSrc, version: staticVersion, className}: Props) {
  const fullUrl = `https://www.npmjs.com/package/${pkg}`;
  const version = useVersion( {
    version: staticVersion,
    pkg,
  } );
  const logoImgProps = {
    alt: "Logo npm",
    src: logoSrc ?? "/dauikit/logos/npm.svg",
  };
  const logoImg = <img {...logoImgProps} />;
  const badge = <Badge className={className} leftIcon={logoImg} right={`v${version}`} />;

  return (
    <a href={fullUrl} title="Librería en npm">{badge}</a>
  );
}

const useVersion = ( {version: staticVersion, pkg}: Omit<Props, "logoSrc">) =>{
  const [version, setVersion] = useState(staticVersion ?? "?.?.?");

  useEffect(() => {
    if (staticVersion)
      return;

    const packageJsonUrl = `https://unpkg.com/${pkg}/package.json`;

    fetch(packageJsonUrl)
      .then(response => response.json())
      .then(data => {
        if (data.version)
          setVersion(data.version);
      } )
      .catch(error => {
        console.error("Error fetching package.json", error);
      } );
  }, [pkg, staticVersion]);

  return version;
};
