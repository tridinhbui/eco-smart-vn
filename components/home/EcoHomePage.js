
import React from "react";
import AboutHomePage from "./AboutHomePage";
import BannerHome from "./bannerHome";
import CustomerHomePage from "./CustomerHomePage";
import ProcessHomePage from "./ProcessHomePage";


export default function EcoHomePage() {
  return (
    <>
      <BannerHome />
      <ProcessHomePage />
      <AboutHomePage />
      <CustomerHomePage />
    </>
  );
}

