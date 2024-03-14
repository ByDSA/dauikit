import VolumeOff from "#icons/mui/VolumeOff";
import VolumeUp from "#icons/mui/VolumeUp";
import { classNames } from "#utils";
import { RefObject } from "react";
import styles from "./styles.module.css";

type MuteButtonProps = {
  audioRef: RefObject<HTMLAudioElement>;
  setMuted: (muted: boolean)=> void;
  isMuted: boolean;
};
export default function MuteButton( {audioRef, setMuted, isMuted}: MuteButtonProps) {
  const onClick = () => {
    const audioTag = audioRef.current;

    if (!audioTag)
      return;

    audioTag.muted = !audioTag.muted;
    setMuted(audioTag.muted);
  };
  const getMuteButtonMsg = ()=>{
    if (isMuted)
      return <VolumeOff />;

    return <VolumeUp />;
  };

  return (
    <a className={classNames(styles.muteButton)} onClick={onClick}>{getMuteButtonMsg()}</a>
  );
}