"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import IconBoxStyle11 from "../IconBox/IconBoxStyle11";
import Spacing from "../Spacing";
import LanguageDropdown from "./LanguageDropdown";
import { useLocale } from "next-intl";

export default function Header({ logoSrc = "/images/logo.svg", variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    // ✅ Bootstrap JS를 클라이언트에서만 import
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${variant} ${isSticky ? "cs_active_sticky" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link href="/" className="cs_site_branding">
                  <img src={logoSrc} alt="Logo" />
                </Link>
                <nav className="cs_nav">
                  <ul
                    className={
                      mobileToggle ? "cs_nav_list cs_active" : "cs_nav_list"
                    }
                  >
                    <li className="menu-item">
                      <Link
                        href={`/${locale}`}
                        onClick={() => setMobileToggle(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href={`/${locale}/about`}
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href={`/${locale}/hospitals`}
                        onClick={() => setMobileToggle(false)}
                      >
                        Hospitals
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href={`/${locale}/appointment`}
                        onClick={() => setMobileToggle(false)}
                      >
                        Appointment
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href={`/${locale}/contact`}
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>

                  <span
                    className={
                      mobileToggle
                        ? "cs_menu_toggle cs_teggle_active"
                        : "cs_menu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <LanguageDropdown />
                  <button
                    className="cs_toolbox_btn cs_sidebar_toggle_btn"
                    type="button"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    {/* SVG 그대로 유지 */}
                    <svg
                      width={35}
                      height={30}
                      viewBox="0 0 35 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SideNav */}
      <div className={`cs_sidenav ${sideNav ? "active" : ""}`}>
        <div className="cs_sidenav_overlay" onClick={() => setSideNav(false)} />
        <div className="cs_sidenav_in">
          <button
            className="cs_close"
            type="button"
            onClick={() => setSideNav(false)}
          >
            <img src="/images/icons/close.svg" alt="Close" />
          </button>
          <div className="cs_logo_box">
            <img src="/images/logo.svg" alt="Logo" />
            <div className="cs_height_15" />
            <h3 className="cs_fs_24 cs_semibold mb-0">
              Your Partner in Health and Wellness
            </h3>
          </div>
          <Spacing md="35" lg="35" xl="35" />
          <hr />
          <Spacing md="35" lg="50" xl="35" />
          <IconBoxStyle11
            title="Phone"
            subTitle="+82 1088698508"
            iconSrc="/images/contact/icon_1.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Email"
            subTitle="sonadorBIK@gmail.com"
            iconSrc="/images/contact/icon_2.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Location"
            subTitle="#815, 14, Dogok-ro 1-gil, Gangnam-gu, Seoul 06253, Republic of Korea"
            iconSrc="/images/contact/icon_3.svg"
          />
          <Spacing md="60" lg="60" xl="60" />
          <Newsletter />
          <Spacing md="70" lg="50" xl="50" />
          <hr />
          <Spacing md="70" lg="50" xl="50" />
          <SocialWidget />
        </div>
      </div>

      {/* Search */}
      <div className={`cs_header_search ${searchToggle ? "active" : ""}`}>
        <div className="cs_header_search_in">
          <div className="container">
            <div className="cs_header_search_box">
              <form className="cs_search_form">
                <input type="text" placeholder="Search Doctors" />
                <button className="cs_search_btn" type="submit">
                  🔍
                </button>
              </form>
              <button
                className="cs_close"
                type="button"
                onClick={() => setSearchToggle(false)}
              >
                <img src="/images/icons/close.svg" alt="Close" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSearchToggle(false)}
        />
      </div>
    </>
  );
}
