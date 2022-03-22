import React from "react";
import { Carousel } from "react-responsive-carousel";
import cn from "classnames";

const ImageCarousel = () => {
  return (
    <div className="carousel">
      <Carousel
        showThumbs={false}
        renderIndicator={renderIndicator}
        showStatus={false}
        showArrows={false}
      >
        <Slide imageId="tailor.jpg"></Slide>
        <Slide imageId="taxi.jpg"></Slide>
        <Slide imageId="keke.jpg"></Slide>
      </Carousel>
      <h2>Giving you the opportunity you wish you had</h2>
    </div>
  );
};

const renderIndicator = (onClick, isSelected) => {
  return (
    <div
      className={cn("thumb", { "active-thumb": isSelected })}
      onClick={onClick}
    ></div>
  );
};

const Slide = ({ imageId, children = <></> }) => {
  return (
    <div className="slide">
      <img className="img-slide" src={`/img/${imageId}`} alt="elem" />
      {children}
    </div>
  );
};

export default ImageCarousel;
