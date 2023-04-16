import Image from "next/image";
import React from "react";
import arrow from "../../assets/arrow.png";
import user from "../../assets/user-01.png";
import label from "../../assets/label.png";
import chat from "../../assets/chat.png";
// import imp from "../../assets/imp-01.png";
import info from "../../assets/info.png";
import imp from "../../assets/imp-01.png";
import imp2 from "../../assets/imp-02.png";
import imp3 from "../../assets/imp-03.png";
import search from "../../assets/search-one.png";
import pcuser from "../../assets/pc-user-01.png";
import pcuser1 from "../../assets/pc-user.png";
import pcuser2 from "../../assets/pc-user-04.png";
import pcuser3 from "../../assets/pc-user-03.png";
import pcuser4 from "../../assets/pc-user-04.png";
import insta from "../../assets/insta.png";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";
import img5 from "../../assets/img-5.png";
import img6 from "../../assets/img-6.png";
import img7 from "../../assets/img-7.png";
import img8 from "../../assets/img-8.png";
import Styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <>
      <section className={Styles.user_details}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className={`${Styles.card} card`}>
                <div className={`${Styles.card_header} card-header`}>
                  <div className={Styles.user_status}>
                    <div className={Styles.user_sort}>
                      <h5>1 - 40 of 412 profiles</h5>
                      <p>Last updated on 24th Mar 2022</p>
                    </div>
                    <ul className={Styles.ul}>
                      <li className={Styles.li}>
                        <label for="">Sort by</label>
                        <select
                          className={Styles.form_select}
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
                          className={Styles.form_select}
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
                <div className={`${Styles.card_body} card-body`}>
                  <div className={Styles.user_list}>
                    <ul className={Styles.ul}>
                      <li className={Styles.li}>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className={Styles.user_profile}>
                              <div className={Styles.avator}>
                                <Image src={user} alt="user" />
                                <span className={Styles.hexagon}>9.3</span>
                              </div>
                              <div className={Styles.avr_details}>
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <Image src={insta} alt="" className="mx-1" />
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className={Styles.button_01}>
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className={Styles.button_01}>
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className={Styles.user_chat}>
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className={Styles.message_btn}>
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul
                                className={`${Styles.user_impressions}} mt-4`}
                              >
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

                      <li className={Styles.li}>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className={Styles.user_profile}>
                              <div className={Styles.avator}>
                                <Image src={img2} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className={Styles.avr_details}>
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <Image src={insta} alt="" className="mx-1" />
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className={Styles.button_01}>
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className={Styles.button_01}>
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className={Styles.user_chat}>
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className={Styles.message_btn}>
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul
                                className={`${Styles.user_impressions}} mt-4`}
                              >
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
                      <li className={Styles.li}>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className={Styles.user_profile}>
                              <div className={Styles.avator}>
                                <Image src={img3} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className={Styles.avr_details}>
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <Image src={insta} alt="" className="mx-1" />
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className={Styles.button_01}>
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className={Styles.button_01}>
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className={Styles.user_chat}>
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className={Styles.message_btn}>
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul
                                className={`${Styles.user_impressions}} mt-4`}
                              >
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
                      <li className={Styles.li}>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className={Styles.user_profile}>
                              <div className={Styles.avator}>
                                <Image src={img4} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className={Styles.avr_details}>
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <Image src={insta} alt="" className="mx-1" />
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className={Styles.button_01}>
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className={Styles.button_01}>
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className={Styles.user_chat}>
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className={Styles.message_btn}>
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul
                                className={`${Styles.user_impressions}} mt-4`}
                              >
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
                      <li className={Styles.li}>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className={Styles.user_profile}>
                              <div className={Styles.avator}>
                                <Image src={img5} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className={Styles.avr_details}>
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <Image src={insta} alt="" className="mx-1" />
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className={Styles.button_01}>
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className={Styles.button_01}>
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className={Styles.user_chat}>
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className={Styles.message_btn}>
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul
                                className={`${Styles.user_impressions}} mt-4`}
                              >
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
                      <li className={Styles.li}>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className={Styles.user_profile}>
                              <div className={Styles.avator}>
                                <Image src={img6} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className={Styles.avr_details}>
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <Image src={insta} alt="" className="mx-1" />
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className={Styles.button_01}>
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className={Styles.button_01}>
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className={Styles.user_chat}>
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className={Styles.message_btn}>
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul
                                className={`${Styles.user_impressions}} mt-4`}
                              >
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
                      <li className={Styles.li}>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className={Styles.user_profile}>
                              <div className={Styles.avator}>
                                <Image src={img7} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className={Styles.avr_details}>
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <Image src={insta} alt="" className="mx-1" />
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className={Styles.button_01}>
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className={Styles.button_01}>
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className={Styles.user_chat}>
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className={Styles.message_btn}>
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul
                                className={`${Styles.user_impressions}} mt-4`}
                              >
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
                      <li className={Styles.li}>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className={Styles.user_profile}>
                              <div className={Styles.avator}>
                                <Image src={img8} alt="user" />
                                <span>9.3</span>
                              </div>
                              <div className={Styles.avr_details}>
                                <h3>Nazim Rohan</h3>
                                <p>Chennai, Tamilnadu</p>
                                <div className="u-instagram">
                                  <Image src={insta} alt="" className="mx-1" />
                                  nazimrohan
                                </div>

                                <div className="btn-2 mt-4">
                                  <a href="" className={Styles.button_01}>
                                    Entertainment
                                  </a>{" "}
                                  <a href="" className={Styles.button_01}>
                                    Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className={Styles.user_chat}>
                              <ul>
                                <li>
                                  <Image src={label} alt="label" />
                                </li>
                                <li>
                                  <a href="" className={Styles.message_btn}>
                                    <Image src={chat} alt="chat" />
                                    Message
                                  </a>
                                </li>
                              </ul>

                              <ul
                                className={`${Styles.user_impressions}} mt-4`}
                              >
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
                    </ul>
                  </div>
                </div>
                <a href="" className={`${Styles.load} text-center py-3`}>
                  Load more creators
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={Styles.sidebarr}>
                <h4 className={Styles.heading_01}>Popular categories</h4>
                <div className={Styles.category_list}>
                  <ul>
                    <li>
                      <div>
                        <h3>Entertainment</h3>
                        <p>45</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Marketing</h3>
                        <p>32</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Movies</h3>
                        <p>35</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Digital arts</h3>
                        <p>21</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Electronics</h3>
                        <p>18</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Consumer</h3>
                        <p>26</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Banking</h3>
                        <p>25</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Organic</h3>
                        <p>15</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={Styles.trending_search}>
                  <h4 className={Styles.heading_01}>Trending searches</h4>
                  <ul>
                    <li>
                      {" "}
                      <a href="">
                        <Image src={search} alt="search" />
                        Top 100 instagram creators
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="">
                        <Image src={search} alt="search" />
                        Top 100 youtube creators
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="">
                        <Image src={search} alt="search" />
                        Top micro creators
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={search} alt="search" />
                        Top macro creators
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="">
                        <Image src={search} alt="search" />
                        Top technology creators
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="">
                        <Image src={search} alt="search" />
                        Top cosmetic creators
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={Styles.popular_creators}>
                  <h4 className={Styles.heading_01}>Popular creators</h4>
                  <ul>
                    <li>
                      <div className={Styles.pc_users}>
                        <div className={Styles.pc_user_details}>
                          <Image src={pcuser} alt="search" />

                          <div>
                            <h3 className={Styles.pc_username}>Surya Sula</h3>
                            <p>Entertainment</p>
                          </div>
                        </div>
                        <div className={Styles.rate}>
                          <span>8.8</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.pc_users}>
                        <div className={Styles.pc_user_details}>
                          <Image src={pcuser1} alt="search" />

                          <div>
                            <h3 className={Styles.pc_username}>Surya Sula</h3>
                            <p>Entertainment</p>
                          </div>
                        </div>
                        <div className={Styles.rate}>
                          <span>8.8</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.pc_users}>
                        <div className={Styles.pc_user_details}>
                          <Image src={pcuser2} alt="search" />

                          <div>
                            <h3 className={Styles.pc_username}>Surya Sula</h3>
                            <p>Entertainment</p>
                          </div>
                        </div>
                        <div className={Styles.rate}>
                          <span>8.8</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.pc_users}>
                        <div className={Styles.pc_user_details}>
                          <Image src={pcuser3} alt="search" />

                          <div>
                            <h3 className={Styles.pc_username}>Surya Sula</h3>
                            <p>Entertainment</p>
                          </div>
                        </div>
                        <div className={Styles.rate}>
                          <span>8.8</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.pc_users}>
                        <div className={Styles.pc_user_details}>
                          <Image src={pcuser4} alt="search" />

                          <div>
                            <h3 className={Styles.pc_username}>Surya Sula</h3>
                            <p>Entertainment</p>
                          </div>
                        </div>
                        <div className={Styles.rate}>
                          <span>8.8</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
