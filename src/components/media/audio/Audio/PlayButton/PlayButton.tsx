import { classNames } from "#utils";
import { ReactElement, RefObject } from "react";
import { PlayerStatus } from "../PlayerStatus";
import PauseIcon from "./PauseIcon";
import PlayIcon from "./PlayIcon";
import styles from "./styles.module.css";

function getButtonIconFromStatus(status: PlayerStatus): ReactElement {
  switch (status) {
    case PlayerStatus.LOADING:
    case PlayerStatus.LOADING_AND_PLAY:
      return <>Loading...</>;
    case PlayerStatus.STOPPED:
    case PlayerStatus.PAUSED:
    case PlayerStatus.WAIT_FOR_LOAD:
    case PlayerStatus.LOADING_ERROR:
      return <PlayIcon />;
    case PlayerStatus.PLAYING:
      return <PauseIcon />;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
}

export type Props = {
  status: PlayerStatus;
  src: string;
  disabled: boolean;
  audioRef: RefObject<HTMLAudioElement>;
};
const PlayButton = ( { status, audioRef, src, disabled }: Props) => {
  const onClick = () => {
    if (disabled) 
      return;

    const audioTag = audioRef.current;

    if (!audioTag) 
      return;

    if (status === PlayerStatus.WAIT_FOR_LOAD) {
      audioTag.src = src;
      audioTag.load();
    } else if (
      status === PlayerStatus.LOADING ||
      status === PlayerStatus.LOADING_ERROR
    ) 
      audioTag.load();
    else if (
      status === PlayerStatus.PAUSED ||
      status === PlayerStatus.STOPPED
    )
      audioTag.play();
    else if (status === PlayerStatus.PLAYING) 
      audioTag.pause();
  };
  const anchor = (
    <a className={classNames(styles.icon)} onClick={onClick}>
      {getButtonIconFromStatus(status)}
    </a>
  );

  return <article className={styles.playButton}>{anchor}</article>;
};

export default PlayButton;
