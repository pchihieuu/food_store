import Link from "next/link";
import React from "react";


const Banner2 = () => {
    return (
        <>
            <div className="banner-img banner-big wow fadeIn animated f-none">
                <img src="/assets/imgs/banner/banner-4.png" alt="" />
                <div className="banner-text d-md-block d-none">
                    <h4 className="mb-15 mt-40 text-brand">Repair Services</h4>
                    <h1 className="fw-600 mb-20">
                        We're an Apple <br />
                        Authorised Service Provider
                    </h1>

                    <Link href="/products">
                        <a className="btn">
                            Learn More <i className="fi-rs-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Banner2;
