import { Props } from "./Props";

function trimPath(path?: string) {
  if (!path)
    return "";

  const ret = path.replaceAll(/\/$/g, "").replaceAll(/^\//g, "");

  return ret;
}

export default function NavUl( { tree, root = "/", currentUrl }: Props) {
  const currentPathName = trimPath(currentUrl);

  return (<ul>
    {
      tree.map((item) => {
        const href = item.path ? trimPath(`${root }/${ item.path}`) : undefined;

        return (
          <li>
            {(href && (
              <a
                href={href}
                className={currentPathName === item.path ? "active" : ""}
              >
                {item.title}
              </a>
            )) || (
              <span className={currentPathName === item.path ? "active" : ""}>
                {item.title}
              </span>
            )}
            {item.children?.length && (
              <NavUl tree={item.children} root={root} currentUrl={currentPathName}/>
            )}
          </li>
        );
      } )
    }
  </ul>);
}
