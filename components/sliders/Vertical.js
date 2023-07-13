import Link from "next/link";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Pagination]);

const VerticalSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                direction={"vertical"}
                
                pagination={{
                    clickable: true
                  }}
                className="custom-class"
            >
                <ul>
                <SwiperSlide>
                    <li>
                        Get great devices up to 50% off
                        <Link href="/shop-grid-right">
                            <a>View details</a>
                        </Link>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li>Supper Value Deals - Save more with coupons</li>
                </SwiperSlide>
                <SwiperSlide>
                    <li>
                        Trendy 25silver jewelry, save up 35% off today
                        <Link href="/shop-grid-right">
                            <a>Shop now</a>
                        </Link>
                    </li>
                </SwiperSlide>
                </ul>
            </Swiper>
        </>
    );
};

export default VerticalSlider;
