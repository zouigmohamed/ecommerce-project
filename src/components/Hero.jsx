import "swiper/css";
import "swiper/css/autoplay"; // Import the autoplay CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hero.css";

const data = [
  {
    id: 2,
    image: "/public/image2.jpg",
  },
  {
    id: 1,
    image: "/public/image3.jpg",
  },
];

const swiperOptions = {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  parallax: true,
  pagination: {
    clickable: true,
  },
  navigation: true,
  modules: [Parallax, Pagination, Autoplay, Navigation],
};

export default function Hero() {
  return (
<div className=" w-full mt-5 ">
      <Swiper {...swiperOptions} className="mySwiper">
        {data.map((item) => (
          <SwiperSlide key={item.id} className="border-2  ">
            <div
              slot="container-start"
              className="py-20 "
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height:"100%"
              }}
            >
              <div className="title ml-20" data-swiper-parallax="-300">
                {item.id}
              </div>
              <div className="subtitle ml-20" data-swiper-parallax="-200">
                Title
              </div>
              <div className="text ml-20" data-swiper-parallax="-100">
                <p className="text-black text-2xl">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet.
                </p>
                <button className="bg-emerald-400 mt-3 p-4 w-28 rounded-lg text-black font-medium uppercase border-2 border-emerald-400 hover:bg-transparent hover:text-yellow-100">
                  {" "}
                  shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
</div>
  );
}
