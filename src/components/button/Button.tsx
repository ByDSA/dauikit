import "./Button.css";

type Props = {
  value: string;
};
export default function Button( { value }: Props) {
  return <button className="dauikit-button">{value}</button>;
}
