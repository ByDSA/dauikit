import "./Hamburger.css";
import { Props } from "./Props";
import SideNav from "./SideNav";

export default function Hamburger(props: Props) {
  return <span className="hamburger">
    <span className="shape">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
    </span>
    <label htmlFor="menu-toggle" className="black-screen"></label>
    {SideNav(props)}
  </span>;
}