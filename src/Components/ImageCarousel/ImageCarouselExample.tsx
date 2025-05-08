import { ImageCarousel } from "./ImageCarousel";
// import Exm from './Exm'
import images from './images.json';

export const ImageCarouselExample = () => {
  return (
    <div style={{width: '500px', height:'300px'}}>
      <ImageCarousel images={images} />
      {/* <br/>
      <hr/>
      <br/>
      <Exm images={images} /> */}
    </div>
  );
};
