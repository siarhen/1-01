import React from 'react';
import styled from "styled-components";
import photo from "../../assets/photo.jpg"
import {FlexWrapper} from "../../Components/FlexWrapper";

const Main = () => {
    return (
        <div>
            <FlexWrapper alignItems={"center"} justify={"space-between"}>
                <div>
                    <span>Hi,👋</span>
                    <h2>I'm Daniil Shishaev</h2>
                    <h1>A web developer</h1>
                </div>
                    <Photo src={photo}></Photo>

            </FlexWrapper>
        </div>
    );
};
const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: 2px solid #e91e63;
    border-radius:100%;
    
    
`


export default Main;