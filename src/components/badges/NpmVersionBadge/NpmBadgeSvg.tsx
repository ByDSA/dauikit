import { Props } from "./common";

export default function NpmBadgeSvg( {pkg, className}: Props) {
  const fullUrl = `https://www.npmjs.com/package/${pkg}`;
  const imgProps = {
    alt: "npm library",
    src: `http://img.shields.io/npm/v/${pkg}.svg`,
  };
  const img = <img {...imgProps} />;

  return (
    <a href={fullUrl} key={fullUrl} className={className} title="Librería en npm">{img}</a>
  );
}
