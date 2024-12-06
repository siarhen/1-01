import './App.css';
import styled from 'styled-components';
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import {Skills} from "./Layout/Skills/Skills";
import Projects from "./Layout/Projects/Projects";


function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Skills/>
            <Projects />
        </div>
    );
}


export default App;

