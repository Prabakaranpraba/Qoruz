// import React, { useState } from "react";
// import menuItems from "./MenuItems";
// import Styles from "./Nabar.module.css";

// const NavBar = () => {
//   const [active, setActive] = useState(false);

//   const handleClick = () => {
//     setActive(!active);
//   };
//   return (
//     <>
//       <nav classNameName={Styles.navbar}>
//         <h1 classNameName={Styles.navbar_logo}>
//           React <i classNameName="fab fa-react"></i>
//         </h1>
//         <div classNameName="menu-icon" onClick={handleClick}>
//           <i classNameName={active ? "fas fa-times" : "fas fa-bars"}></i>
//         </div>
//         <ul classNameName={active ? "nav-menu active" : "nav-menu"}>
//           {menuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <a href={item.url} classNameName={item.cName}>
//                   {item.title}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//         <button>SIGN UP</button>
//       </nav>
//     </>
//   );
// };

// export default NavBar;

import React from "react";
import Image from "next/image";
import img from "../../assets/logo.png";
import Style from "./Nabar.module.css";

const NavBar = () => {
  return (
    <>
      <nav
        className={`${Style.bgMain} navbar navbar-expand-lg navbar-dark px-0 py-3`}
      >
        <div className="container-xl flex-row-reverse flex-lg-row">
          <div className="d-flex align-items-lg-center mt-3 mt-lg-0  ml-auto">
            <a
              href="#"
              className="btn btn-sm btn btn-outline-light d-block d-md-none rounded-pill w-full w-lg-auto"
            >
              Request Demo
            </a>
          </div>
          <a className="navbar-brand" href="#">
            <Image
              src={img}
              // className={Styles.profile}
              alt="Landscape picture"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse1"
            aria-controls="navbarCollapse1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse1">
            <div className="navbar-nav me-auto mx-5">
              <a
                className="nav-item nav-link active mx-3"
                href="#"
                aria-current="page"
              >
                Brands
              </a>
              <a className="nav-item nav-link mx-3" href="#">
                Find creators
              </a>
              <a className="nav-item nav-link mx-3" href="#">
                Resources
              </a>
              <a className="nav-item nav-link mx-3" href="#">
                Pricing
              </a>
            </div>

            <div className="d-flex align-items-lg-center mt-3 mt-lg-0  ml-auto">
              <a
                href="#"
                className="btn btn-sm btn btn-outline-light d-none d-md-block rounded-pill w-full w-lg-auto"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
