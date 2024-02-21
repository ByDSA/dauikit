import LogoBox, { LogoBoxImg } from "./LogoBox";
import Nav from "./Nav";
import "./Navbar.css";
import { Props as InnerProps, type SideNavProps } from "./Props";

type Props = {
  logo?: LogoBoxImg;
  links: {
    currentUrl: string;
    root?: string;
    tree: InnerProps["tree"];
  };
  sideNav?: SideNavProps;
};

const NavbarDigi = ( {logo, links, sideNav}: Props) => {
  const actualProps: InnerProps = {
    currentUrl: links.currentUrl,
    root: links.root ?? "",
    tree: links.tree,
    sideNav: {
      header: {
        ...sideNav?.header,
        logo,
      },
      ...sideNav,
    },
  };

  return <section className="dauikit-navbardigi">
    {logo && <LogoBox img={logo} root={actualProps.root} />}
    {Nav(actualProps)}
  </section>;
};

export default NavbarDigi;