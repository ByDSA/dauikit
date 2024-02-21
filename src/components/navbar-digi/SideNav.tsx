import { useEffect } from "react";
import NavUl from "./NavUl";
import { Props as CommonProps, SideNavProps } from "./Props";
import "./SideNav.css";

type Props = CommonProps & {
  sideNav?: SideNavProps;
};
export default function SideNav(props: Props) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementsByClassName("dauikit-navbardigi")[0];

      if (window.scrollY > 0)
        navbar.classList.add("scrolled");
      else
        navbar.classList.remove("scrolled");
    } );

    const scrollableContainer = document.querySelector(".side-nav nav");
    const scrollArrowDown = document.querySelector(
      ".side-nav nav .scroll-arrowDown",
    );
    const scrollArrowUp = document.querySelector(
      ".side-nav nav .scroll-arrowUp",
    );
    const updateScrollArrows = () => {
      if (!scrollableContainer)
        return;

      const hasContentBelow =
      scrollableContainer.scrollTop <
      scrollableContainer.scrollHeight - scrollableContainer.clientHeight;
      const hasContentAbove = scrollableContainer.scrollTop > 0;

      if (hasContentAbove)
        scrollArrowUp?.classList.add("active");
      else
        scrollArrowUp?.classList.remove("active");

      if (hasContentBelow)
        scrollArrowDown?.classList.add("active");
      else
        scrollArrowDown?.classList.remove("active");
    };

    updateScrollArrows();

    scrollableContainer?.addEventListener("scroll", updateScrollArrows);
  }, []);

  let header = null;

  if (!props.sideNav?.disabled) {
    if (props.sideNav?.header.custom)
      header = <header>{props.sideNav.header.custom}</header>;
    else if (props.sideNav?.header.logo) {
      header = <header className="header-img" style={{
        "--img": `url(${props.sideNav?.header.logo.src })`,
      } as Record<string, string>}></header>;
    } else {
      header = <header className="header-text">
        <h1>{props.sideNav?.header.text ?? "Menú"}</h1>
      </header>;
    }
  }

  return (<aside className="side-nav">
    {header}
    <nav>
      <span className="scroll-arrow scroll-arrowUp">⬆</span>
      {NavUl(props)}
      <span className="scroll-arrow scroll-arrowDown">⬇</span>
    </nav>
  </aside>);
}