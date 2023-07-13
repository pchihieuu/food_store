import Link from "next/link";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import {
    clearCart,
    closeCart,
    decreaseQuantity,
    deleteFromCart,
    increaseQuantity,
    openCart
} from "../../redux/action/cart";

const CartSidebar = ({
    openCart,
    cartItems,
    activeCart,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    clearCart,
}) => {
    const price = () => {
        let price = 0;
        cartItems.forEach((item) => (price += item.price * item.quantity));

        return price;
    };

    return (
        <>
            <div
                className={`cart-sidebar cart ${
                    activeCart ? "cart_active" : ""
                }`}
                style={{width:"250px"}}
            >
                <div className="cart-sidebar-header">
                    <div className="cart-sidebar-item-count">
                        <span>
                            <i className="fas fa-shopping-bag"></i>
                        </span>
                        {cartItems.length > 0
                            ? `${cartItems.length} items`
                            : "No Products"}
                    </div>
                    <span className="close-cart-sidebar" onClick={closeCart}>
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                <PerfectScrollbar>
                    <ul>
                        {cartItems.map((item, i) => (
                            <li key={i}>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <img
                                            src={item.image}
                                            style={{
                                                width: "75px",
                                                height: "75px",
                                            }}
                                            className="align-self-center mr-2"
                                            alt=""
                                        />
                                        <div>
                                            <h6 className="mb-0">
                                                {item.name}
                                            </h6>
                                            <p className="mb-0">
                                                <span>${item.price} </span> x
                                                <span>{item.quantity}</span>
                                            </p>
                                            <div className="quantity-switch">
                                                <span
                                                    onClick={(e) =>
                                                        decreaseQuantity(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    <button>-</button>
                                                </span>
                                                {/* {item.quantity} */}
                                                <span
                                                    onClick={(e) =>
                                                        increaseQuantity(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    <button>+</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-total">
                                        {item.quantity * item.price}
                                        <span
                                            className="ml-2"
                                            onClick={(e) =>
                                                deleteFromCart(item.id)
                                            }
                                        >
                                            <button>Delete</button>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </PerfectScrollbar>

                {cartItems.length > 0 && (
                    <button className="clear-cart" onClick={clearCart}>
                        Clear all
                    </button>
                )}
                <Link href="/cart">
                    <div className="cart-popup-total">
                        <span>Continue</span>
                        <div className="amount">Total : {price()}</div>
                    </div>
                </Link>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
    activeCart: state.counter,
});

const mapDispatchToProps = {
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    openCart,
    clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
