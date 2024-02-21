import "./MainNav.css";
import NavUl from "./NavUl";
import { Props } from "./Props";

export default function MainNav(props: Props) {
  return (<nav className="main">
    {NavUl(props)}
  </nav>);
}