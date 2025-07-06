import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Post({
  name,
  slug,
  summary,
  thumbnail,
  category,
  view = "grid",
}) {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";
  const imageUrl = thumbnail?.startsWith("http")
    ? thumbnail
    : `${imageBaseUrl}${thumbnail}`;
  const locale = useLocale();
  if (view === "list") {
    return (
      <div className="cs_post_list d-flex gap-4 mb-4 border-bottom pb-4">
        <Link href={`/${locale}/hospitals/${slug}`}>
          <img
            src={imageUrl}
            alt={name}
            style={{ width: "180px", height: "120px", objectFit: "cover" }}
          />
        </Link>
        <div>
          <p className="text-muted mb-1">{category}</p>
          <h5 className="mb-2 cs_medium fs-3">
            <Link href={`/${locale}/hospitals/${slug}`}>{name}</Link>
          </h5>
          <p className="mb-0">{summary}</p>
          <Link
            href={`/${locale}/hospitals/${slug}`}
            className="cs_btn cs_btn_primary"
          >
            Read More
          </Link>
        </div>
      </div>
    );
  }

  // ✅ grid 모드일 때 기존 병원 카드 스타일 복원
  return (
    <div className="cs_post cs_style_1">
      <div className="cs_post_thumb cs_radius_15 overflow-hidden">
        <Link href={`/${locale}/hospitals/${slug}`}>
          <img src={imageUrl} alt={name} className="w-100" />
        </Link>
      </div>
      <div className="cs_post_info">
        <div className="cs_post_subtitle text-muted mb-2">{category}</div>
        <h2 className="cs_post_title">
          <Link href={`/${locale}/hospitals/${slug}`}>{name}</Link>
        </h2>
        <p className="cs_post_desc">{summary}</p>
        <Link
          href={`/${locale}/hospitals/${slug}`}
          className="cs_btn cs_btn_primary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
