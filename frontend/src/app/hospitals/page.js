"use client";

import React, { useState, useEffect } from "react";
import BannerSectionStyle9 from "../../components/Section/BannerSection/BannerSectionStyle9";
import Section from "../../components/Section";
import BlogSectionStyle2 from "../../components/Section/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../../components/Breadcrumb";
import Head from "next/head";
import axios from "axios";
import Cookies from "js-cookie";

export default function Blog() {
  const [hospitals, setHospitals] = useState([]);
  const [lang, setLang] = useState("ko");

  // ✅ 1. 브라우저에서 lang 쿠키 불러오기
  useEffect(() => {
    const storedLang = Cookies.get("lang") || "ko";
    setLang(storedLang);
  }, []);

  // ✅ 2. 언어 변경되면 병원 데이터 요청
  useEffect(() => {
    if (!lang) return;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/hospitals/`, {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => {
        setHospitals(res.data);
      })
      .catch((err) => console.error("병원 리스트 로딩 실패:", err));
  }, [lang]);

  return (
    <>
      <Head>
        <title>Verified Hospital Partners | TeloTimeless</title>
        <meta
          name="description"
          content="Explore our verified hospital partners, offering top-tier medical services and expertise in Korea."
        />
        <link rel="canonical" href="https://telotimeless.com/hospitals" />
      </Head>

      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="Verified Hospital Partners" />
      </Section>

      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 data={hospitals} />
      </Section>

      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Your Health Deserves <br/>the Front Seat."
          subTitle="Connect with trusted medical experts <br />and start your journey to better health today."
          imgUrl={`/images/doctors/banner_img_3.png`}
        />
      </Section>
    </>
  );
}
