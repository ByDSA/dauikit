import { classNames, Themeable } from "#utils";
import { ChangeEventHandler } from "react";

type Props = Themeable & {
  className: string;
  disabled?: boolean;
  value: number;
  defaultValue?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
const Slider = ( {className, disabled, value, onChange, defaultValue}: Props) => {
  const classes = classNames(className);

  return <input className={classes} type="range" min="0" max="100" step="1" disabled={disabled} value={value} onChange={onChange} defaultValue={defaultValue} />;
};

export default Slider;