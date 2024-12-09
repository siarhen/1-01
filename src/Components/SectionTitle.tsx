import styled from "styled-components";
type SectionTitleProps = {
    fontSize?: string | number;
}
export const SectionTitle = styled.h2<SectionTitleProps>`
    color:black;
    font-weight: bold;
    font-size: ${props=> props.fontSize || "48px"};
    display: flex;
    justify-content: center;
    margin: 0 auto;
`