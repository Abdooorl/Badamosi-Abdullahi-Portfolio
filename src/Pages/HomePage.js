import Navigations from '../components/Navigation';
// import Project from '../components/Projects'
import '../App.css';
import Header from '../components/Header';
import UX from '../components/UX';
import UXData from '../components/UXData.json';
import UIData from "../components/UIData.json";
import FrontendData from "../components/FrontendData.json";
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import '../components/project.css'
import UI from '../components/UI';
import Frontend from '../components/Frontend';

function HomePage() {

  const [isStateActive, setActive] = useState(() => {
    return localStorage.getItem('isStateActive') || 'UX Study';
  })


  const handleState = (state) => {
      setActive(state);
      localStorage.setItem('isStateActive', state)

  }

  useEffect(() => {
    const savedSection = localStorage.getItem('isStateActive');
    if(savedSection && savedSection !== isStateActive)
    setActive(savedSection);
  })

  return (
    <div className="Homepage">
       <Navigations />
       <div className='main'>
          <Header />
          <div className="projects">
            <div className="project-tag semibold-18">
                SELECTED PROJECTS
            </div>
            <div className="works">
                
                <p 
                className={`state pointer medium-16 ${isStateActive === 'UX Study' ? 'active-state' : '' }`} 
                onClick={() => handleState("UX Study")}> 
                UX Study </p>

                <p 
                className={`state pointer medium-16 ${isStateActive === "UI Study" ? 'active-state' : "" }`}
                onClick={() => handleState("UI Study")}
                >
                UI Design</p>

                <p className={`state pointer medium-16 ${isStateActive === "Frontend Project" ? 'active-state' : ""}`}
                onClick={() => handleState("Frontend Project")}
                >Frontend Project</p>

            </div>
        </div>
          {isStateActive === 'UX Study' ? <UX data={UXData.infoData}/> : <></>} 
          {isStateActive === 'UI Study' ? <UI data={UIData.UiData}/> : <></>}
          {isStateActive === 'Frontend Project' ? <Frontend data={FrontendData.FEData} /> : <></>}

          
          <Footer />
       </div>

    </div>
  );
}

export default HomePage;
