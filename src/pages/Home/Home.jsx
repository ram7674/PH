import React from "react";
import Footer from "../../components/Footer/Footer";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Slider from "../../components/SliderHomePage/Slider";
import SearchDoctors from "../../components/SearchDoctors/SearchDoctors";
import HumanCareExp from "../../components/HumanCareExp/HumanCareExp";
import MethodCard from "../../components/MethodCard/MethodCard";
import LifeGlaneTabs from "../../components/LifeGlaneTabs/LifeGlaneTabs";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      {/* meta taga for seo */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Best Multispeciality Hospital In Kukatpally | Top Hospital in secunderabad | Top Hospital in Manikonda | Prasad Hospitals</title>
        {/* Canonical URL */}
        <link rel="canonical" href="https://prasadhospitals.in" />
        {/* Meta description */}
        <meta
          name="description"
          content="Prasad Hospitals is one of the best multispeciality hospital in Kukatpally, Top Hospital in secunderabad, Top Hospital in Manikonda. We provide world-class healthcare services treatment at a reasonable cost."/>
        {/* Meta keywords */}
        <meta name="keywords" content="Best Hospitals In Hyderabad, Best Multi Specialty Hospitals In Hyderabad, Top Hospitals In Hyderabad, Top Multi Specialty Hospitals In Hyderabad" />
        {/* Meta author */}
        <meta name="author" content="prasadsolutions.in" />
      </Helmet>
      

      {/* meganavabar component */}
      <MegaNavbar />

      {/* slider component */}
      <Slider />

      {/* searchDoctors components */}
      <SearchDoctors />

      {/* methods card container */}
      <MethodCard />

      {/* human expertise component */}
      <HumanCareExp />

      {/* LifeGlaneTabs component */}
      <LifeGlaneTabs />

      {/* footer component */}
      <Footer />
    </>
  );
};

export default Home;
