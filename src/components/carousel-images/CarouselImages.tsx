import Carousel from "../carousel/Carousel";

type Props = {
  images: string[];
};
export default function CarouselImages( { images }: Props) {
  const items = images.map((image, i) => (
    <img src={image} alt={`Carousel Image${ i + 1}`} />
  ));
  
  return <Carousel items={items} />;
}
