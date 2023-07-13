import BlogGrid from "../components/elements/BlogGrid";
import BlogGridBig from "../components/elements/BlogGridBig";
import BlogSidebar from "../components/elements/BlogSidebar";
import Layout from "../components/layout/Layout";
import BlogFilter from './../components/elements/BlogFilter';

function PageBlogGrid() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Grid">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="shop-product-fillter mb-50 pr-30">
                                    <BlogFilter/>
                                </div>
                                <div className="loop-grid pr-30">
                                    <div className="row">
                                        <BlogGrid show={15} />
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
                            <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default PageBlogGrid;
