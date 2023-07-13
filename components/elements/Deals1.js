import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import Timer from "./Timer";

const Deals1 = ({ product, addToCart }) => {
    const handleCart = (product) => {
        addToCart(product);
        toast("Product added to Cart !");
    };
    return (
        <>
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                <div className="product-img-action-wrap">
                    <div className="product-img">
                        <Link href="/products">
                            <a>
                                <img src={product.discount.banner} alt="" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="product-content-wrap">
                    <div className="deals-countdown-wrap">
                        <Timer endDateTime="2022-11-27 00:00:00" />
                    </div>
                    <div className="deals-content">
                        <h2>
                            <Link href="/products/[slug]" as={`/products/${product.slug}`}>
                                <a>{product.title}</a>
                            </Link>
                        </h2>
                        <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{ width: "90%" }}></div>
                            </div>
                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                        <div>
                            <span className="font-small text-muted">
                                By{" "}
                                <Link href="/vendor/1">
                                    <a>NestFood</a>
                                </Link>
                            </span>
                        </div>
                        <div className="product-card-bottom">
                            <div className="product-price">
                                <span>${product.price}</span>
                                <span className="old-price">{product.oldPrice && `$ ${product.oldPrice}`}</span>
                            </div>
                            <div className="add-cart">
                                <a className="add" onClick={(e) => handleCart(product)}>
                                    <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = {
    addToCart
};

export default connect(null, mapDispatchToProps)(Deals1);
