import React from "react";
import Styles from "./Home.module.css";
import CardSection from "@/components/card/CardSection";
import Header from "@/components/header/Header";
import FoodInfluencers from "@/components/food-influencers/FoodInfluencers";
import ProfileCard from "@/components/profile-card/ProfileCard";
import { InfluencersBloggers } from "@/components/influencers-bloggers/InfluencersBloggers";
import { FrequentlyQuestions } from "@/components/frequently-questions/FrequentlyQuestions";
import ReachOut from "@/components/reach-out/ReachOut";
import Creators from "@/components/creators/Creators";

const Home = () => {
  return (
    <>
      <Header />
      <CardSection />
      <ProfileCard />
      <ReachOut />
      <InfluencersBloggers />
      <Creators />
      <FrequentlyQuestions />
    </>
  );
};

export default Home;
