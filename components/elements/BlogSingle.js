import Link from "next/link";
import React from "react";

const BlogSingle = () => {
    return (
        <>
            <div className="single-page pt-50 pr-30">
                <div className="single-header style-2">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <h6 className="mb-10">
                                <Link href="#"><a>Recipes</a></Link>
                            </h6>
                            <h2 className="mb-10">
                                Best smartwatch 2021: the top wearables you can
                                buy today
                            </h2>
                            <div className="single-header-meta">
                                <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                                    <Link href="#"><a className="author-avatar">
                                        <img
                                            className="img-circle"
                                            src="/assets/imgs/blog/author-1.png"
                                            alt=""
                                        />
                                    </a></Link>
                                    <span className="post-by">
                                        By <Link href="#"><a>Sugar Rosie</a></Link>
                                    </span>
                                    <span className="post-on has-dot">
                                        2 hours ago
                                    </span>
                                    <span className="time-reading has-dot">
                                        8 mins read
                                    </span>
                                </div>
                                <div className="social-icons single-share">
                                    <ul className="text-grey-5 d-inline-block">
                                        <li className="mr-5">
                                            <Link href="#"><a>
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-bookmark.svg"
                                                    alt=""
                                                />
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><a>
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-heart-2.svg"
                                                    alt=""
                                                />
                                            </a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="single-thumbnail">
                    <img src="/assets/imgs/blog/blog-19.png" alt="" />
                </figure>
                <div className="single-content">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <p className="single-excerpt">
                                Helping everyone live happier, healthier lives
                                at home through their kitchen. Kitchn is a daily
                                food magazine on the Web celebrating life in the
                                kitchen through home cooking and kitchen
                                intelligence.
                            </p>
                            <p>
                                We've reviewed and ranked all of the best
                                smartwatches on the market right now, and we've
                                made a definitive list of the top 10 devices you
                                can buy today. One of the 10 picks below may
                                just be your perfect next smartwatch.
                            </p>
                            <p>
                                Those top-end wearables span from the Apple
                                Watch to Fitbits, Garmin watches to
                                Tizen-sporting Samsung watches. There's also
                                Wear OS which is Google's own wearable operating
                                system in the vein of Apple's watchOS - you’ll
                                see it show up in a lot of these devices.
                            </p>
                            <h5 className="mt-50">
                                Lorem ipsum dolor sit amet cons
                            </h5>
                            <p>
                                Throughout our review process, we look at the
                                design, features, battery life, spec, price and
                                more for each smartwatch, rank it against the
                                competition and enter it into the list you'll
                                find below.
                            </p>
                            <img
                                className="mb-30"
                                src="/assets/imgs/blog/blog-21.png"
                                alt=""
                            />
                            <p>
                                Tortor, lobortis semper viverra ac, molestie
                                tortor laoreet amet euismod et diam quis aliquam
                                consequat porttitor integer a nisl, in faucibus
                                nunc et aenean turpis dui dignissim nec
                                scelerisque ullamcorper eu neque, augue quam
                                quis lacus pretium eros est amet turpis nunc in
                                turpis massa et eget facilisis ante molestie
                                penatibus dolor volutpat, porta pellentesque
                                scelerisque at ornare dui tincidunt cras feugiat
                                tempor lectus
                            </p>
                            <blockquote>
                                <p>
                                    Integer eu faucibus <Link href="#"><a>dolor</a></Link>
                                    <sup>
                                        <Link href="#"><a>[5]</a></Link>
                                    </sup>
                                    . Ut venenatis tincidunt diam elementum
                                    imperdiet. Etiam accumsan semper nisl eu
                                    congue. Sed aliquam magna erat, ac eleifend
                                    lacus rhoncus in.
                                </p>
                            </blockquote>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Amet id enim, libero sit. Est
                                donec lobortis cursus amet, cras elementum
                                libero convallis feugiat. Nulla faucibus
                                facilisi tincidunt a arcu, sem donec sed sed.
                                Tincidunt morbi scelerisque lectus non. At leo
                                mauris, vel augue. Facilisi diam consequat amet,
                                commodo lorem nisl, odio malesuada cras. Tempus
                                lectus sed libero viverra ut. Facilisi rhoncus
                                elit sit sit.
                            </p>

                            <div className="entry-bottom mt-50 mb-30">
                                <div className="tags w-50 w-sm-100">
                                    <Link href="/blog-category-big"><a

                                        rel="tag"
                                        className="hover-up btn btn-sm btn-rounded mr-10"
                                    >
                                        deer
                                    </a></Link>
                                    <Link href="/blog-category-big"><a

                                        rel="tag"
                                        className="hover-up btn btn-sm btn-rounded mr-10"
                                    >
                                        nature
                                    </a></Link>
                                    <Link href="/blog-category-big"><a

                                        rel="tag"
                                        className="hover-up btn btn-sm btn-rounded mr-10"
                                    >
                                        conserve
                                    </a></Link>
                                </div>
                                <div className="social-icons single-share">
                                    <ul className="text-grey-5 d-inline-block">
                                        <li>
                                            <strong className="mr-10">
                                                Share this:
                                            </strong>
                                        </li>
                                        <li className="social-facebook">
                                            <Link href="#"><a>
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-facebook.svg"
                                                    alt=""
                                                />
                                            </a></Link>
                                        </li>
                                        <li className="social-twitter">
                                            <Link href="#"><a>
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-twitter.svg"
                                                    alt=""
                                                />
                                            </a></Link>
                                        </li>
                                        <li className="social-instagram">
                                            <Link href="#"><a>
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-instagram.svg"
                                                    alt=""
                                                />
                                            </a></Link>
                                        </li>
                                        <li className="social-linkedin">
                                            <Link href="#"><a>
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                                    alt=""
                                                />
                                            </a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="author-bio p-30 mt-50 border-radius-15 bg-white">
                                <div className="author-image mb-30">
                                    <Link href="/author"><a>
                                        <img
                                            src="/assets/imgs/blog/author-1.png"
                                            alt=""
                                            className="avatar"
                                        />
                                    </a></Link>
                                    <div className="author-infor">
                                        <h5 className="mb-5">Barbara Cartland</h5>
                                        <p className="mb-0 text-muted font-xs">
                                            <span className="mr-10">306 posts</span>
                                            <span className="has-dot">
                                                Since 2012
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="author-des">
                                    <p>
                                        Hi there, I am a veteran food blogger
                                        sharing my daily all kinds of healthy
                                        and fresh recipes. I find inspiration in
                                        nature, on the streets and almost
                                        everywhere. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Amet id
                                        enim, libero sit. Est donec lobortis
                                        cursus amet, cras elementum libero
                                    </p>
                                </div>
                            </div>

                            <div className="comment-form">
                                <h3 className="mb-15">Leave a Comment</h3>
                                <div className="product-rate d-inline-block mb-30"></div>
                                <div className="row">
                                    <div className="col-lg-9 col-md-12">
                                        <form
                                            className="form-contact comment_form mb-50"
                                            action="#"
                                            id="commentForm"
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control w-100"
                                                            name="comment"
                                                            id="comment"
                                                            cols="30"
                                                            rows="9"
                                                            placeholder="Write Comment"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="name"
                                                            id="name"
                                                            type="text"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="email"
                                                            id="email"
                                                            type="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="website"
                                                            id="website"
                                                            type="text"
                                                            placeholder="Website"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="button button-contactForm"
                                                >
                                                    Post Comment
                                                </button>
                                            </div>
                                        </form>
                                        <div className="comments-area">
                                            <h3 className="mb-30">Comments</h3>
                                            <div className="comment-list">
                                                <div className="single-comment justify-content-between d-flex mb-30">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb text-center">
                                                            <img
                                                                src="/assets/imgs/blog/author-2.png"
                                                                alt=""
                                                            />
                                                            <Link href="#"><a
                                                                
                                                                className="font-heading text-brand"
                                                            >
                                                                Sienna
                                                            </a></Link>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="d-flex justify-content-between mb-10">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="font-xs text-muted">
                                                                        December
                                                                        4, 2021
                                                                        at 3:12
                                                                        pm{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="product-rate d-inline-block">
                                                                    <div
                                                                        className="product-rating"
                                                                        style={{ "width": "80%" }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <p className="mb-10">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipisicing
                                                                elit. Delectus,
                                                                suscipit
                                                                exercitationem
                                                                accusantium
                                                                obcaecati quos
                                                                voluptate
                                                                nesciunt facilis
                                                                itaque modi
                                                                commodi
                                                                dignissimos
                                                                sequi
                                                                repudiandae
                                                                minus ab
                                                                deleniti totam
                                                                officia id
                                                                incidunt?{" "}
                                                                <Link href="#"><a
                                                                    
                                                                    className="reply"
                                                                >
                                                                    Reply
                                                                </a></Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb text-center">
                                                            <img
                                                                src="/assets/imgs/blog/author-3.png"
                                                                alt=""
                                                            />
                                                            <Link href="#"><a
                                                                
                                                                className="font-heading text-brand"
                                                            >
                                                                Brenna
                                                            </a></Link>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="d-flex justify-content-between mb-10">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="font-xs text-muted">
                                                                        December
                                                                        4, 2021
                                                                        at 3:12
                                                                        pm{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="product-rate d-inline-block">
                                                                    <div
                                                                        className="product-rating"
                                                                        style={{ "width": "80%" }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <p className="mb-10">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipisicing
                                                                elit. Delectus,
                                                                suscipit
                                                                exercitationem
                                                                accusantium
                                                                obcaecati quos
                                                                voluptate
                                                                nesciunt facilis
                                                                itaque modi
                                                                commodi
                                                                dignissimos
                                                                sequi
                                                                repudiandae
                                                                minus ab
                                                                deleniti totam
                                                                officia id
                                                                incidunt?{" "}
                                                                <Link href="#"><a
                                                                    
                                                                    className="reply"
                                                                >
                                                                    Reply
                                                                </a></Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-comment justify-content-between d-flex">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb text-center">
                                                            <img
                                                                src="/assets/imgs/blog/author-4.png"
                                                                alt=""
                                                            />
                                                            <Link href="#"><a
                                                                
                                                                className="font-heading text-brand"
                                                            >
                                                                Gemma
                                                            </a></Link>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="d-flex justify-content-between mb-10">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="font-xs text-muted">
                                                                        December
                                                                        4, 2021
                                                                        at 3:12
                                                                        pm{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="product-rate d-inline-block">
                                                                    <div
                                                                        className="product-rating"
                                                                        style={{ "width": "80%" }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <p className="mb-10">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipisicing
                                                                elit. Delectus,
                                                                suscipit
                                                                exercitationem
                                                                accusantium
                                                                obcaecati quos
                                                                voluptate
                                                                nesciunt facilis
                                                                itaque modi
                                                                commodi
                                                                dignissimos
                                                                sequi
                                                                repudiandae
                                                                minus ab
                                                                deleniti totam
                                                                officia id
                                                                incidunt?{" "}
                                                                <Link href="#"><a
                                                                    
                                                                    className="reply"
                                                                >
                                                                    Reply
                                                                </a></Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingle;
