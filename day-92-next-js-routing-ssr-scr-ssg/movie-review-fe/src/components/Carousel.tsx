import { faDivide } from "@fortawesome/free-solid-svg-icons";
import { SwiperContainer, SwiperSlide, register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Swiper({ images }) {
  return (
    <SwiperContainer>
      <SwiperSlide>{images}</SwiperSlide>
    </SwiperContainer>
  );
}
