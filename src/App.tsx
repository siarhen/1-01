import './App.css';
import styled from 'styled-components';
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import {Skills} from "./Layout/Skills/Skills";
import Projects from "./Layout/Projects/Projects";
import {Contacts} from "./Layout/Contacts/Contacts";
import {Footer} from "./Layout/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Skills/>
            <Projects />
            <Contacts/>
            <Footer/>
        </div>
    );
}


export default App;

