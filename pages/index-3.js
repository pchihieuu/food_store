import CategoryTab from "../components/ecommerce/categoryTab";
import FeatchDeals from "../components/ecommerce/fetchDeals";
import Layout from "../components/layout/Layout";
import CategoryProduct from "../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "./../components/ecommerce/Filter/PriceRangeSlider";
import SizeFilter from "./../components/ecommerce/Filter/SizeFilter";
import VendorFilter from "./../components/ecommerce/Filter/VendorFilter";
import Banner5 from "./../components/elements/Banner5";
import Bottom from "./../components/elements/Bottom";
import IntroPopup from "./../components/elements/IntroPopup";
import CategorySlider2 from './../components/sliders/Category2';
import Intro2 from "./../components/sliders/Intro2";
import Link from "next/link"

function Test() {
    return (
        <>
            <IntroPopup />
            <Layout noBreadcrumb="d-none" headerStyle="header-style-1">
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4-5">
                            <section className="home-slider position-relative mb-30">
                                <div className="home-slide-cover mt-30">
                                    <Intro2/>
                                </div>
                            </section>

                            <section className="product-tabs section-padding position-relative">
                                <CategoryTab/>
                            </section>

                            <section className="section-padding pb-5">
                                <div className="section-title" data-wow-delay="0">
                                    <h3 className="">Deals Of The Day</h3>
                                    <Link href="/shop-grid-right"><a className="show-all">
                                All Deals
                                <i className="fi-rs-angle-right"></i>
                            </a></Link>
                                </div>
                                <FeatchDeals/>
                            </section>
                            <section className="banners mb-15">
                    <div className="container">
                        <div className="row">
                            <Banner5 />
                        </div>
                    </div>
                </section>

                
                        </div>
                        <div className="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">
                            <div className="sidebar-widget widget-category-2 mb-30">
                                <h5 className="section-title style-1 mb-30">
                                    Category
                                </h5>
                                <CategoryProduct />
                            </div>

                            <div className="sidebar-widget price_range range mb-30">
                                <h5 className="section-title style-1 mb-30">Fill by price</h5>
                                    <div className="bt-1 border-color-1"></div>
                                

                                <div className="price-filter">
                                    <div className="price-filter-inner">
                                        <br />
                                        <PriceRangeSlider />

                                        <br />
                                    </div>
                                </div>

                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Color</label>
                                        <VendorFilter />
                                        <label className="fw-900 mt-15">
                                            Item Condition
                                        </label>
                                        <SizeFilter />
                                    </div>
                                </div>
                                <br />
                            </div>

                            <div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">
                                <h5 className="section-title style-1 mb-30">New products</h5>
                                    <div className="bt-1 border-color-1"></div>
                                
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img
                                            src="/assets/imgs/shop/thumbnail-3.jpg"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="content pt-10">
                                        <h5>
                                            <a>Chen Cardigan</a>
                                        </h5>
                                        <p className="price mb-0 mt-5">
                                            $99.50
                                        </p>
                                        <div className="product-rate">
                                            <div
                                                className="product-rating"
                                                style={{ width: "90%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img
                                            src="/assets/imgs/shop/thumbnail-4.jpg"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="content pt-10">
                                        <h6>
                                            <a>Chen Sweater</a>
                                        </h6>
                                        <p className="price mb-0 mt-5">
                                            $89.50
                                        </p>
                                        <div className="product-rate">
                                            <div
                                                className="product-rating"
                                                style={{ width: "80%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img
                                            src="/assets/imgs/shop/thumbnail-5.jpg"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="content pt-10">
                                        <h6>
                                            <a>Colorful Jacket</a>
                                        </h6>
                                        <p className="price mb-0 mt-5">$25</p>
                                        <div className="product-rate">
                                            <div
                                                className="product-rating"
                                                style={{ width: "60%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                <img
                                    src="/assets/imgs/banner/banner-11.png"
                                    alt=""
                                />
                                <div className="banner-text">
                                    <span>Oganic</span>
                                    <h4>
                                        Save 17% <br />
                                        on{" "}
                                        <span className="text-brand">Oganic</span>
                                        <br />
                                        Juice
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="popular-categories section-padding">
                    <div className="container">
                    <div className="section-title">
                        <div className="title">
                            <h3>Shop by Categories</h3>
                            <Link href="/shop-grid-right"><a className="show-all">
                                All Categories
                                <i className="fi-rs-angle-right"></i>
                            </a></Link>
                        </div>
                        </div>
                        <div className="carausel-8-columns-cover position-relative">
                            <div
                                className="carausel-8-columns"
                                id="carausel-8-columns"
                            >
                                <CategorySlider2/>
                            </div>
                        </div>
                    </div>
                </section>

                

                <Bottom />
            </Layout>
        </>
    );
}

export default Test;
