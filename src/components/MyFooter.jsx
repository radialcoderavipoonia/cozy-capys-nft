import React from "react";
import footer_logo from "../assets/images/webp/favicon.webp";
import twitter_footer from "../assets/images/svg/twitter_footer.svg";
import discord_footer from "../assets/images/svg/discord_footer.svg";
import insta_footer from "../assets/images/svg/insta_footer.svg";
import footer_left_img from "../assets/images/webp/footer_left.webp";
import footer_right_img from "../assets/images/webp/footer_right.webp";

const MyFooter = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <section className="bg_lightorange position-relative">
        <div className="footer_bg pt-lg-5">
          <div className="my_container container pt-lg-5">
            <a href="#">
              <div className="d-flex justify-content-center align-items-center pt-5">
                <img
                  width={59}
                  height={83}
                  src={footer_logo}
                  alt="footer logo"
                />
                <p className="ps-2 mb-0 ff_chewy fw-normal fs_5xl color_orange">
                  Cozy <span className="text-white">Capys</span>
                </p>
              </div>
            </a>
            <div className="pt-md-5  mt-5">
              <ul className="ps-0 mb-0 d-flex justify-content-center align-items-center gap-sm-4 gap-3 p-2 mt-3">
                <li className="ff_balsamiq fs_sm fw-normal">
                  <a
                    href="#"
                    className="color_blackpara underline position-relative"
                  >
                    Home
                  </a>
                </li>
                <li className="ff_balsamiq fs_sm fw-normal">
                  <a
                    href="#aboutus"
                    className="color_blackpara underline position-relative"
                  >
                    About
                  </a>
                </li>
                <li className="ff_balsamiq fs_sm fw-normal">
                  <a
                    href="#impact"
                    className="color_blackpara underline position-relative"
                  >
                    Impact
                  </a>
                </li>
                <li className="ff_balsamiq fs_sm fw-normal">
                  <a
                    href="#roadmap"
                    className="color_blackpara underline position-relative"
                  >
                    Roadmap
                  </a>
                </li>
                <li className="ff_balsamiq fs_sm fw-normal">
                  <a
                    href="#faqs"
                    className="color_blackpara underline position-relative"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-4 pb-5 d-flex justify-content-center gap-4 align-content-center">
              <a href="https://twitter.com/" target="_blank">
                <img
                  height={37}
                  width={37}
                  src={twitter_footer}
                  alt="twitter footer logo"
                  className="footer_social_icon"
                />
              </a>
              <a href="https://discord.com/" target="_blank">
                <img
                  height={37}
                  width={37}
                  src={discord_footer}
                  alt="discord footer logo"
                  className="footer_social_icon"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  height={37}
                  width={37}
                  src={insta_footer}
                  alt="insta footer logo"
                  className="footer_social_icon"
                />
              </a>
            </div>
          </div>
          <div className="footer_line"></div>
          <div className="py-4 text-center">
            <p className="ff_balsamiq fs_xsm fw-normal color_black mb-0 opacity_07 px-2 px-sm-0">
              Copyright ©{year} All rights reserved Plump Kittens
            </p>
          </div>
        </div>
        <div className="position-absolute start-0 bottom-0 d-sm-block d-none">
          <img
            src={footer_left_img}
            alt="footer image left"
            className="footer_logos"
          />
        </div>
        <div className="position-absolute end-0 bottom-0 d-sm-block d-none">
          <img
            src={footer_right_img}
            alt="footer image right"
            className="footer_logos"
          />
        </div>
      </section>
    </>
  );
};

export default MyFooter;
