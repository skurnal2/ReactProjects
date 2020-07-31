import React from "react";
import '../../css/home-page.scss';
import '../../css/nav.scss';

//Component Imports
import Services from "../home-sections/services";
import Projects from "../home-sections/projects";
import Skills from "../home-sections/skills";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div id="name-container">
            <h2 className="first-h2">SIDDHARTH</h2>
            <h2 className="second-h2">KURNAL</h2>
            <h3>WEB / MOBILE DEVELOPER</h3>
            <div className="circle" />
            <div className="circle" />
          </div>
        </main>
        <Services />
        <Projects />
        <Skills />
      </div>
    );
  }
}

export default HomePage;