import "./Button.css";

type Props = {
  value: string;
  disabled?: boolean;
};
export default function Button( { value, disabled }: Props) {
  return <button className="dauikit-button" disabled={disabled}>{value}</button>;
}
