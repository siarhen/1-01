import React from 'react';
import {OneSkill} from "../../Components/Skill/Skill";
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {SectionTitle} from "../../Components/SectionTitle";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <h3>Technologies I’ve been working with recently</h3>
            <FlexWrapper direction={"row"} wrap={"wrap"} gap={""}>
                <OneSkill iconId={"html5"}/>
                <OneSkill iconId={"git"}/>
                <OneSkill iconId={"github"}/>
                <OneSkill iconId={"css"}/>
                <OneSkill iconId={"react"}/>
                <OneSkill iconId={"vscode"}/>
                <OneSkill iconId={"saas"}/>
                <OneSkill iconId={"tailwind"}/>
                <OneSkill iconId={"greensock"}/>
                <OneSkill iconId={"js"}/>
                <OneSkill iconId={"bootstrap"}/>
                <OneSkill iconId={"vector"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    background-color: aliceblue;
    min-height: 557px;
`
