import { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchByCatagory } from "../../redux/action/product";
import SingleProduct from "./../ecommerce/SingleProduct";

SwiperCore.use([Navigation]);

const DiscountSlider = () => {
    const [discount, setDiscount] = useState([]);

    console.log(discount);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        // With Category
        const allProducts = await fetchByCatagory("/static/product.json");

        // Discount
        const discountProduct = allProducts.filter(
            (item) => item.discount.isActive
        );

        setDiscount(discountProduct);
    };
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                
                navigation={{
                    prevEl: ".custom_prev_d",
                    nextEl: ".custom_next_d",
                }}
                className="custom-class"
            >
                {discount.map((product, i) => (
                    <SwiperSlide key={i}>
                        <SingleProduct product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-nav">
                <button type="button" className="custom_prev_d">
                    Prev
                </button>
                <button type="button" className="custom_next_d">
                    Next
                </button>
            </div>
        </>
    );
};


export default DiscountSlider;
