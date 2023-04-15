import React from "react";
import Styles from "./Home.module.css";
import CardSection from "@/components/card/CardSection";
import Header from "@/components/header/Header";
import FoodInfluencers from "@/components/food-influencers/FoodInfluencers";
import ProfileCard from "@/components/profile-card/ProfileCard";

const Home = () => {
  return (
    <>
      <h1 className={Styles.heading}>Home</h1>
      {/* <Header /> */}
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12"> */}
      <CardSection />
      {/* <ProfileCard /> */}
      {/* </div>
          <div className="col-lg-4 col-md-12"></div>
        </div>
      </div> */}
      {/* <FoodInfluencers /> */}
    </>
  );
};

export default Home;
