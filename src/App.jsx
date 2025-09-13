import React, { Fragment } from 'react'
import Nav from './nav/Nav.jsx'
import Footer from './component/Footer.jsx'
import Caraousel from './component/Caraousel.jsx'
import YtProfileSection from './component/ytProfileSection.jsx'

const App = () => {
  return (
    <>
      <Nav className='w-screen'/>
      <Caraousel/>
      <YtProfileSection/>
      <Footer />
    </>
  );
};

export default App;