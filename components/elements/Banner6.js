import React from "react";
import Link from "next/link";
const Banner6 = () => {
    return (
        <>
            <div className="banner-img wow fadeIn mb-45mb-lg-0 animated d-lg-block d-none">
                <img src="/assets/imgs/banner/banner-11.jpg" alt="" />
                <div className="banner-text">
                    <span>Women Zone</span>
                    <h4>
                        Save 17% on <br />
                        Office Dress
                    </h4>
                    <Link href="/products">
                            <a>
                                Shop Now <i className="fi-rs-arrow-right"></i>
                            </a>
                        </Link>
                </div>
            </div>
        </>
    );
};

export default Banner6;
