import React from "react";
import Style from "./SubNav.module.css";

const SubNav = () => {
  return (
    <nav
      className={`${Style.bgMain} navbar navbar-expand-lg navbar-dark px-0 py-3`}
    >
      <div className={`${Style.sub_nav} container-xl`}>
        <a className={`${Style.sub_nav_brand} navbar-brand`} href="#">
          Home › Find creators › Instagram
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav  ms-auto">
            <a
              className="nav-item nav-link active mx-2"
              href="#"
              aria-current="page"
            >
              Top 100 <br></br>Instagram creators
            </a>
            <a className="nav-item nav-link mx-2" href="#">
              Top 100 <br></br>Youtube creators
            </a>
            <a className="nav-item nav-link mx-2" href="#">
              Top 100 <br></br>Micro creators
            </a>
            <a className="nav-item nav-link mx-2" href="#">
              Top 100 <br></br>Macro creators
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
