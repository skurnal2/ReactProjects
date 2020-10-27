//Imports
import React from "react";

//Images
import sunshine_url from "../../images/sunshine-meme.gif";
import geo_covid_url from "../../images/geo-covid.JPG";
import highway_dodge_url from "../../images/highway_dodge.JPG";
import bee_chat_url from "../../images/bee-chat.JPG";
import la_auto_detail_url from "../../images/la-auto-detail.JPG";
import wallify_url from "../../images/wallify.JPG";
import color_app_url from "../../images/color-app.JPG";
import digital_resume_url from "../../images/digital-resume.jpg";

const Projects = () => {

  function goToThisLink(item) {
    switch(item) {
      case 'resume':
        window.location.href='https://github.com/skurnal2/ResumeAssignment';
        break;
      case 'sunshine':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/sunshine-meme-generator';
        break;
      case 'geo_covid':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/geo-covid';
        break;
      case 'highway_dodge':
        window.location.href='https://github.com/skurnal2/HighwayDodge';
        break;
      case 'bee_chat':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/bee-chat-web';
        break;
      case 'la_auto':
        window.location.href='http://laautodetail.com/';
        break;
      case 'wallify':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/wallify';
        break;
      case 'color_app':
        window.location.href='https://github.com/skurnal2/ColorApp';
        break;
    }
  }

  return (
    <div className="projects">
      <div className="projects-inner">
        <h4>My Projects</h4>
        <div className="projects-container">
          <div>
            <img src={digital_resume_url} alt="Siddharth Kurnal Digital Resume" onClick={() => goToThisLink('resume')} />
            <div>Digital Resume</div>
          </div>
          <div>
            <img src={sunshine_url} alt="Sunshine Meme Generator" onClick={() => goToThisLink('sunshine')} />
            <div>Sunshine Meme Generator</div>
          </div>
          <div>
            <img src={geo_covid_url} alt='Geo Covid' onClick={() => goToThisLink('geo_covid')} />
            <div>Geo Covid</div>
          </div>
          <div>
            <img src={highway_dodge_url} alt='Highway Dodge' onClick={() => goToThisLink('highway_dodge')} />
            <div>Highway Dodge</div>
          </div>
          <div>
            <img src={bee_chat_url} alt="Bee Chat" onClick={() => goToThisLink('bee_chat')} />
            <div>BeeChat</div>
          </div>
          <div>
            <img src={la_auto_detail_url} alt="LA Auto Detail" onClick={() => goToThisLink('la_auto')} />
            <div>LA Auto Detail</div>
          </div>
          <div>
            <img src={wallify_url} alt="Wallify" onClick={() => goToThisLink('wallify')} />
            <div>Wallify</div>
          </div>
          <div>
            <img src={color_app_url} alt="Color App" onClick={() => goToThisLink('color_app')} />
            <div>ColorApp</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
