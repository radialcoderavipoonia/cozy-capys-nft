import React from "react";
import { Col, Row } from "react-bootstrap";
import impact_col_img from "../assets/images/gif/impact_section_img.gif";
import impact_rainbow from "../assets/images/webp/impact_right_rainbow.webp";
import left_cloud_impact from "../assets/images/webp/impact_cloud_left.webp"

const Impact = () => {
  return (
    <>
      <section
        id="impact"
        className="bg_impact_color position-relative bg_impact"
      >
        <div className="pt-4 mt-5">
          <div className="my_container container pb-md-5 pt-3 py-4 my-5">
            <Row className="justify-content-center align-items-center pt-5 pb-md-5  mt-lg-5 position-relative z-3">
              <Col lg={6} sm={8} data-aos="fade-right" data-aos-duration="1000">
                <h2 className="ff_cherry text_shadow_impact text-lg-start text-center fw-normal fs_7xl text-white mb-0">
                  Impact
                </h2>
                <p className="ff_balsamiq fs_md fw-normal text-lg-start text-center color_blackpara pt-4 mb-0">
                  Cozy Capys, an NFT project centered around adorable capybara
                  characters, aims to create a positive social impact. It
                  achieves this through initiatives such as donating 10% of
                  proceeds to wildlife conservation organizations, hosting
                  inclusive community events, and offering real-life animal
                  experiences. By combining the popularity of NFTs, the
                  endearing nature of capybaras, and meaningful initiatives,
                  Cozy Capys fosters a sense of responsibility, empathy, and
                  community among its members, contributing to wildlife
                  conservation and environmental preservation.
                </p>
              </Col>
              <Col lg={5} sm={8} data-aos="fade-left" data-aos-duration="1000">
                <div className="d-flex justify-content-end">
                  <div className="border_img mt-lg-0 mt-5">
                    <img
                      src={impact_col_img}
                      alt="impact section col image"
                      className="impact_col_image"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="position-absolute start-0 top-50 d-sm-block d-none">
          <img
            src={left_cloud_impact}
            alt="left side impact cloud"
            className="impact_cloud"
          />
        </div>
        <div className="position-absolute top_13 right_-15 d-lg-block d-none">
          <img
            className="impact_rainbow"
            src={impact_rainbow}
            alt="impact section right side rainbow"
          />
        </div>
      </section>
    </>
  );
};

export default Impact;
