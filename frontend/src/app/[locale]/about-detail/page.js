"use client";

import React from "react";
import BannerSectionStyle7 from "@/components/Section/BannerSection/BannerSectionStyle7";
import Section from "@/components/Section";
import AppointmentSection from "@/components/Section/AppointmentSection";
import AboutSectionStyle2 from "@/components/Section/AboutSection/AboutSectionStyle2";
import FeaturesSectionStyle3 from "@/components/Section/FeaturesSection/FeaturesSectionStyle3";
import Head from "next/head";

const featureData = [
  {
    title: "Inquiry Submission",
    subTitle:
      "The booking process begins with a simple consultation request, where you share your symptoms and treatment preferences through our online form or chatbot.",
    iconUrl: `/images/departments/icon_9.svg`,
  },
  {
    title: "Expert Matching",
    subTitle:
      "A certified GHKOL consultant carefully reviews your case and connects you with the most suitable hospital and specialist in South Korea.",
    iconUrl: `/images/departments/icon_10.svg`,
  },
  {
    title: "Confirm Schedule",
    subTitle:
      "Once matched, our team organizes your medical appointments, interpreter services, and travel arrangements for a smooth experience.",
    iconUrl: `/images/departments/icon_11.svg`,
  },
  {
    title: "Visit and Treatment",
    subTitle:
      "You arrive in Korea for your scheduled procedures, supported by our staff and partners throughout your medical journey and stay.",
    iconUrl: `/images/departments/icon_12.svg`,
  },
];

const doctorData = [
  {
    imgUrl: `/images/departments/related_doctor_1.jpeg`,
    name: "Dr. Susan Bones, MD",
    designation: "Board-certified Pediatrician",
    description:
      "With experience in managing complex <br />medical conditions in children",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    availableUrl: "/",
    callUrl: "/",
    chatUrl: "/",
    btnText: "Booking",
    btnUrl: "/appointments",
  },
  {
    imgUrl: `/images/departments/related_doctor_1.jpeg`,
    name: "Dr. Susan Bones, MD",
    designation: "Board-certified Pediatrician",
    description:
      "With experience in managing complex <br />medical conditions in children",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    availableUrl: "/",
    callUrl: "/",
    chatUrl: "/",
    btnText: "Booking",
    btnUrl: "/",
  },
  {
    imgUrl: `/images/departments/related_doctor_1.jpeg`,
    name: "Dr. Susan Bones, MD",
    designation: "Board-certified Pediatrician",
    description:
      "With experience in managing complex <br />medical conditions in children",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    availableUrl: "/",
    callUrl: "/",
    chatUrl: "/",
    btnText: "Booking",
    btnUrl: "/",
  },
  {
    imgUrl: `/images/departments/related_doctor_1.jpeg`,
    name: "Dr. Susan Bones, MD",
    designation: "Board-certified Pediatrician",
    description:
      "With experience in managing complex <br />medical conditions in children",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    availableUrl: "/",
    callUrl: "/",
    chatUrl: "/",
    btnText: "Booking",
    btnUrl: "/",
  },
];

export default function DepartmentDetails() {
  return (
    <>
      <Head>
        <title>About Telotimeless | Telotimeless</title>
      </Head>
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="About Telotimeless"
          subTitle="Telotimeless is a global medical curation platform that connects international patients with Korea’s top-tier hospitals and specialists. All consultations are guided by GHKOL-certified experts, ensuring that every medical journey is personalized, safe, and effective. We partner exclusively with verified institutions that meet international standards, and provide full support—from diagnosis and scheduling to interpretation and post-care. With transparent pricing and specialized services across plastic surgery, cardiology, oncology, spine care, and more, Telotimeless is your trusted gateway to world-class healthcare in Korea."
          imgUrl={`/images/departments/department_img_1.png`}
        />
      </Section>

      <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Booking Process"
          sectionTitleUp="Telotimeless"
          data={featureData}
        />
      </Section>
      {/* <Section topMd={200} topLg={150} topXl={100}>
        <TeamSectionStyle3 sectionTitle="Related Doctor" data={doctorData} />
      </Section> */}

      {/* Start Appointment Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={190}
        bottomLg={145}
        bottomXl={110}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl={`/images/home_1/appointment.jpeg`}
        />
      </Section>
      {/* End Appointment Section */}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl={`/images/departments/banner_img_3.png`}
          bgUrl={`/images/departments/banner_bg_3.svg`}
          title="Prioritize <br />Your Health Today"
          subTitle="Schedule a consultation with our trusted medical team <br />and experience care tailored to you."
        />
      </Section>
    </>
  );
}
