"use client";

import { Icon } from "@iconify/react";

export default function Rating({ ratingNumber }) {
  return (
    <div className="cs_rating cs_accent_color">
      <div className="cs_rating_bg">
        <i>
          <Icon icon="fa6-regular:star" />
        </i>
        <i>
          <Icon icon="fa6-regular:star" />
        </i>
        <i>
          <Icon icon="fa6-regular:star" />
        </i>
        <i>
          <Icon icon="fa6-regular:star" />
        </i>
        <i>
          <Icon icon="fa6-regular:star" />
        </i>
      </div>
      <div
        className="cs_rating_percentage"
        style={{ width: `${ratingNumber * 20}%` }}
      >
        <i>
          <Icon icon="fa6-solid:star" />
        </i>
        <i>
          <Icon icon="fa6-solid:star" />
        </i>
        <i>
          <Icon icon="fa6-solid:star" />
        </i>
        <i>
          <Icon icon="fa6-solid:star" />
        </i>
        <i>
          <Icon icon="fa6-solid:star" />
        </i>
      </div>
    </div>
  );
}
