import { ImageCarousel } from "./ImageCarousel";
import images from './images.json';

export const ImageCarouselExample = () => {
  return (
    <div style={{width: '500px', height:'300px'}}>
      <ImageCarousel images={images} />
    </div>
  );
};
