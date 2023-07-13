import React from "react";
import { connect } from "react-redux";
import CompareTable from "../components/ecommerce/CompareTable";
import Layout from "../components/layout/Layout";
import { clearCompare, deleteFromCompare } from "../redux/action/compareAction";

const Compare = ({ compare, clearCompare, deleteFromCompare }) => {
    return (
        <>
            <Layout parent="Home" sub="Shop" subChild="Compare">
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <h1 className="heading-2 mb-10">
                                    Products Compare
                                </h1>
                                <h6 className="text-body mb-40">
                                    There are <span className="text-brand">3</span>
                                    products to compare
                                </h6>
                                <div className="table-responsive">
                                    {compare.items.length > 0 ? (
                                        <>
                                            <CompareTable
                                                data={compare.items}
                                                features={[
                                                    "preview",
                                                    "name",
                                                    "price",
                                                    "rating",
                                                    "description",
                                                    "color",
                                                    // "sizes",
                                                    "stock",
                                                    "weight",
                                                    "dimensions",
                                                    "buy",
                                                    " ",
                                                ]}
                                                deleteFromCompare={
                                                    deleteFromCompare
                                                }
                                            />
                                            <div className="text-right">
                                                <span
                                                    className="clear-btn"
                                                    onClick={clearCompare}
                                                >
                                                    Clear All
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <h4>No Products</h4>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

const mapStateToProps = (state) => ({
    compare: state.compare,
});

const mapDispatchToProps = {
    clearCompare,
    deleteFromCompare,
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
