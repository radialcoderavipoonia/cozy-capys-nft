import React from "react";
import impact_col_img from "../assets/images/gif/impact_section_img.gif";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 2800);

  return (
    <div
      id="none"
      className="min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="z-15 w-50 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-end">
            <div className="border_img mt-lg-0 mt-5">
              <img
                src={impact_col_img}
                alt="impact section col image"
                className="impact_col_image_preloader"
              />
            </div>
          </div>
          <div className="d-inline-block">
            <p className="pre_heading ff_cherry fs_9xl fw-normal cozy_text_shadow mb-0">
              <span className="color_orange">Cozy</span>
              <span className="color_green ff_cherry_soda ">Capys</span>
              <span className="text-white">NFT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
