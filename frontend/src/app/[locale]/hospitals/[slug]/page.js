import ErrorPage from "../../../ErrorPage";
import React from "react";
import Section from "@/components/Section";
import Breadcrumb from "@/components/Breadcrumb";
import BannerSectionStyle9 from "@/components/Section/BannerSection/BannerSectionStyle9";
import Spacing from "@/components/Spacing";
import Post from "@/components/Post";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";
import API_BASE_URL from "@/lib/apiClient";
import axios from "axios";

export async function getHospital(slug, language = "ko") {
  try {
    const res = await axios.get(`${API_BASE_URL}/hospitals/${slug}`, {
      headers: {
        "Accept-Language": language,
      },
    });

    return res.data || null;
  } catch (err) {
    console.error("병원 정보 불러오기 실패:", {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    return null;
  }
}
export default async function HospitalDetail({ params }) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "ko";
  const slug = params.slug;
  let hospital = null;
  // 1. 이미지 경로 추출 및 변환
  let imageRaw = null;
  let imageUrl = null;

  try {
    hospital = await getHospital(slug, lang);
    imageRaw = hospital.images?.[1]?.image || "";
    imageUrl = imageRaw.replace(
      "http://backend:8000",
      process.env.NEXT_PUBLIC_IMAGE_BASE_URL || ""
    );
  } catch (err) {
    console.error("병원 정보 불러오기 실패:", err);
  }

  if (!hospital) {
    return <ErrorPage message="해당 병원을 찾을 수 없습니다." />;
  }

  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title={hospital.title} />
      </Section>
      <div className="container">
        <Spacing md="55" />
        <img
          src={imageUrl || "/images/default_hospital.jpg"}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <div
                dangerouslySetInnerHTML={{
                  __html: hospital.description.replace(
                    /src="\/media\//g,
                    `src="http://localhost:8000/media/`
                  ),
                }}
              ></div>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar categoryData={hospital.news} />
          </div>
        </div>
        <Spacing md="135" lg="100" />
        <h2 className="mb-0 cs_fs_40 cs_medium">Other Hospitals</h2>
        <Spacing md="57" />
        <div className="row cs_gap_y_40">
          {hospital.previous && (
            <div className="col-xl-4 col-md-6">
              <Post {...hospital.previous} />
            </div>
          )}

          {hospital.next?.map((item, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <Post {...item} />
            </div>
          ))}
        </div>
      </div>
      <Spacing md="200" xl="150" lg="110" />
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl={`/images/doctors/banner_img_3.png`}
        />
      </Section>
    </>
  );
}
