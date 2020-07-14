import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap/all';

library.add(faGithub);

class App extends React.Component {

  componentDidMount() {
    gsap.from(".nav-links a", {duration: 1, opacity: 0, y: -150, stagger: 0.25});
  
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
              MENU
          </div>
          </div>
        </nav>
        <main>
          <div id="name-container">
            <h1>
              Siddharth Kurnal
          </h1>
          </div>
          <div id="about-me">
            <h2>About Me</h2>
            <div>
              Consequat quis aute reprehenderit dolor aliquip anim deserunt velit id ut voluptate. Pariatur esse occaecat reprehenderit deserunt aliquip voluptate mollit ex incididunt quis consectetur reprehenderit. In exercitation officia do id. Non cupidatat exercitation cillum culpa aliqua.
          </div>
          </div>
        </main>
        <div class="heading">
          <h2>
            My Projects
        </h2>
        </div>
        <div class="project-sub-links">
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
        <div class="projects">Projects</div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
