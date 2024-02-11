import { JSX, useRef, useState } from "react";

import "./AccordionItem.css";

type Props = {
  title: string;
  disabled?: boolean;
  children: JSX.Element[];
};
export default function AccordionItem( {title,
  children,
  disabled}: Props): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const [closing, setClosing] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    if (clicked)
      setClosing(true);

    setClicked((prev) => !prev);
  };
  const handleTransitionEnd = () => {
    if (!clicked)
      setClosing(false);
  };
  const control = (() => {
    if (disabled)
      return "❌";

    if (clicked)
      return "—";

    return "+";
  } )();

  return (
    <div
      className={`accordion-item${closing ? " closing" : ""}${
        clicked ? " open" : ""
      }${disabled ? " disabled" : ""}`}
    >
      <header onClick={!disabled ? handleToggle : undefined}>
        <span className="control">{control} </span>
        <span className="title">{title}</span>
      </header>

      <div
        ref={contentEl}
        className="accordion-item-content"
        onTransitionEnd={handleTransitionEnd}
        style={
          clicked
            ? {
              height: contentEl.current?.scrollHeight,
            }
            : {
              height: "0px",
            }
        }
      >
        <span className="margin">{children}</span>
      </div>
    </div>
  );
}
