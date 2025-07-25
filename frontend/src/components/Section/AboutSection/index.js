import Spacing from "../../Spacing";

export default function AboutSection({
  imgUrl,
  spiningImgUrl,
  title,
  subTitle,
  featureList,
}) {
  return (
    <section className="cs_about cs_style_1">
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse cs_gap_y_40">
          <div className="col-lg-7">
            <Spacing md="55" />
            <div className="cs_about_img">
              <img src={imgUrl} alt="About" />
              <div className="cs_about_mini_img">
                <img
                  src={spiningImgUrl}
                  alt="Mini"
                  className="cs_rotate_animation"
                />
                <img
                  src={`/images/icons/tick.svg`}
                  alt="Right"
                  className="cs_right_icon"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1">
                <h2 className="cs_section_title cs_fs_72 m-0">{title}</h2>
                <div className="cs_height_5" />
                <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
                  {subTitle}
                </h3>
              </div>
              <Spacing md="72" lg="72" />
              <ul className="cs_about_text_list">
                {featureList.map((item, index) => (
                  <li key={index}>
                    <i className="cs_accent_color">
                      <svg
                        width={35}
                        height={24}
                        viewBox="0 0 35 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.5342 13.0789L23.3977 23.5789C23.0977 23.8522 22.6958 24.0034 22.2787 23.9999C21.8615 23.9965 21.4625 23.8388 21.1675 23.5607C20.8726 23.2825 20.7053 22.9063 20.7016 22.513C20.698 22.1197 20.8584 21.7408 21.1482 21.4579L29.5689 13.5184H1.59092C1.16899 13.5184 0.764327 13.3604 0.465971 13.0791C0.167615 12.7978 0 12.4163 0 12.0184C0 11.6206 0.167615 11.2391 0.465971 10.9578C0.764327 10.6765 1.16899 10.5184 1.59092 10.5184H29.5689L21.1482 2.57893C20.9962 2.44056 20.875 2.27505 20.7916 2.09204C20.7083 1.90903 20.6644 1.7122 20.6625 1.51303C20.6607 1.31386 20.7009 1.11635 20.7809 0.932003C20.8609 0.747658 20.9791 0.580179 21.1284 0.439341C21.2778 0.298502 21.4554 0.18712 21.651 0.111698C21.8465 0.0362778 22.056 -0.00167465 22.2672 5.53131e-05C22.4785 0.00178719 22.6872 0.0431671 22.8813 0.12178C23.0754 0.200394 23.251 0.314665 23.3977 0.457932L34.5342 10.9579C34.8325 11.2392 35 11.6207 35 12.0184C35 12.4162 34.8325 12.7976 34.5342 13.0789Z"
                          fill="#307BC4"
                        />
                      </svg>
                    </i>
                    <h3 className="cs_normal cs_fs_32 cs_body_color">
                      {item.featureListTitle}
                    </h3>
                    <p className="m-0">{item.featureListSubTitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
