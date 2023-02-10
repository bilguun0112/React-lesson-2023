import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '../Data/images'
import { Thumbs } from 'swiper';
// ! Function declaration

const SwiperUI = function () {
    const swiperRef = useRef(null)

    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const imageURL = images.map((d, index) => {
        return (
            <SwiperSlide>
                <img key={index} src={d.URL} alt="" width={800} height={1000} />
            </SwiperSlide>
        )
    })
    return (
        <>
            <h1>Day - 60 - Swiper JS with React</h1>
            <Swiper
                modules={[Thumbs]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                // onBeforeInit={swiper => (swiperRef.current = swiper)}
                thumbs={{ swiper: thumbsSwiper }}

            >
                {imageURL}
            </Swiper>
            <Swiper
                modules={[Thumbs]}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
            >
                {imageURL}
            </Swiper>
        </>
    )
}

export { SwiperUI }