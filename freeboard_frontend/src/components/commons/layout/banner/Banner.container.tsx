import BannerUI from "./Banner.presenter";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // centerMode: false,
    // autoplay: true,
    // autoplaySpeed: 500,

    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/food1.jpg" alt="mydog" width="100%" height="500" />
      </div>
      <div>
        <img src="/images/food2.jpg" alt="bono" width="100%" height="500" />
      </div>
      <div>
        <img src="/images/food3.jpg" alt="bono" width="100%" height="500" />
      </div>
    </Slider>
  );
}
