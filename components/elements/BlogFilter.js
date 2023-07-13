import React from 'react';

const BlogFilter = () => {
    return (
        <>
            <div className="totall-product">
                                        <h2>
                                            <img
                                                className="w-36px mr-10"
                                                src="/assets/imgs/theme/icons/category-1.svg"
                                                alt=""
                                            />
                                            Recips Articles
                                        </h2>
                                    </div>
                                    <div className="sort-by-product-area">
                                        <div className="sort-by-cover mr-10">
                                            <div className="sort-by-product-wrap">
                                                <div className="sort-by">
                                                    <span>
                                                        <i className="fi-rs-apps"></i>
                                                        Show:
                                                    </span>
                                                </div>
                                                <select>
                                                    <option>All</option>
                                                    <option>100</option>
                                                    <option>150</option>
                                                    <option>200</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="sort-by-cover">
                                            <div className="sort-by-product-wrap">
                                                <div className="sort-by">
                                                    <span>
                                                        <i className="fi-rs-apps-sort"></i>
                                                        Sort:
                                                    </span>
                                                </div>
                                                <select>
                                                    <option>
                                                            Featured
                                                    </option>
                                                    <option>Newest</option>
                                                    <option>
                                                        Most comments
                                                    </option>
                                                    <option>
                                                        Release Date
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
        </>
    );
};

export default BlogFilter;