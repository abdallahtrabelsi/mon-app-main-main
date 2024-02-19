
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Strategie from "./components/strategie/Strategie";
import Create from "./components/create/Create";
import Contact from "./components/contact/Contact";
import ScrollToTop from './ScrollToTop';
import Analytics from "./components/analytics/Analytics";
import Planing from "./components/planing/Planing";
import Operation from "./components/operation/Operation";
import Branding from "./components/branding/Branding";
import Design from "./components/design/Design";
import Web from "./components/web/Web";
import Event from "./components/event/Event";
// import PreLoader from "./components/PreLoader";
// import Gallery from "./components/Gallery";
// import WeatherApp from "./i18n";
// import Scene from "./components/scene/Scene";
// import { useState, useEffect } from "react";
// import  Footer  from "./components/Footer/Footer";
// import Carousel from "./components/slider/Carousel"

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   //  setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <PreLoader loading={loading} />
      ) : ( */}
      {/* <motion.div
        className="box"
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <span>Hello Cosmos</span>
      </motion.div> */}
   
      <Router>
        <ScrollToTop />
        <nav>
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Strategie" element={<Strategie />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Analytics" element={<Analytics/>} />
            <Route path="/Planing" element={<Planing/>} />
            <Route path="/Operation" element={<Operation/>} />
             <Route path="/Branding" element={<Branding/>} />
             <Route path="/Design" element={<Design/>} />
             <Route path="/Web" element={<Web/>} />
              <Route path="/Event" element={<Event/>} />
          </Routes>
        
        </nav>
         {/* <Footer/> */}
      </Router>

      {/* )} */}
    </>
  );
}

export default App;
