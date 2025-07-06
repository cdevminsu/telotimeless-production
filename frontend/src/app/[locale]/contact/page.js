"use client";

import React from "react";
import BannerSectionStyle5 from "@/components/Section/BannerSection/BannerSectionStyle5";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import ContactInfoSection from "@/components/Section/ContactInfoSection";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Telotimeless</title>
      </Head>
      <BannerSectionStyle5
        bgUrl={`/images/contact/banner_bg.svg`}
        imgUrl={`/images/contact/banner_img.png`}
        title="Contact Us"
        subTitle="Kindly reach us to get the fastest response and treatment"
      />
      <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ContactForm />
          </div>
        </div>
      </div>
      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <ContactInfoSection sectionTitle="Find Us Here" />
      </Section>
    </>
  );
}
