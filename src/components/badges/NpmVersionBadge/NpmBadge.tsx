"use client";

import { useEffect, useState } from "react";
import NpmIcon from "src/icons/logos/NpmIcon";
import { DualBadge } from "../DualBadge";
import { Props as CommonProps } from "./common";

export type Props = CommonProps & {
  version?: string;
};

export default function NpmBadge( {pkg, version: staticVersion, className}: Props) {
  const link = {
    href: `https://www.npmjs.com/package/${pkg}`,
    title: `Ver paquete "${pkg}" en npm`,
  };
  const version = useVersion( {
    version: staticVersion,
    pkg,
  } );
  const icon = <NpmIcon />;

  return <DualBadge className={className} link={link} left={icon} right={`v${version}`} />;
}

type UseVersionProps = {
  version?: string;
  pkg: string;
};
const useVersion = ( {version: staticVersion, pkg}: UseVersionProps) =>{
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
