import React from 'react'
import Nav from './nav/Nav.jsx'
import Footer from './component/Footer.jsx'
import Caraousel from './component/Caraousel.jsx'
import YtProfileSection from './component/ytProfileSection.jsx'
import GaleriInformasi from './component/GaleriInformasi.jsx'


const App = () => {
  return (
    <>
      <Nav/>
      <Caraousel/>
      <YtProfileSection/>
      <GaleriInformasi/>
      <Footer />
    </>
  );
};

export default App;