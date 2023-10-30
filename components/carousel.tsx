import { useState } from "react";

interface CarouselItem {
  src: string;
  alt: string;
  caption: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  interval?: number;
}

const Carousel = ({ items, autoplay = true, interval = 3000 }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="carousel bg-gray-100">
      <div className="carousel-viewport overflow-x-scroll">
        <div className="carousel-inner flex flex-row">
          {items.map((item, index) => (
            <div
              key={item.src}
              className={`carousel-item ${index === activeIndex ? "active" : ""} flex-none`}
            >
              <img src={item.src} alt={item.alt} className="w-full h-auto" />
              <div className="carousel-caption bg-gray-800 text-white text-center py-2">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
      {items.length > 1 && (
        <div className="flex justify-between px-4 py-2">
          <button
            className="carousel-prev bg-gray-800 text-white px-4 py-2 rounded-full"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="carousel-next bg-gray-800 text-white px-4 py-2 rounded-full"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;