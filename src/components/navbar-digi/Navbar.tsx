import { useEffect } from "react";
import { classNames } from "#utils";
import { SideNavProps } from "../hamburger-nav-digi/SideNav";
import LogoBox, { LogoBoxImg } from "./LogoBox";
import Nav, { type Props as NavProps } from "./Nav";
import stylesHamburgerNav from "./Navbar-hamburger.module.css";
import styles from "./Navbar.module.css";
import { Props as InnerProps } from "./Props";

type Props = {
  logo?: LogoBoxImg;
  links: {
    currentUrl: string;
    root?: string;
    tree: InnerProps["tree"];
  };
  sideNav?: SideNavProps;
};

const NavbarDigi = ( { logo, links }: Props) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementsByClassName(styles["dauikit-navbardigi"])[0];

      if (window.scrollY > 0)
        navbar.classList.add(styles.scrolled);
      else
        navbar.classList.remove(styles.scrolled);
    } );
  }, []);
  const theme: NavProps["theme"] = {
    mainNav: {
      className: classNames("main", styles.main),
    },
    hamburgerNav: {
      className: classNames("hamburgernavdigi", stylesHamburgerNav.hamburgernavdigi),
      sideNav: {
        className: classNames(stylesHamburgerNav.sideNav),
        content: {
          className: classNames(stylesHamburgerNav.content),
        },
      },
      shape: {
        className: classNames(stylesHamburgerNav.shape),
      },
    },
  };
  const actualProps: NavProps = {
    currentUrl: links.currentUrl,
    root: links.root ?? "",
    tree: links.tree,
    logo,
    theme,
  };

  return (
    <section className={classNames(styles["dauikit-navbardigi"])}>
      {logo && <LogoBox img={logo} root={actualProps.root} />}
      {Nav(actualProps)}
    </section>
  );
};

export default NavbarDigi;
