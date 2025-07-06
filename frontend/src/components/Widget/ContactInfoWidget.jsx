"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        #815, 14, Dogok-ro 1-gil, Gangnam-gu, Seoul 06253, Republic of Korea
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        +82 1088698508
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        sonadorBIK@gmail.com
      </li>
    </ul>
  );
}
