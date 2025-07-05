"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.scss"; // Sass 전역 스타일

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header logoSrc="/images/logo.svg" variant="cs_heading_color" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
