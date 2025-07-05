import SectionHeading from "../components/SectionHeading";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import Head from "next/head";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 Error | Telotimeless</title>
        <meta name="description" content="Page not found" />
      </Head>
      <div className="cs_error cs_center text-center cs_gray_bg_1">
        <div className="container">
          <SectionHeading
            title="This page could <br> not be found."
            titleUp="404 Errro"
            variantColor="cs_white_color"
          />
          <Spacing lg="30" md="30" />
          <Button btnText="Back To Home" btnUrl="/" />
        </div>
      </div>
    </>
  );
}
