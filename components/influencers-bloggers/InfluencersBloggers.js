import Image from "next/image";
import React from "react";
import img from "../../assets/blog.png";
import Styles from "./Blog.module.css";
import arrowright from "../../assets/ornge.png";

export const InfluencersBloggers = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <Image src={img} className={Styles.blog_img} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <h4 className={Styles.heading}>
              Connect with Indian food influencers & bloggers
            </h4>
            <p className={Styles.pharagraph}>
              After you’ve finalized the list of Indian food influencers and
              bloggers to work on your influencer campaign, the next crucial
              step is to find the contact details of the Indian food influencers
              you’ve finalized. So you can reach out, connect and understand
              commercials and deliverables before collaborating with the
              influencer.
            </p>
            <div className={`${Styles.btn}  py-3`}>
              <a href="" className={Styles.get_button}>
                Get Started for Free
                <Image src={arrowright} alt="" className="ms-2"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
