import React from 'react';
import './App.css';
import Hero from './Components/Sections/Hero/Hero';
import About from './Components/Sections/About/About';
import Footer from './Components/Footer/Footer';
import Works from './Components/Sections/Works/Works';
import { myWorks } from './Content/MyWorks';
function App() {
  return (
    <div className="App 
                    p-4

                    sm:p-2 
                    sm:py-20

                    md:px-2 
                    md:py-0
                    
                    lg:px-6 
                    lg:py-0

                    xl:px-8 
                    xl:py-0

                    2xl:px-16
                    2xl:py-0
                    ">
      <Hero />
      <About />
      <Works InfoList={myWorks.InfoList} />
      <Footer />
    </div>
  );
}

export default App;
