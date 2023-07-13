import React from "react";

const Banner4 = () => {
    return (
        <>
            <div
                className="banner-bg wow fadeIn animated"
                style={{
                    backgroundImage: "url('assets/imgs/banner/banner-8.jpg')",
                }}
            >
                <div className="banner-content">
                    <h5 className="text-grey-4 mb-15">Shop Today’s Deals</h5>
                    <h2 className="fw-600">
                        Happy <span className="text-brand">Mother's Day</span>. Big
                        Sale Up to 40%
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Banner4;
