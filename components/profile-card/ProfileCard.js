import Image from "next/image";
import React from "react";
import arrow from "../../assets/arrow.png";
import user from "../../assets/user-01.png";
import label from "../../assets/label.png";
import chat from "../../assets/chat.png";
import imp from "../../assets/imp-01.png";
import info from "../../assets/info.png";
import imp2 from "../../assets/imp-02.png";
import imp3 from "../../assets/imp-03.png";
import Styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <>
      <section className={Styles.user_details}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card">
                <div className={Styles.card_header}>
                  <div className={Styles.user_status}>
                    <div className="user_sort">
                      <h5>1 - 40 of 412 profiles</h5>
                      <p>Last updated on 24th Mar 2022</p>
                    </div>
                    <ul>
                      <li>
                        <label for="">Sort by</label>
                        <select
                          className="form_select"
                          aria-label="Default select example"
                        >
                          <option selected>Follwers</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </li>
                      <li>
                        <label for=""> Filter By</label>
                        <select
                          className="form_select"
                          aria-label="Default select example"
                        >
                          <option selected>Caregory</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </li>
                      <li>
                        <h5>
                          Download List
                          <Image src={arrow} alt="arrow" />
                        </h5>
                        <p>20 Times today</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="user_list">
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="user_profile">
                              <div className="avator">
                                <Image src={user} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className="avr_details">
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <i className="fab fa-instagram me-2"></i>
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className="button-01">
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className="button-01">
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="user_chat">
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className="message_btn">
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul className="user_impressions mt-4">
                                <li>
                                  <Image src={imp} alt="imp" /> 22%{" "}
                                  <Image src={info} alt="imp" />
                                </li>
                                <li>
                                  <Image src={imp2} alt="imp2" />
                                  245k <Image src={info} alt="imp" />
                                </li>
                                <li>
                                  <Image src={imp3} alt="imp" /> 67k{" "}
                                  <Image src={info} alt="imp" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="user_profile">
                              <div className="avator">
                                <Image src={user} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className="avr_details">
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <i className="fab fa-instagram me-2"></i>
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className="button-01">
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className="button-01">
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="user_chat">
                              <ul>
                                <li>
                                  {/* <img src="assets/images/label.png" alt="" /> */}
                                </li>
                                <li>
                                  <a href="" className="message_btn">
                                    {/* <img src="assets/images/chat.png" alt="" /> */}
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul className="user_impressions mt-4">
                                <li>
                                  {/* <img src="assets/images/imp-01.png" alt="" /> 22% <img src="assets/images/info.png" alt="" /> */}
                                </li>
                                <li>
                                  {/* <img src="assets/images/imp-02.png" alt=""/> 245k <img src="assets/images/info.png" alt="" /> */}
                                </li>
                                <li>
                                  {/* <img src="assets/images/imp-03.png" alt=""/> 67k <img src="assets/images/info.png" alt="" /> */}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <></>
    </>
  );
};

export default ProfileCard;
