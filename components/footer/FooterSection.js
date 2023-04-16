import React from "react";
import Style from "./Footer.module.css";
import Image from "next/image";
import logo from "../../assets/vector.png";
import qoruz from "../../assets/qoruz.png";
import faceboot from "../../assets/f-facebook.png";
import twitter from "../../assets/f-twitter.png";
import linkedin from "../../assets/f-linkein.png";

const FooterSection = () => {
  return (
    <>
      <div className={Style.footer}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <Image src={logo} alt="" />
              <Image src={qoruz} alt="" />
              <p className={`${Style.content} py-3`}>
                Qoruz is an influencer marketing and intelligence platform, that
                enables superior influencer discovery, quick and easy influencer
                outreach.
              </p>
            </div>
            <div className="col-lg-2">
              <div className={Style.menu}>
                <h6>For Business</h6>
                <ul>
                  <li className={Style.list}>Qoruz platform</li>
                  <li className={Style.list}>Pricing</li>
                  <li className={Style.list}>Usecases</li>
                  <li className={Style.list}>verticals</li>
                  <li className={Style.list}>Help</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className={Style.menu}>
                <h6>For Business</h6>
                <ul className={Style.list}>
                  <li className={Style.list}>Joining Qoruz</li>
                  <li className={Style.list}>Connecting brands</li>
                  <li className={Style.list}>Campaigns</li>
                  <li className={Style.list}> Profile</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className={Style.menu}>
                <h6>For Business</h6>
                <ul className={Style.list}>
                  <li className={Style.list}>About Qoruz</li>
                  <li className={Style.list}>Blog</li>
                  <li className={Style.list}> We’re hiring</li>
                  <li className={Style.list}>Privacy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <p className={`${Style.copy_rights} mx-3`}>
              Datrux Systems Pvt. Ltd. © 2022{" "}
            </p>
            <div className="">
              <Image src={faceboot} alt="" className="mx-1" />
              <Image src={twitter} alt="" className="mx-1" />
              <Image src={linkedin} alt="" className="mx-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
