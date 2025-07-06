"use client";

import React from "react";
import BannerSectionStyle3 from "@/components/Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "@/components/Section/BannerSection/BannerSectionStyle4";
import Section from "@/components/Section";
import DepartmentSectionStyle2 from "@/components/Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "@/components/Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "@/components/Section/FunFactSection";
import TeamSection from "@/components/Section/TeamSection";
import GallerySection from "@/components/Section/GallerySection";
import AwardSectionStyle2 from "@/components/Section/AwardSection/AwardSectionStyle2";
import Head from "next/head";
const departmentData = [
  {
    title: "Expert Medical Curation",
    subTitle:
      "Specialist matching, hospital selection, and itinerary planning based on individual medical needs",
    iconUrl: `/images/icons/calendar_white.svg`,
    href: "/about-detail",
  },
  {
    title: "Hospital Booking & Schedule Coordination",
    subTitle:
      "Appointment booking, translation support, and full schedule coordination for your treatment trip",
    iconUrl: `/images/icons/calendar_white.svg`,
    href: "/about-detail",
  },
  {
    title: "Advanced Treatments & Check-ups",
    subTitle:
      "Cancer, heart, stem cell therapy, and full-body health screenings in top-tier hospitals",
    iconUrl: `/images/icons/calendar_white.svg`,
    href: "/about-detail",
  },
  {
    title: "All-in-One Medical Travel",
    subTitle:
      "Airport pickup, personal assistance, and curated K-culture activities during your visit",
    iconUrl: `/images/icons/calendar_white.svg`,
    href: "/about-detail",
  },
  {
    title: "Transparent Pricing & Custom Estimates",
    subTitle:
      "Personalized cost estimates and clear pricing based on your selected services and budget",
    iconUrl: `/images/icons/calendar_white.svg`,
    href: "/about-detail",
  },
];

const featureListData = [
  {
    title: "Verified Partners",
    subTitle:
      "We work with KHIDI-appointed GHKOL consultants and certified providers to ensure reliable and medically sound care.",
    iconUrl: `/images/icons/professional.svg`,
  },
  {
    title: "Expert Guidance",
    subTitle:
      "Our medical advisors offer tailored consultations and connect you with the right treatment for your unique needs.",
    iconUrl: `/images/icons/comprehensive.svg`,
  },
  {
    title: "Trusted Quality",
    subTitle:
      "Every hospital and clinic is rigorously vetted to meet international healthcare and safety standards.",
    iconUrl: `/images/icons/patient.svg`,
  },
  {
    title: "Transparent Process",
    subTitle:
      "We provide clear pricing, honest communication, and no hidden fees throughout your medical journey.",
    iconUrl: `/images/icons/facilities.svg`,
  },
];

const funFactData = [
  { number: "20+", title: "Verified Medical Partners" },
  { number: "100%", title: "GHKOL Expert Involvement" },
  { number: "10+", title: "Medical Specialties Covered" },
  { number: "48-", title: "Hour Response Time" },
  { number: "90%", title: "Patient Satisfaction Rate" },
];

const teamData = [
  {
    imgUrl: `/images/about/doctor_1.png`,
    name: "Dr. Min-Hee Ryu",
    designation: "Founder of RNWOOD",
    description:
      "Renowned for facial anatomy expertise and global academic leadership, with extensive experience in top Korean clinics and global societies.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: `/images/about/doctor_2.png`,
    name: "Byung-Il Kang, CEO",
    designation: "GHKOL Consultant",
    description:
      "A veteran in global healthcare consulting with over 60 projects, recognized by the Korean government for advancing Korea's international medical presence.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: `/images/about/doctor_3.png`,
    name: "Dr. Juyoung Go",
    designation: "Director of Atelier",
    description:
      "Expert in reconstructive and aesthetic surgery, with academic and clinical excellence from Samsung Medical Center to international fellowships.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
];

const galleryData = [
  { imgUrl: `/images/about/portfolio_2_lg.jpeg` },
  { imgUrl: `/images/about/portfolio_3_lg.jpeg` },
  { imgUrl: `/images/about/portfolio_1_lg.jpeg` },
  { imgUrl: `/images/about/portfolio_4_lg.jpeg` },
  { imgUrl: `/images/about/portfolio_5_lg.jpeg` },
];
const awardData = [
  {
    iconUrl: `/images/icons/award.svg`,
    title: "Medical Korea Global Healthcare Award",
  },
  {
    iconUrl: `/images/icons/award.svg`,
    title: "Asia Star Award for Medical Innovation",
  },
  {
    iconUrl: `/images/icons/award.svg`,
    title: "KHIDI Global Consulting Excellence Award",
  },
  {
    iconUrl: `/images/icons/award.svg`,
    title: "Ministry of Health and Welfare Contribution Award",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | TeloTimeless</title>
      </Head>
      <BannerSectionStyle3
        bgUrl={`/images/about/banner_bg.svg`}
        imgUrl={`/images/about/banner_img.png`}
        title="K-Medical Curation Platform"
        subTitle="We curate top Korean medical institutions to provide patients worldwide with safe, expert-guided care."
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl={`/images/about/why_choose_us.jpeg`}
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl={`/images/about/fun_fact_bg.jpeg`}
          data={funFactData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Verified Experts"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Global Awards and <br />Recognition"
          sectionTitleUp="ACHIEVEMENTS"
          sectionSubTitle="Honored for leadership and excellence in <br />international medical consulting and services."
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl={`/images/about/banner_bg_2.jpeg`}
          title="Take Charge of Your <br />Health Today"
          subTitle="Schedule your personalized consultation <br />with our top-rated medical experts now."
          center
        />
      </Section>
    </>
  );
}
