import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBoxTissue } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { gsap, ScrollTrigger } from 'gsap/all';

library.add(faGithub, faBars);

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      isOpen: false,
      zIndex: "300",
      opacity: "1"
    }
  }

  gsapFunctions() {
    gsap.from(".nav-links a", { duration: 1, opacity: 0, y: -150, stagger: -0.25 });
    gsap.from(".circle", { duration: 4, opacity: 0, y: -250, stagger: .3, ease: "elastic" });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".first-h2", {
      scrollTrigger: {
        trigger: "nav",
        start: "top",
        end: "600px 10px",
        scrub: true,
      },
      x: 400,
      duration: 35,
    });
    gsap.to(".second-h2", {
      scrollTrigger: {
        trigger: "nav",
        start: "top",
        end: "600px 10px",
        scrub: true,
      },
      x: -400,
      duration: 35,
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": function () {
        gsap.from(".span-row-1, .span-row-3", {
          scrollTrigger: {
            trigger: "nav",
            start: "top",
            end: "600px 10px",
            scrub: true,
          },
          x: 100,
          duration: 10
        });
        gsap.from(".span-row-2, .span-row-4", {
          scrollTrigger: {
            trigger: "nav",
            start: "bottom",
            end: "1000px",
            scrub: true,
          },
          x: -100,
          duration: 10,
        });
      },

      "(max-width: 1024px)": function () {
        gsap.to(".span-row-1, .span-row-3", {
          scrollTrigger: {
            trigger: "main",
            start: "bottom",
            end: "600px 10px",
            scrub: true,
          },
          x: 15,
          duration: 5
        });
        gsap.to(".span-row-2, .span-row-4", {
          scrollTrigger: {
            trigger: "main",
            start: "bottom",
            end: "1000px",
            scrub: true,
          },
          x: -20,
          duration: 5,
        });
      }

    });
  }

  handleMenu() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        zIndex: "-100",
        opacity: "0"
      });
      console.log("Menu Open");
    } else {
      this.setState({
        isOpen: true,
        zIndex: "300",
        opacity: "1"
      });
      console.log("Menu Close");
    }
  }

  componentDidMount() {
    this.gsapFunctions();
  }

  render() {

    const menuStyle = {
      zIndex: this.state.zIndex,
      opacity: this.state.opacity
    };

    return (
      <div className="container">
        <div className="full-menu-wrapper"  style={menuStyle}>
          <div className="nav-menu-button-inner" onClick={() => this.handleMenu()}>
          <FontAwesomeIcon className="menu-symbol" icon={['fa', 'bars']} />
        </div>
        </div>
        <nav>
          <h1>Siddharth Kurnal</h1>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#"><FontAwesomeIcon className="github-symbol" icon={['fab', 'github']} />GitHub</a>
            <a href="#">Contact</a>
            <div className="nav-menu-button" onClick={() => this.handleMenu()}>
              <FontAwesomeIcon className="menu-symbol" icon={['fa', 'bars']} />
            </div>
          </div>
        </nav>
        <main>
          <div id="name-container">
            <h2 className="first-h2">SIDDHARTH</h2>
            <h2 className="second-h2">KURNAL</h2>
            <h3>WEB / MOBILE DEVELOPER</h3>
            <div className="circle" />
            <div className="circle" />
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
        <div className="skills">
          <h4>Technologies and Skills</h4>
          <div className="skills-container">
            <span>C#</span><span>ASP.NET</span>
            <span>Java</span><span>PHP</span>
            <span>JavaScript</span><span>React Native</span>
            <span>ReactJs</span><span>NodeJs</span>
            <span>VueJs</span><span>JavaScript</span>
            <span>Android</span><span>iOS-Swift</span>
            <span>C++</span><span>Python</span>
            <span>CSS</span><span>SASS</span>
            <span>jQuery</span><span>MySQL</span>
            <span>SQL Server</span><span>RESTful API</span>
            <span>Git</span><span>Flutter</span>
            <span>Entity Framework</span><span>Maven</span>
            <span>Photoshop</span><span>Linux</span>
            <span>linq</span><span>Bash</span>
            <span>Agile</span><span>Scrum</span>
            <span>GSAP</span><span>ERD</span>
            <span>Normalization</span><span>Azure</span>
            <span>UML</span><span>SEO</span>
            <span>Sockets</span>
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
      </div >
    );
  }
}

export default App;
