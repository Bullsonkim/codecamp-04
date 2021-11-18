import BannerUI from "./Banner.presenter";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/dog.jpeg" alt="mydog" width="1920" height="200" />
      </div>
      <div>
        <img src="/images/bono.png" alt="bono" width="1920" height="200" />
      </div>
    </Slider>
  );
}
