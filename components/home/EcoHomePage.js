
import React from "react";
import AboutHomePage from "./AboutHomePage";
import BannerHome from "./BannerHome";
import CustomerHomePage from "./CustomerHomePage";
import ProcessHomePage from "./ProcessHomePage";
import Achievement from './Achievement'
import Sponsors from "./Sponsors";
import Product from './Product'
import SlideShow from "./SlideShow";
import Youtube from "./Youtube";
import ContactHomePage from "./ContactHomePage";
import BackToTop from "./BackToTop";


export default function EcoHomePage() {
  return (
    <>
      <BannerHome />
      <ProcessHomePage />
      <AboutHomePage />
      <CustomerHomePage />
      <Achievement />
      <Sponsors />
      <Product />
      <SlideShow />
      <Youtube />
      <ContactHomePage />
      <BackToTop />
    </>
  );
}

