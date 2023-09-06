import React from "react";
import { Accordion } from "react-bootstrap";
import left_tree_faqs from "../assets/images/webp/faqs_top_tree.webp";

const Faqs = () => {
  return (
    <>
      <section id="faqs" className="bg_lightorange top_curve position-relative">
        <div className="my_container container py-5">
          <h2 className="text-center text-white ff_cherry fs_7xl fw-normal text_shadow_faqs pt-5 mt-5 pb-md-3">
            FAQ’s
          </h2>
          <Accordion className="mt-5">
            <Accordion.Item
              eventKey="0"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>Q1. What is Cozy Capys?</Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-normal fs_md color_blackpara opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>
                Q2. How does Cozy Capys give back to wildlife conservation?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-normal fs_md color_blackpara opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>
                Q3. What kind of community events does Cozy Capys host?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-normal fs_md color_blackpara opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="3"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>
                Q4. How can I stay updated on Cozy Capys news and announcements?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-normal fs_md color_blackpara opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="4"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>
                Q5. How can I adopt my Cozy Capy?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-normal fs_md color_black opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="5"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>
                Q6. What utility does owning a Cozy Capy provide?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-normal fs_md color_black opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="position-absolute start-0 top_-16 d-sm-block d-none">
          <img
            src={left_tree_faqs}
            alt="left top side tree faqs section"
            className="top_left_faq_tree"
          />
        </div>
      </section>
    </>
  );
};

export default Faqs;
