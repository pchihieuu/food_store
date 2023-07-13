import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { fetchByCatagory } from "../../redux/action/product";
import FeaturedSlider from "../sliders/Featured";
import NewArrivalTabSlider from "../sliders/NewArrivalTab";
import TrendingSlider from "../sliders/Trending";

function FeatchTabSlider() {
    const [active, setActive] = useState("1");
    const [featured, setFeatured] = useState([]);
    const [trending, setTrending] = useState([]);
    const [newArrival, setNewArrival] = useState([]);

    const featuredProduct = async () => {
        
        setActive("1");
    };

    const trendingProduct = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const trendingItem = allProducts.filter((item) => item.trending);
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const newArrivalItem = allProducts.sort(function (a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalItem);
        setActive("3");
    };

    useEffect(() => {
        featuredProduct();
    }, []);

    return (
        <>
            <div className="section-title wow animate__animated animate__fadeIn">
                <h3 className="">Daily Best Sells</h3>

                <ul className="nav nav-tabs links" id="myTab-1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={active === "1" ? "nav-link active" : "nav-link"} onClick={featuredProduct}>
                            Featured
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={active === "2" ? "nav-link active" : "nav-link"} onClick={trendingProduct}>
                            Popular
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={active === "3" ? "nav-link active" : "nav-link"} onClick={newArrivalProduct}>
                            New added
                        </button>
                    </li>
                </ul>
            </div>

            <div className="row">
                <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
                    <div className="banner-img style-2">
                        <div className="banner-text">
                            <h2 className="mb-100">Bring nature into your home</h2>

                            <Link href="/products">
                                <a className="btn btn-xs">
                                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="tab-content wow fadeIn animated" id="myTabContent">
                        <div className={active === "1" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <FeaturedSlider products={featured} />
                            </div>
                        </div>

                        <div className={active === "2" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <TrendingSlider products={trending} />
                            </div>
                        </div>
                        <div className={active === "3" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <NewArrivalTabSlider products={newArrival} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeatchTabSlider;
