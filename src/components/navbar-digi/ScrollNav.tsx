import { useEffect } from "react";
import { Themeable, classNames } from "#utils";
import styles from "./ScrollNav.module.css";

type Props = {
  children?: React.ReactNode;
  content?: Themeable;
};
const ScrollNav = ( {children, content}: Props) => {
  useEffect(() => {
    const scrollableContainer = document.querySelector(`.${ styles.content}`);
    const scrollArrowDown = document.querySelector(
      `.${styles.scrollArrowDown}`,
    );
    const scrollArrowUp = document.querySelector(
      `.${styles.scrollArrowUp}`,
    );
    const updateScrollArrows = () => {
      if (!scrollableContainer)
        return;

      const hasContentBelow =
      scrollableContainer.scrollTop <
      scrollableContainer.scrollHeight - scrollableContainer.clientHeight - 1; // No sé por qué es el -1
      const hasContentAbove = scrollableContainer.scrollTop > 0;

      if (hasContentAbove)
        scrollArrowUp?.classList.add(styles.active);
      else
        scrollArrowUp?.classList.remove(styles.active);

      if (hasContentBelow)
        scrollArrowDown?.classList.add(styles.active);
      else
        scrollArrowDown?.classList.remove(styles.active);
    };

    updateScrollArrows();

    scrollableContainer?.addEventListener("scroll", updateScrollArrows);
  }, []);

  return <nav>
    <span className={classNames(styles.scrollArrow, styles.scrollArrowUp)}>⬆</span>
    <span className={classNames(styles.content, content?.className)}>
      {children}
    </span>
    <span className={classNames(styles.scrollArrow, styles.scrollArrowDown)}>⬇</span>
  </nav>;
};

export default ScrollNav;