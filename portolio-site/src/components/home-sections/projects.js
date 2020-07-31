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

const Projects = () => {
  return (
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
  );
};

export default Projects;
