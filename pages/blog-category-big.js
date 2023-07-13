import BlogGridBig from "../components/elements/BlogGridBig";
import BlogSidebar from "../components/elements/BlogSidebar";
import Layout from "../components/layout/Layout";
import BlogFilter from './../components/elements/BlogFilter';

function PageBlogGridBig() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Big">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                                <div className="shop-product-fillter mb-50">
                                    <BlogFilter/>
                                </div>
                                <div className="loop-grid loop-big">
                                    <div className="row">
                                        <BlogGridBig show={3} />
                                    </div>
                                </div>
                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="fi-rs-arrow-small-left"></i>
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link dot"
                                                    href="#"
                                                >
                                                    ...
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    6
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="fi-rs-arrow-small-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default PageBlogGridBig;
