import socialLogos from "../../assets/social.svg";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Icon from "../../Components/icon/Icon";

const Header = () => {
    return (
        <StyledHeader>

            <img src={logo} alt={""}></img>
            <nav>
                <StyledNav>
                    <StyledLi>
                        <a href="">Home</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">About</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Tech Task</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Projects</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Contacts</a>
                    </StyledLi>
                    <StyledLi>
                        <Icon iconId={"git_cat"} size={"30"}/>
                    </StyledLi>
                    <StyledLi>
                        <Icon iconId={"linkedin"} size={"30"}/>
                    </StyledLi>
                    <StyledLi>
                        <Icon iconId={"twitter"} size={"30"}/>
                    </StyledLi>
                </StyledNav>
            </nav>
            <a href={"#"}>
                <img src={socialLogos}/>
            </a>
        </StyledHeader>
    )
};
const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const StyledLi = styled.li`
    color: #666666;
    font-weight: 500;
    font-size: 20px;
    a{text-decoration: none}
`
const StyledNav = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
    align-items: center;
`
export default Header