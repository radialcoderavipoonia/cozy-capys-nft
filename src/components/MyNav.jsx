import { React, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import nav_logo from "../assets/images/webp/favicon.webp";
import twitter_logo from "../assets/images/svg/twitter.svg";
import discord_logo from "../assets/images/svg/discord.svg";
import insta_logo from "../assets/images/svg/instagram.svg";
const MyNav = () => {
  const [Show, setShow] = useState(true);
  function showNav() {
    setShow(
      !Show,
      document.getElementById("nav_bar_animation").classList.toggle("opennav"),
      document.getElementById("dis_none").classList.toggle("logo_not_visible")
    );
  }
  if (!Show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className="bg-transparent position-relative z-3 w-100 py_10">
        <div className="my_container container d-flex justify-content-between align-items-center">
          <div id="dis_none" className="d-flex align-items-center">
            <a href="#">
              <img
                width={42}
                height={60}
                src={nav_logo}
                alt="page logo"
                className="w-100"
              />
            </a>
            <a href="#">
              <p className="ff_chewy fs_4xl fw-normal color_orange mb-0 ps-2 pointer">
                Cozy <span className="color_green">Capys</span>
              </p>
            </a>
          </div>
          <div className="d-lg-flex align-items-center justify-content-between d-none d-lg-block">
            <ul className="d-flex justify-content-between list-unstyled align-items-center mb-0 gap-4 p-2">
              <li className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#" className="text-white ">
                  Home
                </a>
              </li>
              <li className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#aboutus" className="text-white">
                  About
                </a>
              </li>
              <li className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#impact" className="text-white">
                  Impact
                </a>
              </li>
              <li className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#roadmap" className="text-white">
                  Roadmap
                </a>
              </li>
              <li className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#faqs" className="text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="gap-sm-3 gap-2 d-flex">
            <a href="https://twitter.com/" target="_blank">
              <img
                src={twitter_logo}
                alt="twitter logo"
                className="nav_logos"
              />
            </a>
            <a href="https://discord.com/" target="_blank">
              <img
                src={discord_logo}
                alt="discord logo"
                className="nav_logos"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={insta_logo} alt="insta logo" className="nav_logos" />
            </a>
          </div>
          <div
            className="d-flex justify-content-between flex-column d-lg-none "
            onClick={showNav}
          >
            <h2 className="position-relative text-white">
              {Show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
          <div className={`d-flex sm_nav d-lg-none ${Show ? "" : "start-0"}`}>
            <ul
              id="nav_bar_animation"
              className="d-flex justify-content-between list-unstyled flex-column gap-3 align-items-center mb-0 ps-0 nav_animation"
            >
              <li onClick={showNav} className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li onClick={showNav} className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#aboutus" className="text-white">
                  About
                </a>
              </li>
              <li onClick={showNav} className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#impact" className="text-white">
                  Impact
                </a>
              </li>
              <li onClick={showNav} className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#roadmap" className="text-white">
                  Roadmap
                </a>
              </li>
              <li onClick={showNav} className="ff_balsamiq fw-bold fs_sm mb-0">
                <a href="#faqs" className="text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default MyNav;
