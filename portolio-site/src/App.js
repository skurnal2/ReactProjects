//Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBoxTissue } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { gsap, ScrollTrigger } from "gsap/all";

//Component Imports
import Nav from "./components/nav";
import Services from "./components/services";
import Projects from "./components/projects";
import Skills from "./components/skills";

library.add(faGithub, faBars);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      zIndex: "-100",
      opacity: "0",
      currentWidth: window.screen.width,
    };
  }

  gsapFunctions() {
    //Reload GSAP animations on Screen thresholds
    if (window.screen.width > 1024 && this.state.currentWidth < 1024) {
      this.state.currentWidth = window.screen.width;
      this.gsapFunctions();
    } else if (window.screen.width < 1024 && this.state.currentWidth > 1024) {
      this.state.currentWidth = window.screen.width;
      this.gsapFunctions();
    }

    gsap.registerPlugin(ScrollTrigger);
    //GSAP Animations
    gsap.from(".nav-links a", {
      duration: 1,
      opacity: 0,
      y: -150,
      stagger: -0.25,
    });
    gsap.from("nav h1", {
      scrollTrigger: {
        trigger: ".services",
        start: "top",
        end: "100px 15px",
        scrub: true,
      },
      y: -120,
    });
    gsap.to("#title-first", {
      scrollTrigger: {
        trigger: ".services",
        start: "top",
        end: "100px 15px",
        scrub: true,
      },
      visibility: "visible",
      marginRight: 50,
    });
    gsap.to("#title-second", {
      scrollTrigger: {
        trigger: ".services",
        start: "top",
        end: "100px 15px",
        scrub: true,
      },
      visibility: "visible",
      marginLeft: 50,
    });
    gsap.from(".circle", {
      duration: 4,
      opacity: 0,
      y: -250,
      stagger: 0.3,
      ease: "elastic",
    });

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
          scale: 0.5,
          stagger: 0.25,
          opacity: 0,
          duration: 11,
        });
        gsap.from(".span-row-2, .span-row-4", {
          scrollTrigger: {
            trigger: "nav",
            start: "top",
            end: "600px 10px",
            scrub: true,
          },
          scale: 0.5,
          stagger: -0.25,
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
          ease: "ease",
        });
      },

      "(max-width: 1024px)": function () {
        gsap.from(".span-row-1, .span-row-3", {
          duration: 1,
          scale: 0.5,
          stagger: 0.25,
          opacity: 0,
        });
        gsap.from(".span-row-2, .span-row-4", {
          duration: 0.75,
          scale: 0.5,
          stagger: -0.25,
          opacity: 0,
        });
      },
    });
  }

  handleMenu() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        zIndex: "-100",
        opacity: "0",
      });
      console.log("Menu Open");
    } else {
      this.setState({
        isOpen: true,
        zIndex: "300",
        opacity: "1",
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
      opacity: this.state.opacity,
    };

    return (
      <div className="container">
        <div className="full-menu-wrapper" style={menuStyle}></div>
        <Nav />
        <div className="nav-menu-button" onClick={() => this.handleMenu()}>
          <FontAwesomeIcon className="menu-symbol" icon={["fa", "bars"]} />
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
        <Services />
        <Projects />
        <Skills />
        {/* <footer>Footer</footer> */}
      </div>
    );
  }
}

export default App;
