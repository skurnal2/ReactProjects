import React from "react";
import '../../css/projects-page.scss';
import '../../css/nav.scss';

//Component Imports
import Projects from "../home-sections/projects";

class ProjectsPage extends React.Component {
    render() {
        return(
            <div id="projects-panel">                
                <Projects/>
            </div>
        );
    }
}

export default ProjectsPage;