import ErrorPage from "../../ErrorPage";
import React from "react";
import Section from "../../../components/Section";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSectionStyle9 from "../../../components/Section/BannerSection/BannerSectionStyle9";
import Spacing from "../../../components/Spacing";
import Post from "../../../components/Post";
import Sidebar from "../../../components/Sidebar";
import { cookies } from "next/headers";
import API_BASE_URL from "../../../lib/apiClient";
import axios from "axios";

const relatedBlog = [
  {
    title: "Atlier",
    thumbUrl: `/images/blog/post_1.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/ATELIER",
  },
  {
    title: `JK Plastic Surgery Center`,
    thumbUrl: `/images/blog/post_2.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/JK",
  },
  {
    title: "BANOBAGI",
    thumbUrl: `/images/blog/post_3.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/BANOBAGI",
  },
];

const categoryData = [
  {
    title:
      "An Anatomical Approach to Lower Face Rejuvenation Presented at the Minimally Invasive Plastic Surgery Symposium",
    url: "https://www.k-health.com/news/articleView.html?idxno=81529",
  },
  {
    title:
      "Latest Implant Techniques for Breast Tissue Preservation Highlighted at Motiva Symposium",
    url: "https://www.medisobizanews.com/news/articleView.html?idxno=120765",
  },
  {
    title: "Atelier Plastic Surgery: Where You Become a Work of Art",
    url: "https://www.youtube.com/watch?v=bHgo_7HkzNM",
  },
];
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
  try {
    hospital = await getHospital(slug, lang);
    console.log("병원 정보:", hospital);
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
          src={`/images/blog/blog_details_1.jpeg`}
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

              <h2>What is Atelier Plastic Surgery?</h2>
              <p>
                Atelier Plastic Surgery is a premium aesthetic clinic in Seoul,
                South Korea, renowned for its artistic approach to beauty
                enhancement. The clinic is dedicated to delivering
                natural-looking and elegant results through a blend of medical
                precision and aesthetic sensibility. <br />
                <br />
                With the philosophy of “Turning You Into a Work of Art,” Atelier
                emphasizes individualized treatment plans tailored to each
                patient’s unique features and goals.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>Dermal Filler Artistry:</b>
                  <br />
                  Atelier is highly regarded for its sophisticated filler
                  techniques, particularly in areas such as the nose, under-eye,
                  and jawline. Treatments focus on harmonizing facial
                  proportions with minimal invasiveness and maximum naturalness.
                </li>
                <li>
                  <b>Breast Aesthetic Surgery:</b>
                  <br />
                  The clinic offers advanced breast lifting and augmentation
                  procedures with minimal scarring and high aesthetic standards,
                  guided by both technical expertise and artistic design.
                </li>
                <li>
                  <b>Facial Contouring & Balance:</b>
                  <br />
                  Rather than altering appearances, Atelier aims to refine and
                  enhance a patient’s innate beauty through customized facial
                  contouring procedures.
                </li>
                <li>
                  <b>Doctor-Centered Care:</b>
                  <br />
                  Headed by Dr. Juyoung Ko, the clinic is known for its
                  transparent consultations, clear communication, and a focus on
                  long-term beauty planning, rather than one-time results.
                </li>
              </ol>

              <h2>Patient Experience and Philosophy</h2>
              <p>
                At Atelier, beauty is seen as a form of personal expression. The
                environment is elegant and calm, supporting patients through
                every step of their aesthetic journey—from in-depth
                consultations to follow-up care. The clinic avoids overly
                artificial changes and instead pursues “invisible
                beauty”—refined improvements that look effortless and true to
                the patient’s character.
              </p>

              <blockquote
                style={{
                  backgroundImage: `url(/images/blog/blog_details_2.jpeg)`,
                }}
              >
                <p>
                  “Treatments at Atelier Plastic Surgery are designed with both
                  precision and artistry, often involving a personalized
                  combination of advanced techniques and aesthetic insight.”
                </p>
              </blockquote>

              <h2>Conclusion</h2>
              <p>
                Atelier Plastic Surgery is more than just a clinic—it is a space
                where medicine and art meet. For those seeking sophisticated,
                personalized aesthetic care in Korea, Atelier offers a trusted
                and artistic solution. <br />
                <br />
                Whether it’s your first consultation or your next chapter in
                self-confidence, Atelier is committed to helping you become your
                best self—gracefully and naturally.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar categoryData={categoryData} />
          </div>
        </div>
        <Spacing md="135" lg="100" />
        <h2 className="mb-0 cs_fs_40 cs_medium">Other Hospitals</h2>
        <Spacing md="57" />
        <div className="row cs_gap_y_40">
          {relatedBlog?.map((item, index) => (
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
