import React from 'react';
import Project from "./Project";
import {FlexWrapper} from "../../Components/FlexWrapper";
import styled from "styled-components";
import {SectionTitle} from "../../Components/SectionTitle";

import img1 from "../../assets/projectsImages/Rectangle 4.png";
import img2 from "../../assets/projectsImages/Rectangle 8.png";
import img3 from "../../assets/projectsImages/Rectangle 6.png";
import img4 from "../../assets/projectsImages/Rectangle 13.png";
import img5 from "../../assets/projectsImages/Rectangle 14.png";
import img6 from "../../assets/projectsImages/Rectangle 24.png";

const projectsArray = [
    {title : "Social Network", src : img1},
    {title : "Timer", src : img2},
    {title : "To-do List", src : img3},
    {title : "Social Network", src : img4},
    {title : "Social Network",src : img5},
    {title : "Social Network", src : img6}
]


const Projects = () => {
    return (
        <div>
            <SectionTitle>Projects</SectionTitle>
            <h3>Things I've build so far</h3>
            <FlexWrapper wrap={"wrap"} gap={"34px"}>
                {projectsArray.map((prj, index) => (
                    <Project title={prj.title} key={index}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    src={prj.src} />
                    ))}
            </FlexWrapper>
        </div>
    );
};
const styledProjects = styled.section`
    min-height: 100vh;
    background-color: aquamarine;
`

export default Projects;