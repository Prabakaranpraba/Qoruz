import Image from "next/image";
import React from "react";
import img from "../../assets/food.png";
import Style from "./Food.module.css";

const FoodInfluencers = () => {
  return (
    <>
      <div className={`${Style.bgMain} container-fluid`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Image
                src={img}
                // className={Styles.profile}
                alt="Landscape picture"
              />
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodInfluencers;
