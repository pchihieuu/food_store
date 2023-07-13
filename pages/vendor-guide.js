
import Layout from "../components/layout/Layout";

function VendorGuide() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="About">
            <div className="page-content pt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto text-center">
                            <h1 className="title heading-1 style-3 mb-40">Start an online retail business with <span className="text-brand">Nest</span> today</h1>
                            <p className="font-xl mb-80">Sell your products and accept credit card payments from buying customers. Shopify gives you everything you need to run a successful online store.</p>
                        </div>
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <section className="text-center mb-50">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-1.svg" alt="" />
                                            <h4>Best Prices & Offers</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-2.svg" alt="" />
                                            <h4>Wide Assortment</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-3.svg" alt="" />
                                            <h4>Free Delivery</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-xl-8 col-lg-12 mx-auto">
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
                                <h3>2. Choose a package</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia necessitatibus repellat placeat aut enim recusandae assumenda adipisci quisquam, deserunt iure veritatis cupiditate modi aspernatur accusantium, mollitia doloribus. Velit, iste.</p>
                                <h3>3. Add your products</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut autem sed! Assumenda, nostrum non doloribus tenetur, pariatur veritatis harum natus ipsam maiores dolorem repudiandae laboriosam, cupiditate odio earum eum?</p>
                                <h3>4. Start selling</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt nam aut magnam libero aspernatur eaque praesentium? Tempore labore quis neque? Magni.</p>
                                <h3>5. Accepted Credit Cards</h3>
                                <ul>
                                    <li>Visa</li>
                                    <li>Mastercards</li>
                                    <li>American Express</li>
                                    <li>Discover</li>
                                </ul>
                                <span>*Taxes are calculated by your local bank and location.</span>
                                <h3 className="mt-30">6. Get money</h3>
                                <ul>
                                    <li>Updated content on a regular basis</li>
                                    <li>Secure &amp; hassle-free payment</li>
                                    <li>1-click checkout</li>
                                    <li>Easy access &amp; smart user dashboard</li>
                                </ul>
                            </div>

                            <div className="contact-from-area padding-20-row-col mb-80">
                                <h5 className="text-brand mb-10">Contact form</h5>
                                <h2 className="mb-10">Drop Us a Line</h2>
                                <p className="text-muted mb-30 font-sm">Your email address will not be published. Required fields are marked *</p>
                                <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-style mb-20">
                                                <input name="name" placeholder="First Name" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-style mb-20">
                                                <input name="email" placeholder="Your Email" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-style mb-20">
                                                <input name="telephone" placeholder="Your Phone" type="tel" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-style mb-20">
                                                <input name="subject" placeholder="Subject" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="textarea-style mb-30">
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>
                                            <button className="submit submit-auto-width" type="submit">Send message</button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default VendorGuide;