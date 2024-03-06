import { Props } from "./common";

export default function GitHubBadgeSvg( {repo, className}: Props) {
  const fullUrl = `https://github.com/${repo}`;
  const urlName = generateImgLinkRepoName(repo);
  const imgProps = {
    alt: "GitHub Source Code",
    src: `https://img.shields.io/badge/GitHub-${urlName}-blue.svg?logo=github`,
  };
  const img = <img {...imgProps} />;

  return (
    <a href={fullUrl} key={fullUrl} className={className} title="Código fuente en GitHub">{img}</a>
  );
}

function generateImgLinkRepoName(repo: string): string {
  const name = repo.split("/")[1];

  return name.replaceAll("-", "--");
}
