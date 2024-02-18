import { JSX } from "react";

type Props = {
  children?: JSX.Element[];
};
const Accordion = ( { children }: Props) => {
  let actualChildren: Props["children"];

  if (Array.isArray(children)) {
    actualChildren = children.map((el, i) => ( {
      ...el,
      key: i.toString(),
    } ));
  }
  else
    actualChildren = children;

  return <div className={"dauikit-accordion-digi"}>{actualChildren}</div>;
};

export default Accordion;
