import React from 'react'
import Nav from './nav/Nav.jsx'
import Footer from './component/Footer.jsx'
import Caraousel from './component/Caraousel.jsx'
import YtProfileSection from './component/ytProfileSection.jsx'
import GaleriInformasi from './component/GaleriInformasi.jsx'
import SambutanSection from './component/SambutanSection.jsx'
import JurusanSection from './component/JurusanSection.jsx'
import StatistikSection from './component/StatistikSection.jsx'
import FooterTop from './component/FooterTop.jsx'


const App = () => {
  return (
    <>
      <Nav/>
      <Caraousel/>
      <YtProfileSection/>
      <GaleriInformasi/>
      <SambutanSection/>
      <JurusanSection/>
      <StatistikSection/>
      <FooterTop/>
      <Footer />
    </>
  );
};

export default App;