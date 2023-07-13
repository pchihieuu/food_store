import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProduct2 from "../ecommerce/SingleProduct2";

SwiperCore.use([Navigation]);

const NewArrivalTabSlider = ({ products }) => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                grid={{
                    rows: 2
                }}
                loop={false}
                navigation={{
                    prevEl: ".custom_prev_n",
                    nextEl: ".custom_next_n"
                }}
                className="custom-class"
                breakpoints={{
                    480: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 4
                    }
                }}
            >
                {products.map((product, i) => (
                    <SwiperSlide key={i}>
                        <SingleProduct2 product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_n">
                    <i className="fi-rs-arrow-small-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_n">
                    <i className="fi-rs-arrow-small-right"></i>
                </span>
            </div>
        </>
    );
};

export default NewArrivalTabSlider;
