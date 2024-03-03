import Badge from "../Badge/Badge";
import Anchor from "./Anchor";
import { Props } from "./common";

export default function GitHubBadge( {repo, logoSrc, ...otherProps}: Props) {
  const urlName = generateImgLinkRepoName(repo);
  const logoImgProps = {
    alt: "GitHub Logo",
    src: logoSrc ?? "/dauikit/logos/github.svg",
  };
  const logoImg = <img {...logoImgProps} />;
  const badge = <Badge left="GitHub" leftIcon={logoImg} right={urlName}/>;
  const fullUrl = `https://github.com/${repo}`;

  return (
    <Anchor href={fullUrl} disabled={otherProps.disabled} title="Código fuente en GitHub">{badge}</Anchor>
  );
}

function generateImgLinkRepoName(repo: string): string {
  return repo.split("/")[1];
}