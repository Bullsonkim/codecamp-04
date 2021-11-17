import BannerUI from "./Banner.presenter";

export default function Banner(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <BannerUI settings={settings} />;
}
