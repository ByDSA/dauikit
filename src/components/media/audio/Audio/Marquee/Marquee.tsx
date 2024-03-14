"use client";
import { useState } from "react";
import stylesImp from "./styles.module.css";

function splitUnit(str: string): [number, string] {
  const match = str.match(/(\d+)(\D+)/);

  if (match) {
    return [parseInt(match[1]), match[2]];
  }

  return [+str as number, ""];
}

type Props = {
  enabled?: boolean;
  offset?: string;
  speed?: number;
  activationSensibility?: number;
  children: React.ReactNode;
};

const Marquee = ( { enabled = true,
  offset = "50%",
  speed = 100,
  activationSensibility = 0.9,
  children }: Props ) => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(30);
  const [parentWidth, setParentWidth] = useState(0);
  const offsetPx = fixOffset( {
    offset,
    parentWidth,
  } );
  const hasActivationSensibility = width > parentWidth * activationSensibility;
  const styles = calculateStyles( {
    width,
    height,
    offsetPx,
    speed,
  } );

  if (enabled && hasActivationSensibility) {
    return (
      <span style={styles.marquee} className={stylesImp.marquee}>
        <span style={styles.whole} className={stylesImp.whole}>
          <span>
            <span ref={
              (el) => {
                if (!el)
                  return;

                const rect = el.getBoundingClientRect();

                setWidth(rect.width);
                setHeight(rect.height);

                const parent = el.parentElement?.parentElement?.parentElement?.parentElement;

                if (parent)
                  setParentWidth(parent.clientWidth);
              }
            }>
              {children}
            </span>
          </span>
          <span>
            <span>
              {children}
            </span>
          </span>
        </span>
      </span>
    );
  }

  return (
    <>
      {children}
    </>
  );
};

type CalculateStylesProps = {
  width: number;
  height: number;
  offsetPx: number;
  speed: number;
}

function calculateStyles( { width, height, offsetPx, speed }: CalculateStylesProps ) {
  const widthWithOffsetUnitless = width + offsetPx;
  const marquee = {
    width: `${widthWithOffsetUnitless}px`,
  };
  const fullWidth = 2 * widthWithOffsetUnitless;
  const time = fullWidth / speed;
  const whole = {
    height: `${height}px`,
    animationDuration: time + "s",
  };

  return {
    marquee,
    whole,
  };
}

type FixOffsetProps = {
  offset: string;
  parentWidth: number;
}
function fixOffset( { offset, parentWidth }: FixOffsetProps ) {
  const [offsetUnitless, offsetUnit] = splitUnit(offset);

  switch (offsetUnit) {
    case "%":
      return parentWidth * offsetUnitless / 100;
    default: return offsetUnitless;
  }
}

export default Marquee;
