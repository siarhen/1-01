import React from 'react';
import {SectionTitle} from "../Components/SectionTitle";
import styled from "styled-components";
import {Experience} from "../Components/Experience";

const WorksArray = [{
    title: "SYSTEM ADMINISTRATOR",
    company: "LLC Tisla",
    date: "Sep 2020 - Jun 2022",
    experienceType: "Part-Time",
    location: "Minsk"
},
    {
        title: "SAP Developer",
        company: "LLC Atlant Consult",
        date: "Jun 2022 - Dec 2022",
        experienceType: "Internship",
        location: "Minsk"
    }]
const EducationArray = [{
    title: "Bachelor in Electronics & Communication",
    company: "Belarusian State University of radio electronics",
    date: "Sep 2018 - Jul 2022",
    experienceType: "Full Time",
    location: "Minsk"
}]
export const About = () => {
    return (
        <AboutStyled>
            <SectionTitle fontSize={"42px"} justify={"flex-start"}>About Me</SectionTitle>
            <TextStyled>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
                future website. It helps you to combine slides, panels and other components and export it as a set of
                static files: HTML/CSS/JS.</TextStyled>
            <SectionTitle fontSize={"42px"} justify={"flex-start"}>Work Experience</SectionTitle>
            {WorksArray.map(e => (
                <Experience title={e.title} company={e.company} experienceDate={e.date} experienceType={e.experienceType} location={e.location} />
            ))}
            <SectionTitle fontSize={"42px"} justify={"flex-start"} margin={"38px"}>Education</SectionTitle>
            {EducationArray.map(e => (
                <Experience title={e.title} company={e.company} experienceDate={e.date} experienceType={e.experienceType} />
            ))}
        </AboutStyled>
    );
};

const AboutStyled = styled.section`
    max-width: 710px;
    width: 100%;
`
const TextStyled = styled.p`
    color: #666666;
    font-size: 18px;
    margin: 38px auto;
`