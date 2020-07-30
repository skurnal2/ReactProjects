//Images
import sunshine_url from './images/sunshine-meme.gif';
import geo_covid_url from './images/geo-covid.JPG';
import highway_dodge_url from './images/highway_dodge.JPG';
import bee_chat_url from './images/bee-chat.JPG';
import la_auto_detail_url from './images/la-auto-detail.JPG';
import wallify_url from './images/wallify.JPG';
import color_app_url from './images/color-app.JPG';

//Imports
import React from 'react';
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
      zIndex: "-100",
      opacity: "0",
      currentWidth: window.screen.width
    }
  }

  gsapFunctions() {      

    //Reload GSAP animations on Screen thresholds
    if(window.screen.width > 1024 && this.state.currentWidth < 1024) { 
        this.state.currentWidth = window.screen.width;
        this.gsapFunctions();
    }
    else if(window.screen.width < 1024 && this.state.currentWidth > 1024) {
      this.state.currentWidth = window.screen.width;
        this.gsapFunctions();
    }

    gsap.registerPlugin(ScrollTrigger);
    //GSAP Animations
    gsap.from(".nav-links a", { duration: 1, opacity: 0, y: -150, stagger: -0.25 });
    gsap.from("nav h1", {
      scrollTrigger: {
        trigger: ".services",
        start: "top", 
        end: "100px 15px",       
        markers: true,
        scrub: true
      },          
      y: -120                
    });
    gsap.to("#title-first", {
      scrollTrigger: {
        trigger: ".services",
        start: "top", 
        end: "100px 15px",       
        markers: true,
        scrub: true
      },    
      visibility: "visible",
      marginRight: 50,                  
    });
    gsap.to("#title-second", {
      scrollTrigger: {
        trigger: ".services",
        start: "top",
        end: "100px 15px",
        scrub: true
      },      
      visibility: "visible",
      marginLeft: 50,             
    });
    gsap.from(".circle", { duration: 4, opacity: 0, y: -250, stagger: .3, ease: "elastic" });
    
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
          scale: .5,
          stagger: .25,
          opacity: 0,
          duration: 11
        });
        gsap.from(".span-row-2, .span-row-4", {
          scrollTrigger: {
            trigger: "nav",
            start: "top",
            end: "600px 10px",
            scrub: true,
          },
          scale: .5,
          stagger: -.25,
          opacity: 0,
          duration: 11,
        });

        //Changing height on scroll animation
        gsap.to("nav", {
          scrollTrigger: {
            trigger: "nav", 
            start: "bottom",
            scrub: true,            
          },
          height: "4rem",
          ease: "ease"
        })
      },

      "(max-width: 1024px)": function () {
        gsap.from(".span-row-1, .span-row-3", {
          duration: 1,
          scale: .5,
          stagger: .25,
          opacity: 0
        });
        gsap.from(".span-row-2, .span-row-4", {
          duration: .75,
          scale: .5,
          stagger: -.25,
          opacity: 0
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
        <div className="full-menu-wrapper" style={menuStyle}>
        </div>
        <nav>
          <h1>
            <span id="title-first">Siddharth</span>
            <br/>
            <span id="title-second">Kurnal</span>
          </h1>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="http://github.com/skurnal2"><FontAwesomeIcon className="github-symbol" icon={['fab', 'github']} />GitHub</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <div className="nav-menu-button" onClick={() => this.handleMenu()}>
          <FontAwesomeIcon className="menu-symbol" icon={['fa', 'bars']} />
        </div>
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
        <div className="projects">
        
          <div className="projects-inner">
          
            <h4>My Projects</h4>
            <div className="projects-container">

            
              <div>
                <img src={sunshine_url} />
                <div>Sunshine Meme Generator</div>
              </div>
              <div>
                <img src={geo_covid_url} />
                <div>Geo Covid</div>
              </div>
              <div>
                <img src={highway_dodge_url} />
                <div>Highway Dodge</div>
              </div>
              <div>
                <img src={bee_chat_url} />
                <div>BeeChat</div>
              </div>
              <div>
                <img src={la_auto_detail_url} />
                <div>LA Auto Detail</div>
              </div>
              <div>
                <img src={wallify_url} />
                <div>Wallify</div>
              </div>
              <div>
                <img src={color_app_url} />
                <div>ColorApp</div>
              </div>              
            </div>

            
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
        {/* <footer>Footer</footer> */}
      </div>
    );
  }
}

export default App;
