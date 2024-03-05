// eslint-disable-next-line import/no-extraneous-dependencies
import { renderToString } from "react-dom/server";
import styles from "./styles.module.css";

export type Props = {
  id: string;
  alt?: string;
  title?: string;
};

const YouTube = ( { id, title, alt }: Props) => {
  const imgAlt = alt ?? title;
  const previewImage = <img src={`https://img.youtube.com/vi/${id
  }/hqdefault.jpg`} alt={imgAlt} />;
  const src =
  `https://www.youtube.com/embed/${id}?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&showinfo=1&rel=0&modestbranding=0`;
  const srcDoc = `<style>${srcDocStyle}</style><a href='${src}'>${renderToString(previewImage)}<span class='playButton'>▶</span></a></span>`;

  return <span className={styles.youtubeVideo}><iframe allowFullScreen loading="lazy" title={title} srcDoc={srcDoc}></iframe></span>;
};

export default YouTube;

const srcDocStyle = `
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
html,
body {
  height: 100%;
}
img,
span {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
}

*:has(> .playButton) {
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .playButton {
    background-color: var(--color-foreground);
    color: var(--color-background);
    opacity: 0.9;
    border-color: rgba(0, 0, 0, 0.25);
  }
}

.playButton {
  --size: 1.5em;
  --color-background: black;
  --color-foreground: white;
  opacity: 0.5;
  height: var(--size);
  width: var(--size);
  font: 48px/1.5 sans-serif;
  border-radius: 50%;
  border: 1px solid black;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
  color: var(--color-foreground);
  background-color: var(--color-background);

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding-left: 0.2em;
  padding-bottom: 0.05em;
}
`;