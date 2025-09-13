import React, { Fragment } from 'react'
import Nav from './nav/Nav.jsx'
import Footer from './component/Footer.jsx'
import Caraousel from './caraousel/Caraousel.jsx';

const App = () => {
  return (
    <>
      <Nav />
      <Caraousel/>
      <Footer />
    </>
  );
};

export default App;