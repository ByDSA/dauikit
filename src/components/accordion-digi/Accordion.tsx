import { JSX } from "react";

type Props = {
  children: JSX.Element[];
  style?: React.CSSProperties;
};
const Accordion = ( { children, style }: Props) => {
  // eslint-disable-next-line no-param-reassign
  children = children.map((el, i) => ( {
    ...el,
    style,
    key: i,
  } )) as unknown as Props["children"];

  return <div className={"dauikit-accordion-digi"}>{children}</div>;
};

export default Accordion;
