"use client";

import React from "react";
import Link from "next/link";

export default function IconBoxStyle9({ title, iconUrl, href }) {
  return (
    <Link href={href}>
      <a className="cs_iconbox cs_style_9 text-center cs_radius_20">
        <img src={iconUrl} alt="Icon" />
        <h2 className="cs_iconbox_title cs_white_color cs_fs_20 cs_medium mb-0">
          {title}
        </h2>
      </a>
    </Link>
  );
}
