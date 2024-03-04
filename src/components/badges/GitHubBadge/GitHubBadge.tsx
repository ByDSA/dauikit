import GitHubIcon from "#icons/logos/GitHubIcon";
import { AnchorProps } from "../../Anchor";
import { DualBadge } from "../DualBadge";
import { Props } from "./common";

export default function GitHubBadge( {repo, disabled, ...badgeProps}: Props) {
  const urlName = generateImgLinkRepoName(repo);
  const anchor: AnchorProps = {
    href: `https://github.com/${repo}`,
    title: `Ver repositorio "${repo}" en GitHub`,
    disabled,
    target: "_blank",
  };
  const icon = <GitHubIcon />;
  const left = <>{icon}GitHub</>;

  return <DualBadge {...badgeProps} anchor={anchor} left={left} right={urlName} />;
}

function generateImgLinkRepoName(repo: string): string {
  return repo.split("/")[1];
}