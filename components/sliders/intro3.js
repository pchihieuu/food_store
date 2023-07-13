import Link from "next/link";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Intro3 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".custom_prev_i3",
                    nextEl: ".custom_next_i3",
                }}
                className="hero-slider-1 style-3 dot-style-1 dot-style-1-position-1"
            >
                <SwiperSlide>
                    <div className="single-hero-slider single-animation-wrap">
                        <div className="container">
                            <div className="slider-1-height-3 slider-animated-1">
                                <div className="hero-slider-content-2">
                                    <h4 className="animated">Trade-In Offer</h4>
                                    <h2 className="animated fw-900">
                                        Supper Value Deals
                                    </h2>
                                    <h1 className="animated fw-900 text-brand">
                                        On All Products
                                    </h1>
                                    <p className="animated">
                                        Save more with coupons & up to 70% off
                                    </p>
                                    <Link href="/shop-product-right">
                                        <a className="animated btn btn-brush btn-brush-3">
                                            Shop Now
                                        </a>
                                    </Link>
                                </div>
                                <div className="slider-img">
                                    <img
                                        src="/assets/imgs/slider/slider-4.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-hero-slider single-animation-wrap">
                        <div className="container">
                            <div className="slider-1-height-3 slider-animated-1">
                                <div className="hero-slider-content-2">
                                    <h4 className="animated">
                                        Tech Promotions
                                    </h4>
                                    <h2 className="animated fw-900">
                                        Tech Trending
                                    </h2>
                                    <h1 className="animated fw-900 text-brand">
                                        Great Collection
                                    </h1>
                                    <p className="animated">
                                        Save more with coupons & up to 20% off
                                    </p>
                                    <Link href="/shop-product-right">
                                        <a className="animated btn btn-brush btn-brush-3">
                                            Shop Now
                                        </a>
                                    </Link>
                                </div>
                                <div className="slider-img">
                                    <img
                                        src="/assets/imgs/slider/slider-5.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow style-3">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i3">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i3">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    );
};

export default Intro3;
