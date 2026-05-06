import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation ,Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CustomSwiper({
  slides,
  type = "normal",
  component = "festivalcard",
}) {
  const res = slides.filter((s) => s);
  return (
    <Swiper
      modules={
        type === "fade"
          ? [Autoplay, EffectFade]
          : component === "festivalcard"
            ? [Autoplay]
            : [Navigation,Pagination]
      }
      pagination={ component === "month" &&{ clickable: true }}
      navigation={component === "month" && slides.length > 1} 
      effect={type === "fade" ? "fade" : "slide"}
      fadeEffect={type === "fade" ? { crossFade: true } : undefined}
      autoplay={
        component === "festivalcard"
          ? { delay: 3000, pauseOnMouseEnter: true }
          : {
              delay: 5000,
              pauseOnMouseEnter: true,
            }
      }
      loop={true}
    >
      {res.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
