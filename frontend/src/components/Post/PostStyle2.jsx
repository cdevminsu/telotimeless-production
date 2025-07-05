import React from "react";
import Link from "next/link";

export default function PostStyle2({ title, thumbUrl, date, href }) {
  return (
    <div className="cs_post cs_style_2 cs_radius_20 overflow-hidden">
      <Link href={href} className="cs_post_thumb cs_view_mouse">
        <img src={thumbUrl} alt="Post" />
      </Link>
      <div className="cs_post_info">
        <div>
          <h2 className="cs_post_title cs_semibold cs_fs_24">
            <Link href={href}>{title}</Link>
          </h2>
          <div className="cs_posted_by">{date}</div>
        </div>
      </div>
    </div>
  );
}
