import BlogSidebar from "../components/elements/BlogSidebar";
import Layout from "../components/layout/Layout";

function Guide() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Guide">
            <div className="page-content pt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                                        <div className="single-header style-2">
                                            <h2>Purchase Guide</h2>
                                            <div className="entry-meta meta-1 meta-3 font-xs mt-15 mb-15">
                                                <span className="post-by">By <a href="#">Jonh</a></span>
                                                <span className="post-on has-dot">9 April 2020</span>
                                                <span className="time-reading has-dot">8 mins read</span>
                                                <span className="hit-count has-dot">29k Views</span>
                                            </div>
                                        </div>
                                        <figure className="border-radius-15 mb-30">
                                            <img className="border-radius-15" src="assets/imgs/page/guide-1.png" alt="" />
                                        </figure>
                                        <div className="single-content mb-50">
                                            <h3>1. Account Registering</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi dolores neque omnis ipsa? Quia, nam voluptas! Aut, magnam molestias:</p>
                                            <ul className="mb-30">
                                                <li>Name (required)</li>
                                                <li>Age (required)</li>
                                                <li>Date of birth (required)</li>
                                                <li>Passport/ ID no. (required)</li>
                                                <li>Current career (required)</li>
                                                <li>Mobile phone numbers (required)</li>
                                                <li>Email address (required)</li>
                                                <li>Hobbies &amp; interests (optional)</li>
                                                <li>Social profiles (optional)</li>
                                            </ul>
                                            <h3>2. Select Product</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia necessitatibus repellat placeat aut enim recusandae assumenda adipisci quisquam, deserunt iure veritatis cupiditate modi aspernatur accusantium, mollitia doloribus. Velit, iste.</p>
                                            <h3>3. Confirm Order Content</h3>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut autem sed! Assumenda, nostrum non doloribus tenetur, pariatur veritatis harum natus ipsam maiores dolorem repudiandae laboriosam, cupiditate odio earum eum?</p>
                                            <h3>4.Transaction Completed</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt nam aut magnam libero aspernatur eaque praesentium? Tempore labore quis neque? Magni.</p>
                                            <h3>5. Accepted Credit Cards</h3>
                                            <ul>
                                                <li>Visa</li>
                                                <li>Mastercards</li>
                                                <li>American Express</li>
                                                <li>Discover</li>
                                            </ul>
                                            <span>*Taxes are calculated by your local bank and location.</span>
                                            <h3 className="mt-30">6. Download and Setup</h3>
                                            <ul>
                                                <li>Updated content on a regular basis</li>
                                                <li>Secure &amp; hassle-free payment</li>
                                                <li>1-click checkout</li>
                                                <li>Easy access &amp; smart user dashboard</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                    <BlogSidebar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default Guide;
