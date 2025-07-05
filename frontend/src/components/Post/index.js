"use client";
import { Icon } from "@iconify/react";
import React from "react";
import Link from "next/link";

export default function Post({
  name,
  thumbnail,
  category,
  summary,
  slug,
  socialShare,
  variant,
}) {
  return (
    <div className={`cs_post cs_style_1 ${variant}`}>
      <Link href={`/hospitals/${slug}`} className="cs_post_thumb cs_view_mouse">
        <img src={`http://localhost:8000${thumbnail}`} alt={name} />
      </Link>
      <div className="cs_post_info">
        <div>
          <div className="cs_post_meta">
            <div className="cs_posted_by">{category}</div>
            {socialShare && (
              <div className="cs_post_social">
                <Link href="/" className="cs_center rounded-circle">
                  <Icon icon="fa-brands:linkedin-in" />
                </Link>
                <Link href="/" className="cs_center rounded-circle">
                  <Icon icon="fa-brands:facebook-f" />
                </Link>
                <Link href="/" className="cs_center rounded-circle">
                  <Icon icon="fa-brands:twitter" />
                </Link>
              </div>
            )}
          </div>
          <h2 className="cs_post_title cs_semibold cs_fs_32">
            <Link href={`/hospitals/${slug}`}>{name}</Link>
          </h2>
        </div>
        {summary && (
          <div className="cs_heading_color cs_medium">
            <Link href={`/hospitals/${slug}`} className="cs_post_btn">
              {summary}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
