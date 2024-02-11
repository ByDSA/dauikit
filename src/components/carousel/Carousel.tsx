import { useState, type JSX } from "react";
import "./Carousel.css";

type Props = {
  items: JSX.Element[];
};
export default function Carousel( { items }: Props): JSX.Element {
  const [index, setIndex] = useState(0);
  const {length} = items;
  const handlePrevious = () => {
    const newIndex = index - 1;
    const n = newIndex < 0 ? length - 1 : newIndex;

    setIndex(n);
  };
  const handleNext = () => {
    const newIndex = index + 1;
    const n = newIndex >= length ? 0 : newIndex;

    setIndex(n);
  };

  return (
    <>
      {items[index]}
      <div className="dauikit-carousel">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <p>{index}</p>
      </div>
    </>
  );
}
