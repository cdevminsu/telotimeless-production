"use client";

import React from "react";
import BannerSectionStyle3 from "@/components/Section/BannerSection/BannerSectionStyle3";
import AppointmentWithContactInfoSection from "@/components/Section/AppointmentWithContactInfoSection";
import Section from "@/components/Section";
import Head from "next/head";

export default function Appointments() {
  return (
    <>
      <Head>
        <title>Appointments | Telotimeless</title>
        <meta
          name="description"
          content="Schedule your appointment with our healthcare professionals. Fill out the form to book a consultation and take the first step towards better health."
        />
      </Head>
      <BannerSectionStyle3
        bgUrl={`/images/appointments/banner_bg.svg`}
        imgUrl={`/images/appointments/banner_img.png`}
        title="Don’t Let Your Health Take a Backseat!"
        subTitle="Fill out the appointment form below to schedule a consultation with one of our healthcare professionals."
      />
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AppointmentWithContactInfoSection />
      </Section>
    </>
  );
}
