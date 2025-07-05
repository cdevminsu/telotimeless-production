import TextWidget from "../Widget/TextWidget";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import SocialWidget from "../Widget/SocialWidget";
import MenuWidget from "../Widget/MenuWidget";
import NewsletterStyle4 from "../Widget/NewsletterStyle4";

const menuDataOne = [
  { title: "About Us", href: "/about" },
  { title: "Hospitals", href: "/hospitals" },
  { title: "Appointment", href: "/appointment" },
];

const menuDataTwo = [
  { title: "Contact Us", href: "/contact" },
  { title: "FAQs", href: "/" },
];

const menuDataThree = [
  { title: "Privacy Policy", href: "/" },
  { title: "Terms and Conditions", href: "/" },
];

export default function Footer() {
  return (
    <footer className="cs_footer cs_style_2 cs_type_1 cs_accent_bg cs_white_color">
      <div className="container">
        <NewsletterStyle4
          title="Be Our Subscribers"
          subTitle="Join our newsletter to keep up to date <br />health from our experts"
        />
        <div className="cs_footer_in">
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <TextWidget
                logoUrl="/images/logo_white.svg"
                text="Medical Tourism & Wellness platform"
              />
              <ContactInfoWidget />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataOne} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataTwo} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataThree} />
              <SocialWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom">
        <div className="container">
          <div className="cs_copyright">
            Copyright © 2025 Telo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
