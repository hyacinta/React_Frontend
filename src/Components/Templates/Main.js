import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import MainBoxOffice from "../Organisms/Main/MainBoxOffice";
import MainBenefits from "../Organisms/Main/MainBenefits";
import MainCuration from "../Organisms/Main/MainCuration";
import MainLink from "../Organisms/Main/MainLink";
import MainNotice from "../Organisms/Main/MainNotice";
import MainTheater from "../Organisms/Main/MainTheater";
import NavSample from "../Organisms/NavSample";

const Main = () => {
  return (
    <>
      <Header />
      <MainBoxOffice />
      <MainBenefits />
      <MainLink />
      <MainCuration />
      <MainTheater />
      <MainNotice />
      <Footer />
      <NavSample />
    </>
  );
};

export default Main;
