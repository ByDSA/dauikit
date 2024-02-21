import Hamburger from "./Hamburger";
import MainNav from "./MainNav";
import { Props } from "./Props";

import "./Nav.css";

export default function Nav(props: Props) {
  return <article className="nav">
    {MainNav(props)}
    {Hamburger(props)}
  </article>;
}