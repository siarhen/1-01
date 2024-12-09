import styled from "styled-components";
type TextProps = {
    fontSize?: number | string;
    fontWeight?: string;
}
export const ColoredText = styled.p<TextProps>`
    font-size: ${props=> props.fontSize || "48px"};
    font-weight: ${props=> props.fontWeight || "bold"};
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right, #13B0F5 3%, #E70FAA 100%);
    
`