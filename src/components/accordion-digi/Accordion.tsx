import { JSX } from "react";

type Props = {
  children?: JSX.Element[];
  style?: React.CSSProperties;
};
const Accordion = ( { children, style }: Props) => {
  let actualChildren: Props["children"];

  if (Array.isArray(children)) {
    actualChildren = children.map((el, i) => ( {
      ...el,
      style,
      key: i.toString(),
    } ));
  }

  return <div className={"dauikit-accordion-digi"}>{actualChildren}</div>;
};

export default Accordion;
