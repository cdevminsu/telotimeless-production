import React from "react";
import IconBoxStyle11 from "../../IconBox/IconBoxStyle11";
import Spacing from "../../Spacing";

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle="+82 1088698508"
            iconSrc={`/images/contact/icon_1.svg`}
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="sonadorBIK@gmail.com"
            iconSrc={`/images/contact/icon_2.svg`}
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle="#815, 14, Dogok-ro 1-gil, Gangnam-gu, Seoul 06253, Republic of Korea"
            iconSrc={`/images/contact/icon_3.svg`}
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.401180373559!2d127.03008871121762!3d37.49081887198559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14e2f486f61%3A0x8c5c44a2794486c5!2z7IiY7Yq47LCo7IKs7J6Q!5e0!3m2!1sko!2skr!4v1717316053611!5m2!1sko!2skr"
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  );
}
