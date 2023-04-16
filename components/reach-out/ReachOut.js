import React from "react";
import Style from "./Reachout.module.css";
import Image from "next/image";
import r1 from "../../assets/r-01.png";
import r2 from "../../assets/r-02.png";
import r3 from "../../assets/r-03.png";
import arrowright from "../../assets/arrow_right.png";

const ReachOut = () => {
  return (
    <>
      <section className={Style.reach_out}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${Style.card} card`}>
                <div className={`${Style.card_body} card-body`}>
                  <div className="row">
                    <div className="col-lg-1 my-auto">
                      <ul>
                        <li>
                          <Image src={r1} alt="" />
                        </li>
                        <li>
                          <Image src={r2} alt="" />
                        </li>
                        <li>
                          <Image src={r3} alt="" />
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h3>Reachout & connect with Indian food influencers</h3>
                    </div>
                    <div className="col-lg-4 my-auto float-end">
                      <a href="" className={Style.reach_out_btn}>
                        Connect with Creators
                        <Image src={arrowright} alt="" className="ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReachOut;
