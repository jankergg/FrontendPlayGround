import { FC, useState , useMemo, useEffect, TransitionEvent} from "react";
import "./ImageCarousel.css";

interface Image {
  src: string;
  alt: string;
}
interface ImageCarouselProps {
  images: Image[];
}

const isLeftWard = (
  activeIndex: number,
  nextIndex: number,
  maxIndex: number
) => {
  if (activeIndex === maxIndex && nextIndex === 0) {
    return true;
  }
  if (activeIndex === 0 && nextIndex === maxIndex) {
    return false;
  }
  return activeIndex < nextIndex;
};

const getAnimateClasses = (
  activeIndex: number,
  nextIndex: number | null,
  maxIndex: number
) => {
  if (nextIndex !== null && isLeftWard(activeIndex, nextIndex, maxIndex)) {
    return {
      enter: "slide-right",
      exit: "slide-left",
    };
  }
  return {
    enter: "slide-left",
    exit: "slide-right",
  };
};

function preLoadImage(src: string) {
  const img = new Image();
  img.src = src;
}

export const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
  const [isTransiting, setIsTransiting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const maxIndex = images.length - 1;

  const { enter, exit } = useMemo(
    () => getAnimateClasses(activeIndex, nextIndex, maxIndex),
    [activeIndex, maxIndex, nextIndex]
  );

  const onPrev = () => {
    setNextIndex((activeIndex + maxIndex) % (maxIndex + 1));
    requestAnimationFrame(() => {
      setIsTransiting(true);
    });
  };
  const onNext = () => {
    setNextIndex((activeIndex + 1) % (maxIndex + 1));
    requestAnimationFrame(() => {
      setIsTransiting(true);
    });
  };
  const onTransitionEnd = (e: TransitionEvent) => {
    if (e.propertyName === "transform") {
      setActiveIndex(nextIndex!);
      setIsTransiting(false);
      setNextIndex(null);
    }
  };

  const activeImage = images[activeIndex];
  const nextImage = nextIndex !== null ? images[nextIndex] : null;

  useEffect(() => {
    const prevIndex = (activeIndex + maxIndex) % (maxIndex + 1);
    const nextIndex = (activeIndex + 1) % (maxIndex + 1);
    const prevLoadImage = images[prevIndex];
    const nextLoadImage = images[nextIndex];
    preLoadImage(prevLoadImage.src);
    preLoadImage(nextLoadImage.src);
  }, [activeIndex, images, maxIndex]);

  return (
    <div className="image-carousel" onTransitionEnd={onTransitionEnd}>
      <button
        type="button"
        className="image-carousel--nav prev"
        name="prev"
        onClick={onPrev}
      >
        Prev
      </button>
      <div
        className={`image-carousel--slider ${isTransiting && exit}`}
        key={activeImage.src}
      >
        <img src={activeImage.src} alt={activeImage.alt} />
      </div>
      <div
        className={`image-carousel--slider ${!isTransiting && enter} ${
          !nextImage && "hidden"
        }`}
        key={nextImage?.src}
      >
        <img src={nextImage?.src} alt={nextImage?.alt} />
      </div>
      <button
        type="button"
        className="image-carousel--nav next"
        name="next"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};
