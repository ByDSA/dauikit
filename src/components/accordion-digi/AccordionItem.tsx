import { JSX, useEffect, useRef, useState } from "react";

import "./AccordionItem.css";

type Props = {
  children: JSX.Element[];
  style?: React.CSSProperties;
  title: string;
  disabled?: boolean;
  autoResizePollingFrequency?: number;
};
export default function AccordionItem( {title,
  children,
  disabled,
  style,
  autoResizePollingFrequency = 1000}: Props): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [opening, setOpening] = useState(false);
  const contentElRef = useRef<HTMLDivElement>(null);
  const {height: scrollHeight} = useAutoResizeHeight(contentElRef, autoResizePollingFrequency);
  const handleToggle = () => {
    if (clicked)
      setClosing(true);
    else {
      setOpen(true);
      setOpening(true);
    }

    setClicked((prev) => !prev);
  };
  const handleTransitionEnd = () => {
    if (!clicked) {
      setClosing(false);
      setOpen(false);
    } else
      setOpening(false);
  };
  const control = (() => {
    if (disabled)
      return "❌";

    if (clicked)
      return "—";

    return "+";
  } )();
  const classes = (() => {
    const ret = ["accordion-item"];

    if (closing)
      ret.push("closing");

    if (opening)
      ret.push("opening");

    if (open)
      ret.push("open");

    if (disabled)
      ret.push("disabled");

    return ret.join(" ");
  } )();

  return (
    <div
      className={classes}
      style={style}
    >
      <header onClick={!disabled ? handleToggle : undefined}>
        <span className="control">{control} </span>
        <span className="title">{title}</span>
      </header>

      <section
        ref={contentElRef}
        onTransitionEnd={handleTransitionEnd}
        style={
          clicked
            ? {
              height: scrollHeight,
            }
            : {
              height: "0px",
            }
        }
      >
        <hr/>
        <article>{children}</article>
      </section>
    </div>
  );
}

function useAutoResizeHeight(ref: React.MutableRefObject<HTMLDivElement | null>, pollingFrequency = 1000) {
  const [scrollHeight, setScrollHeight] = useState(ref.current?.scrollHeight ?? 0);

  useEffect(() => {
    const f = () =>{
      const height = ref.current?.children[1]?.scrollHeight;

      setScrollHeight(height ?? 0);
    };

    f();
    const interval = setInterval(f, pollingFrequency);

    return () => clearInterval(interval);
  } );

  return {
    height: scrollHeight,
  };
}