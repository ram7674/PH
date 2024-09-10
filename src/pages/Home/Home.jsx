import React from 'react'
import Footer from '../../components/Footer/Footer';
import MegaNavbar from '../../components/Navbar/MegaNavbar';
import Slider from '../../components/SliderHomePage/Slider';
import SearchDoctors from '../../components/SearchDoctors/SearchDoctors';
import HumanCareExp from '../../components/HumanCareExp/HumanCareExp';
import MethodCard from '../../components/MethodCard/MethodCard';
import LifeGlaneTabs from '../../components/LifeGlaneTabs/LifeGlaneTabs';

const Home = () => {
  return (
    <>
      {/* meganavabar component */}
      <MegaNavbar/>

      {/* slider component */}
      <Slider/>

      {/* searchDoctors components */}
      <SearchDoctors/>

      {/* methods card container */}
      <MethodCard/>

      {/* human expertise component */}
      <HumanCareExp/>

      {/* LifeGlaneTabs component */}
      <LifeGlaneTabs/>

      {/* footer component */}
      <Footer />

    </>
  )
}

export default Home;