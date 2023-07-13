import React from "react";

const Preloader = () => {
    return (
        <>
           <div id="preloader-active">
			<div className="preloader d-flex align-items-center justify-content-center">
				<div className="preloader-inner position-relative">
					<div className="text-center">
						<img src="/assets/imgs/theme/loading.gif" alt="" />
					</div>
				</div>
			</div>
		</div>
        </>
    );
};

export default Preloader;
