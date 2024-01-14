import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousal.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};
const ImageUrl = [
  {
    url: "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  },
  {
    url: "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  },

  {
    url: "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  },

  {
    url: "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  },

  {
    url: "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  },
];
const Carousal = () => {
  return (
    <div className="carousal-container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="list-style"
      >
        {ImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="mountains" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Carousal;
