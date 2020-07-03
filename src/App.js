import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Bmi from "./pages/Bmi";

import CatAge from "./pages/CatAge";
import Transform from "./pages/Transform";

import styled from "styled-components";
const Main = styled.div`
    font-family: "Noto Sans JP", sans-serif;
    background-color: white;
    width: 600px;
    margin: auto;
`;

const NavLink = styled.div`
    width: 100px;
    margin: 30px;
    & a {
        text-decoration: none;
        color: black;
    }
    & a:hover {
        border: 1px solid purple;
    }
    & a:active {
        background-color: rebeccapurple;
        color: white;
    }
`;

const Nav = styled.nav`
    margin: auto;
    display: flex;
    justify-content: space-evenly;
`;

function App() {
    return (
        <Router>
            <Main>
                <Nav as="nav">
                    <NavLink>
                        <Link to="/">BMI APP</Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/CatAge">Age Converter</Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/Transform">Transfrom Text</Link>
                    </NavLink>
                </Nav>
                <hr />
                <Route exact path="/">
                    <Bmi />
                </Route>

                <Route exact path="/CatAge">
                    <CatAge />
                </Route>

                <Route exact path="/Transform">
                    <Transform />
                </Route>
            </Main>
        </Router>
    );
}

export default App;
