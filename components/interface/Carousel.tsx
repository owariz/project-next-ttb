"use client"

import Slider from "react-slick";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

  return (
    <Slider {...settings}>
      <div>
        <div className="w-[100%] h-[40vh] bg-[url('https://en.idei.club/uploads/posts/2023-08/thumbs/1691183107_en-idei-club-p-anime-room-bg-dizain-instagram-32.jpg')] bg-cover bg-center" />
      </div>
      <div>
        <div className="w-[100%] h-[40vh] bg-[url('https://wallpapers.com/images/featured/anime-bedroom-background-ga82xsngkt846ihv.jpg')] bg-cover bg-center" />
      </div>
      <div>
        <div className="w-[100%] h-[40vh] bg-[url('https://en.idei.club/uploads/posts/2023-08/thumbs/1691183107_en-idei-club-p-anime-room-bg-dizain-instagram-32.jpg')] bg-cover bg-center" />
      </div>
      <div>
        <div className="w-[100%] h-[40vh] bg-[url('https://wallpapers.com/images/featured/anime-bedroom-background-ga82xsngkt846ihv.jpg')] bg-cover bg-center" />
      </div>
    </Slider>
  );
}
