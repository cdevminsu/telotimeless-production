import React, { useState } from "react";
import Rating from "../Rating";

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links">
        <li className={activeTab === 1 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(1)}>
            <div className="cs_testimonial_1_avatar">
              <img src={`/images/home_1/avatar_1.png`} alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">
                  Hospitality & Leisure Business
                </h3>
                <p className="cs_heading_color mb-0">
                  Redefining comfort through premium travel experiences
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 2 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(2)}>
            <div className="cs_testimonial_1_avatar">
              <img src={`/images/home_1/avatar_2.png`} alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Medical Tourism</h3>
                <p className="cs_heading_color mb-0">
                  Bridging borders for personalized medical care
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 3 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(3)}>
            <div className="cs_testimonial_1_avatar">
              <img src={`/images/home_1/avatar_3.png`} alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Medical Wellness</h3>
                <p className="cs_heading_color mb-0">
                  Where healing meets hospitality for holistic well-being
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="cs_tab_body">
        {activeTab === 1 && (
          <div className="cs_testimonial cs_style_1">
            <img src={`/images/icons/quote.svg`} alt="Icon" />
            <p>
              Redefining comfort through premium travel experiences We partner
              with premier hotels and resorts, beginning with With Hotel in Jeju
              Island, to deliver high-end hospitality services for domestic and
              international travelers. Our growing network of hotel alliances
              enhances the quality, comfort, and personalization of leisure
              experiences across Korea and beyond.
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="cs_testimonial cs_style_1">
            <img src={`/images/icons/quote.svg`} alt="Icon" />
            <p>
              Bridging borders for personalized medical care We provide
              end-to-end coordination for international patients seeking
              world-class medical treatment in Korea. From hospital matching and
              appointment scheduling to interpretation and concierge travel
              support, our service ensures a seamless and trusted healthcare
              journey tailored to individual needs.
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="cs_testimonial cs_style_1">
            <img src={`/images/icons/quote.svg`} alt="Icon" />
            <p>
              Where healing meets hospitality for holistic well-being Blending
              advanced medical care with resort-level hospitality, we are
              developing a global wellness hub on Jeongbong-do, Incheon, set to
              open in 2030. Strategically located near Incheon International
              Airport, this flagship center will offer integrated programs that
              combine diagnostics, recovery, and relaxation for international
              wellness travelers.
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
      </div>
    </div>
  );
}
