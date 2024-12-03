import React from 'react';
import {OneSkill} from "../../Components/Skill/Skill";
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";


export const Skills = () => {
    return (
        <StyledSkills>
            <h3>My Skills</h3>
            <FlexWrapper direction={"row"} wrap={"wrap"}>
                <OneSkill iconId={"html5"}/>
                <OneSkill iconId={"git"}/>
                <OneSkill iconId={"github"}/>
                <OneSkill iconId={"css"}/>
                <OneSkill iconId={"react"}/>
                <OneSkill iconId={"vscode"}/>
                <OneSkill iconId={"saas"}/>
                <OneSkill iconId={"tailwind"}/>
                <OneSkill iconId={"man"}/>
                <OneSkill iconId={"js"}/>
                <OneSkill iconId={"bootstrap"}/>
                <OneSkill iconId={"vector"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    background-color: aliceblue;
    min-height: 100vh;
`
