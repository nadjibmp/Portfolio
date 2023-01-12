import React from 'react';
import './App.css';
import Hero from './Components/Sections/Hero/Hero';
import About from './Components/Sections/About/About';
import Footer from './Components/Footer/Footer';
import Works from './Components/Sections/Works/Works';
import { myWorks } from './Content/MyWorks';
import Contact from './Components/Sections/Contact/Contact';
function App() {
  return (
    <div className="App 
                    
                    p-4

                    sm:px-5 
                    sm:py-20

                    md:px-7 
                    md:py-20
                    
                    lg:px-6 
                    lg:py-20

                    xl:px-12 
                    xl:py-20

                    2xl:px-16
                    2xl:py-20
                    ">
      <Hero />
      {/* <About /> */}
      {/* <Works InfoList={myWorks.InfoList} /> */}
      {/* <Contact/>
      <Footer /> */}
    </div>
  );
}

export default App;
