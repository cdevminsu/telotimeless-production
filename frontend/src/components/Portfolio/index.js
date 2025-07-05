"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";

// SSR 비활성화로 ModalImage 불러오기
const ModalImage = dynamic(() => import("react-modal-image"), { ssr: false });

export default function Portfolio({ imgUrl }) {
  return (
    <div className="cs_portfolio cs_style_1 cs_radius_20 overflow-hidden">
      <div
        className="cs_portfolio_img d-block cs_bg_filed st_lightbox_item"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <ModalImage small={imgUrl} large={imgUrl} alt="Gallery" />
        <span className="cs_link_hover">
          <i>
            <Icon icon="fa6-solid:arrows-up-down-left-right" />
          </i>
        </span>
      </div>
    </div>
  );
}
