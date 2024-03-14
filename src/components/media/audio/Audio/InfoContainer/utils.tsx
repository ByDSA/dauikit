"use client";

export function sec2Time(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


type GetTimeInfoProps = {
  time: number;
  duration: number;
}
export function getTimeInfo({time, duration}:GetTimeInfoProps): string {
  let timeStr;

  timeStr = sec2Time(time);

  const timeInfo = timeStr;

  return timeInfo;
}
