import React from "react";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={Styles.banner}>
        <div className="d-table-cell text-center align-middle">
          <div className="col-lg-12">
            <h4>Find top digital content creators in India </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
