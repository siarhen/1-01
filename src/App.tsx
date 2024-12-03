import './App.css';
import styled from 'styled-components';
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import {Skills} from "./Layout/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Skills/>
        </div>
    );
}


export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;