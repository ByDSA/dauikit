import { HamburgerNavDigi, HamburgerNavDigiProps } from "../hamburger-nav-digi";
import { Themeable, classNames } from "../utils";
import MainNav, { type Props as MainNavProps } from "./MainNav";
import styles from "./Nav.module.css";
import NavUl from "./NavUl";
import { Props as CommonProps } from "./Props";
import ScrollNav from "./ScrollNav";

type Theme = {
  mainNav?: Themeable;
  hamburgerNav?: HamburgerNavDigiProps["theme"];
};
export type Props = CommonProps & {
 theme?: Theme;
};

export default function Nav(props: Props) {
  const hamburgerNavDigiHeader = <header className="header-img" style={{
    "--img": `url(${props?.logo?.src })`,
  } as Record<string, string>}></header>;
  const sideNav: HamburgerNavDigiProps["sideNav"] = {
    header: hamburgerNavDigiHeader,
  };
  const mainNavProps: MainNavProps = {
    currentUrl: props.currentUrl,
    root: props.root,
    tree: props.tree,
    className: props?.theme?.mainNav?.className,
  };

  return <article className={styles.nav}>
    {MainNav(mainNavProps)}
    <HamburgerNavDigi theme={props?.theme?.hamburgerNav} sideNav={sideNav}>
      <ScrollNav content={{
        className: classNames(props?.theme?.hamburgerNav?.sideNav?.content?.className, "content"),
      }}>
        {NavUl(props)}
      </ScrollNav>
    </HamburgerNavDigi>
  </article>;
}