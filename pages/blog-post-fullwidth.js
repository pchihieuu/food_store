import BlogSingle from '../components/elements/BlogSingle';
import Layout from "../components/layout/Layout";

function PageBlogSingle() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Blog Details">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <BlogSingle/>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default PageBlogSingle;
