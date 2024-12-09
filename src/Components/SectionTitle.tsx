import styled from "styled-components";
type SectionTitleProps = {
    fontSize?: string | number;
    justify?: string;
    margin?: string;
}
export const SectionTitle = styled.h2<SectionTitleProps>`
    color:#42446e;
    font-weight: bold;
    font-size: ${props=> props.fontSize || "48px"};
    display: flex;
    justify-content: ${props=> props.justify || "center"};
    margin: ${props=> props.margin || "0"} auto;
`