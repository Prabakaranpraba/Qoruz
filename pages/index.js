import Home from "@/page-view/home/Home";
import React from "react";

function HomePage() {
  return <Home />;
}

export default HomePage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
