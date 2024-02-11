import { JSX } from "react";
import "./Accordion.css";

type Props = {
  children: JSX.Element[];
};
const Accordion = ( { children }: Props) => <div className={"dauikit-accordion-digi"}>{children}</div>;

export default Accordion;
