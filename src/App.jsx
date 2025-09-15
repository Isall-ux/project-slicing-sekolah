import React from 'react'
import Nav from './nav/Nav.jsx'
import Footer from './component/Footer.jsx'
import Caraousel from './component/Caraousel.jsx'
import YtProfileSection from './component/YtProfileSection.jsx'
import GaleriInformasi from './component/GaleriInformasi.jsx'
import SambutanSection from './component/SambutanSection.jsx'
import JurusanSection from './component/JurusanSection.jsx'
import StatistikSection from './component/StatistikSection.jsx'
import FooterTop from './component/FooterTop.jsx'

/*
  file utama yg dimana react merender semua componet yg sudah di panggil
*/

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