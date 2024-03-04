import GitHubIcon from "#icons/logos/GitHubIcon";
import { DualBadge } from "../DualBadge";
import { Props } from "./common";

export default function GitHubBadge( {repo, ...badgeProps}: Props) {
  const urlName = generateImgLinkRepoName(repo);
  const link = {
    href: `https://github.com/${repo}`,
    title: `Ver repositorio "${repo}" en GitHub`,
  };
  const icon = <GitHubIcon />;
  const left = <>{icon}GitHub</>;

  return <DualBadge {...badgeProps} link={link} left={left} right={urlName} />;
}

function generateImgLinkRepoName(repo: string): string {
  return repo.split("/")[1];
}