/* eslint-disable no-param-reassign */
import { ChangeEvent, RefObject, useEffect, useRef, useState } from "react";
import { MediaSlider } from "../../../../sliders/MediaSlider";
import Marquee from "../Marquee/Marquee";
import { PlayerStatus } from "../PlayerStatus";
import MuteButton from "./MuteButton";
import styles from "./styles.module.css";
import { getTimeInfo } from "./utils";

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
  name: string;
  duration: number;
  time: number;
  status: PlayerStatus;
  disabled: boolean;
  setTime: (time: number)=> void;
};

const InfoContainer = ( { audioRef, name, setTime, duration, status, time, disabled}: Props) => {
  const [isMuted, setMuted] = useState(false);
  const infoContainerElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (audioRef.current)
      audioRef.current.muted = isMuted;
  }, [isMuted, audioRef]);

  const timeInfo = <span className={styles.time}>{
    getTimeInfo( {
      duration,
      time,
    } )
  }</span>;
  const onSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current)
      return;

    const {value} = event.target;
    const currentTime = (+value * duration) / 100;

    audioRef.current.currentTime = currentTime;
    setTime(currentTime);
  };
  const muteButton = <MuteButton setMuted={setMuted} isMuted={isMuted} audioRef={audioRef}/>;
  const sliderValue = duration > 0 ? (time / duration) * 100 : 0;
  const slider = <MediaSlider className={styles.slider}
    disabled={disabled || !(status === PlayerStatus.PAUSED || status === PlayerStatus.PLAYING || status === PlayerStatus.STOPPED)}
    value={sliderValue}
    onChange={onSliderChange}/>;

  return (<article className={styles.infoContainer} ref={infoContainerElement}>
    <section className={styles.title}>
      <Marquee speed={150}>
        <span className={styles.text}>{name}</span>
      </Marquee>
    </section>
    {timeInfo}
    <section className={styles.bottom}>
      {slider}
      {muteButton}
    </section>
  </article>);
};

export default InfoContainer;