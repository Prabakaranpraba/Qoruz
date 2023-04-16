import React from "react";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={Styles.backgroundcolor}>
        <div className={Styles.banner}>
          <div className="d-table-cell text-center align-middle">
            <div className="col-lg-12">
              <h2 className={Styles.banner_heading}>
                Find top digital content creators in India{" "}
              </h2>
              <p className={Styles.banner_content}>
                With a user base of around 100M, India stands next to the US in
                the <br></br>Instagram users count. With the advent of the
                internet in India,
              </p>
              <a href="" className={Styles.more_btn}>
                + More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
