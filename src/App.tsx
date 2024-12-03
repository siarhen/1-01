import './App.css';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";

function App() {
    return (
        <div className="App">
            <Header />
            {/*<Title>Welcome to IT-INCUBATOR</Title>*/}
            <Main/>
        </div>
    );
}


export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;