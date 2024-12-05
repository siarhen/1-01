import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";

type ProjectsPropsType = {
    src: string;
    title: string;
    text: string;

}
const Project = (props:ProjectsPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <PostTitle></PostTitle>
            <FlexWrapper>
                <Link href={"#"}></Link>
                <Link href={"#"}></Link>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject=styled.div`
    background-color: bisque;
    max-width: 375px;
    width: 100%;
    height: 570px
`
const Title=styled.h3`
`
const Text=styled.p`
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    width: 375px ;
    object-fit: cover;
`
const Link=styled.a`
`
const PostTitle=styled.p`
`
export default Project;