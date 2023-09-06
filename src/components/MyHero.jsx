import React from "react";
import MyNav from "./MyNav";
import hero_panda_group from "../assets/images/webp/hero_panda_group.webp";
import panda_bottom_wood from "../assets/images/webp/panda_bottom_wood.webp";
import Green_bottom_bg from "../assets/images/webp/green_Bottom_bg.webp";
import hero_left_tree from "../assets/images/webp/hero_left_tree.webp";
import hero_right_tree from "../assets/images/webp/hero_right_tree.webp";
import hero_clouds from "../assets/images/webp/hero_clouds.webp";
import hero_rainbow from "../assets/images/webp/hero_rainbow.webp";
const MyHero = () => {
  return (
    <>
      <div className="bg_blue d-flex flex-column vh_xl_100 position-relative z-3">
        <MyNav />
        <section className="bg_blue flex-grow-1 d-flex flex-column position-relative pt-sm-5 mt-5 pt-xxl-0 mt-xxl-0 z-1">
          <img
            className="position-absolute rainbow_hero"
            src={hero_rainbow}
            alt="rainbow image hero"
          />
          <div className="position-absolute end-0 top-0 z-0">
            <img src={hero_clouds} alt="hero bg clouds" />
          </div>
          <img
            className="position-absolute panda_bottom_wood"
            src={panda_bottom_wood}
            alt="wood_img"
          />
          <img
            className="position-absolute Green_grass_bg"
            src={Green_bottom_bg}
            alt="green_img"
          />
          <div>
            <img
              className="position-absolute Left_hero_Tree w-100"
              src={hero_left_tree}
              alt="tree"
            />
          </div>
          <div>
            <img
              className="position-absolute d-sm-block d-none Right_hero_Tree w-100"
              src={hero_right_tree}
              alt="tree"
            />
          </div>
          <div className="my_container position-relative z-3">
            <div className="d-flex flex-column align-items-center pt-lg-5">
              <p className="text-center ff_cherry fs_9xl fw-normal cozy_text_shadow mb-0 pt-2">
                <span className="color_orange">Cozy</span>
                <span className="color_green ff_cherry_soda">Capys</span>
                <span className="text-white ">NFT</span>
              </p>
              <p className="text-white ff_balsamiq fs_md mx_758 text-center fw-bold mb-0 mt-lg-4 mt-3">
                Cozy Capys is an impactful NFT project featuring 10,000 adorable
                capybara characters! 10% of all proceeds will go to wildlife
                conservation organizations!
              </p>
            </div>
            <div className="text-center pt-4 mt-lg-2 position-relative z_15">
              <button className="join_button  join_button_p position-relative ff_balsamiq fs_lg border-0 text-white fw-bold text-center ">
                Join Us
              </button>
            </div>
            <div className="Panda_Group text-center pt-5 pt-sm-0 opacity-0">
              <img
                className="w-75"
                src={hero_panda_group}
                alt="hero panda group"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyHero;
