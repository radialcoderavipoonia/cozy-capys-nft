import React from "react";
import bottom_panda from "../assets/images/webp/about_us_bottom_panda.webp";
import bottom_tree_aboutus from "../assets/images/webp/about_us_bottom_tree.webp"

const AboutUs = () => {
  return (
    <>
      <section id="aboutus" className="bg_pink position-relative">
        <div className="aboutus_section_bg pb-lg-5 pt-lg-0 pt-5">
          <div className="my_container pt-sm-5 pt-4 container pb-lg-5">
            <div className="aboutus_bg_white position-relative z-2 pt-lg-5">
              <div className=" mt-lg-0 mt-5 py-lg-4"></div>
              <h2
                className="ff_cherry text-center color_pink aboutus_text_sahdow fw-normal fs_7xl pt-lg-5 pt-4 mt-lg-5"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                About Us
              </h2>
              <div
                className=" d-flex justify-content-center align-items-center flex-column"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <p className="mw_690 text-center mb-0 ff_balsamiq fw-normal fs_md color_blackpara">
                  Cozy Capys is an impactful NFT project featuring 10,000
                </p>
                <p className="mw_690 text-center ff_balsamiq fw-normal fs_md color_blackpara">
                  adorable capybara characters! Capybaras are sweet, caring, and
                  gentle creatures that can form strong bonds with anyone around
                  them. By donating 10% of all proceeds to organizations that
                  support wildlife conservation, hosting inclusive community
                  events, and offering real-life animal experiences, Cozy Capys
                  aims to incorporate all the amazing qualities that these
                  animals portray each and every day! Adopt your Cozy Capy today
                  and join our wonderful community in giving back to the
                  <p className="mw_690 text-center ff_balsamiq fw-normal fs_md color_blackpara mb-0 pb-5">
                    beautiful world around us.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom_-16 end-0 z-2 d-lg-block d-none">
          <img
            src={bottom_panda}
            alt="about us section bottom panda"
            className="bottom_panda_img"
          />
        </div>
        <div className="position-absolute bottom_-20 start-0 z-2 d-lg-block d-none">
          <img
            src={bottom_tree_aboutus}
            alt="about us section bottom tree"
            className="w-100 h_407"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
