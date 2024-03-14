"use client";

import { Themeable, classNames } from "#utils";
import { useEffect, useRef, useState } from "react";
import { InfoContainer } from "./InfoContainer";
import { PlayButton } from "./PlayButton";
import { PlayerStatus } from "./PlayerStatus";
import styles from "./styles.module.css";

export type Props = Themeable & {
  img?: string;
  name: string;
  path: string;
  preload?: boolean;
  disabled?: boolean;
};
const Audio = ( {name,
  path,
  className,
  preload,
  disabled = false}: Props) => {
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState(PlayerStatus.WAIT_FOR_LOAD);
  const audioRef = useRef<HTMLAudioElement>(null);
  const infoContainer = InfoContainer( {
    audioRef,
    name,
    duration,
    disabled,
    status,
    time,
    setTime,
  } );

  useAudioListeners( {
    audioRef,
    preload,
    path,
    setStatus,
    status,
    setTime,
    setDuration,
  } );

  const playButton = PlayButton( {
    audioRef,
    status,
    disabled,
    src: path,
  } );

  return (
    <Section
      className={classNames(styles.audio, className)}
      disabled={disabled}
    >
      <audio controls ref={audioRef}>
        <source type="audio/mp3" />
      </audio>
      {playButton}
      {infoContainer}
    </Section>
  );
};
// Para prevenir el error de que no existe la prop 'disabled'
const Section = (props: any) => <section {...props} />;

export default Audio;

type UpdateTimeProps = {
  setTime: (time: number)=> void;
  setDuration: (duration: number)=> void;
  audioRef: HTMLAudioElement | null;
};
const updateTime = ( { setDuration, setTime, audioRef }: UpdateTimeProps) => {
  if (!audioRef)
    return;

  setTime(audioRef.currentTime);
  setDuration(audioRef.duration);
};

type UseAudioListenersProps = Pick<Props, "path" | "preload"> & {
  audioRef: React.RefObject<HTMLAudioElement>;
  setStatus: (status: PlayerStatus)=> void;
  setDuration: (duration: number)=> void;
  setTime: (time: number)=> void;
  status: PlayerStatus;
};
const useAudioListeners = ( {audioRef,
  preload,
  path,
  setStatus,
  status,
  setTime,
  setDuration}: UseAudioListenersProps) => {
  useEffect(() => {
    const audioTag = audioRef.current;

    if (audioTag && preload) {
      audioTag.src = path;
      setStatus(PlayerStatus.LOADING);
    }
  }, [path, preload, audioRef]);

  useEffect(() => {
    const audioTag = audioRef.current;

    if (!audioTag)
      return;

    audioTag.addEventListener("loadstart", () => {
      if (!preload)
        setStatus(PlayerStatus.LOADING_AND_PLAY);
      else
        setStatus(PlayerStatus.LOADING);
    } );

    audioTag.addEventListener("error", () => {
      setStatus(PlayerStatus.LOADING_ERROR);
    } );

    audioTag.addEventListener("loadeddata", () => {
      if (status === PlayerStatus.LOADING_AND_PLAY)
        audioTag.play();
      else
        setStatus(PlayerStatus.STOPPED);

      updateTime( {
        audioRef: audioTag,
        setDuration,
        setTime,
      } );
    } );

    audioTag.addEventListener("play", () => {
      setStatus(PlayerStatus.PLAYING);
    } );

    audioTag.addEventListener("pause", () => {
      setStatus(PlayerStatus.PAUSED);
    } );

    audioTag.addEventListener("timeupdate", () => {
      updateTime( {
        setTime,
        setDuration,
        audioRef: audioTag,
      } );
    } );
  }, [status]);
};
