import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProduct2 from "./../ecommerce/SingleProduct2";

SwiperCore.use([Navigation]);

const TrendingSlider = ({products}) => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                
                navigation={{
                    prevEl: ".custom_prev_t",
                    nextEl: ".custom_next_t",
                }}
                className="custom-class"
            >
                {products.map((product, i) => (
                    <SwiperSlide key={i}>
                        <SingleProduct2 product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
         

            <div
                className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
            >
                <span className="slider-btn slider-prev slick-arrow custom_prev_t">
                    <i className="fi-rs-arrow-small-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_t">
                    <i className="fi-rs-arrow-small-right"></i>
                </span>
            </div>
        </>
    );
};

export default TrendingSlider;
