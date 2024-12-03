import logo from "../../assets/social.svg";
import styled from "styled-components";
import Icon from "../../Components/icon/Icon";

const Header = () => {
    return (
        <StyledHeader>
            <img src={logo}/>
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
</StyledHeader>
)};
const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`
const StyledLi = styled.li`
    color: #666666;
    text-Font: DM Sans;
    font-weight: 500;
    font-size: 20px;
`
const StyledNav = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
    text-decoration: none;
`
export default Header