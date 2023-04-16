import React from "react";
import Styles from "./Card.module.css";
import search from "../../assets/search.png";
import insta from "../../assets/instagram.png";
import user from "../../assets/pc-user.png";
import Image from "next/image";
const CardSection = () => {
  return (
    <>
      <section className={Styles.filter_strip}>
        <div className="container mt-4">
          <div className={`${Styles.card} card`}>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-2">
                  <select
                    className={`${Styles.form_select} form-select`}
                    aria-label="Default select example"
                  >
                    <option selected>
                      <Image src={insta} alt="" />
                      Instagram
                    </option>
                    <option value="1">Youtube</option>
                    <option value="2">Twitter</option>
                    <option value="3">Facebook</option>
                  </select>
                </div>
                <div className="col-lg-10">
                  <div className={`${Styles.filter_input} filter-input py-3`}>
                    <Image src={search} alt="search" />
                    <div className={Styles.someCSSMoludesClass}>
                      <input
                        type="search"
                        name=""
                        className={`${
                          Styles.form_control + " " + Styles.input
                        } form-control`}
                        id=""
                        placeholder="top 100 instagram creators"
                      />
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

export default CardSection;
