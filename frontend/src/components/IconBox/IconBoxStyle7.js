"use client";

import React from "react";
import parse from "html-react-parser";
import Link from "next/link";

export default function IconBoxStyle6({ title, subTitle, iconUrl, href }) {
  return (
    <div className="cs_iconbox cs_style_7">
      <div className="cs_iconbox_icon">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32">{parse(title)}</h2>
      <p className="cs_iconbox_subtitle m-0">{parse(subTitle)}</p>
      <Link href={href}>
        <a className="cs_iconbox_btn cs_center">
          <img src="images/icons/arrow_white.svg" alt="Icon" />
          <img src="images/icons/arrow_white.svg" alt="Icon" />
        </a>
      </Link>
    </div>
  );
}
