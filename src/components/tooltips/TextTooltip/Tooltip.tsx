import { classNames } from "../../utils";
import { Tooltip, TooltipProps } from "../Tooltip";
import styles from "./styles.module.css";

type Props = Omit<TooltipProps, "content"> & {
  text: string;
};

const TextTooltip = ( {text, theme, ...commonProps}: Props) => Tooltip( {
  theme: {
    wrap: theme?.wrap,
    box: {
      ...theme?.box,
      className: classNames(theme?.box?.className, styles.text),
    },
  },
  content: <span>{text}</span>,
  ...commonProps,
} );

export default TextTooltip;