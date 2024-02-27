import { Button, ButtonProps } from "../button";

type Props = Omit<ButtonProps, "children"> & {
  value: string;
};
export default function TextButton( { value, ...restOfProps }: Props) {
  return <Button {...restOfProps}>{value}</Button>;
}
