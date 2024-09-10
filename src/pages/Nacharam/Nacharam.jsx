import React from 'react'
import MegaNavbar from '../../components/Navbar/MegaNavbar'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/SliderHomePage/Slider'
import HumanCareExp from '../../components/HumanCareExp/HumanCareExp'
import LifeGlaneTabs from '../../components/LifeGlaneTabs/LifeGlaneTabs'
import SearchDoctors from '../../components/SearchDoctors/SearchDoctors'
import MethodCard from '../../components/MethodCard/MethodCard'

const Nacharam = () => {
  return (
    <>

      {/* meagNavbat component */}
      <MegaNavbar/>

      {/* slider page component */}
      <Slider/>

      {/* Searchdoctors components */}
      <SearchDoctors/>

      {/* methodscard component */}
      <MethodCard/>

      {/* HumanCareExp component */}
      <HumanCareExp/>

      {/* lifeglane tabs components */}
      <LifeGlaneTabs/>

      {/* footer component */}
      <Footer/>
    </>
  )
}

export default Nacharam;