import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { gsap, ScrollTrigger } from 'gsap/all';

library.add(faGithub, faBars);

class App extends React.Component {

  gsapFunctions() {
    gsap.from(".nav-links a", {duration: 1, opacity: 0, y: -150, stagger: -0.25});
    gsap.from(".circle", {duration: 4, opacity: 0, y: -250, stagger: .3, ease: "elastic"});        
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".first-h2", {
      scrollTrigger: {
        trigger: "nav",
        start: "top",
        end: "600px 10px",
        scrub: true,
      },      
      x: 400,
      duration: 35
    });
    gsap.to(".second-h2", {
      scrollTrigger: {
        trigger: "nav",
        start: "top",
        end: "600px 10px",
        scrub: true,
      },      
      x: -400,
      duration: 35
    });
  }

  componentDidMount() {
    this.gsapFunctions();
  }

  render() {
    return (
      <div className="container">
        <nav>
          <h1>Siddharth Kurnal</h1>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#"><FontAwesomeIcon className="github-symbol" icon={['fab', 'github']} />GitHub</a>
            <a href="#">Contact</a>
            <div className="nav-menu-button">
              <FontAwesomeIcon className="menu-symbol" icon={['fa', 'bars']} />
            </div>
          </div>
        </nav>
        <main>
          <div id="name-container">
            <h2 className="first-h2">SIDDHARTH</h2>            
            <h2 className="second-h2">KURNAL</h2>
            <h3>WEB / MOBILE DEVELOPER</h3>
            <div className="circle"/>
            <div className="circle"/>
          </div>
        </main>
        <div className="services">
          <h4>I can help you with</h4>
          <div className="services-container">
            <span className="span-row-1">Web Development</span>
            <span className="span-row-1">Web Design</span>
            <span className="span-row-2">Mobile Development</span>
            <span className="span-row-2">UX</span>
            <span className="span-row-2">QA</span>
            <span className="span-row-3">Database</span>
            <span className="span-row-3">Wordpress</span>
            <span className="span-row-3">Testing</span>
            <span className="span-row-4">System Analysis</span>
            <span className="span-row-4">Prototyping</span>
          </div>
        </div>
        <div className="project-sub-links">
          <ul>
            <li>Sunshine Meme Generator</li>
            <li>Geo Covid</li>
            <li>Highway Dodge</li>
            <li>BeeChat</li>
            <li>LaptopCatalog</li>
            <li>Wallify</li>
            <li>LAAutoDetailing</li>
          </ul>
        </div>
        <div className="projects">Projects</div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
