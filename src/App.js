import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";
import Bmi from "./pages/Bmi";

import CatAge from "./pages/CatAge";
import Transform from "./pages/Transform";

import styled from "styled-components";
const Main = styled.div`
    font-family: "serif";
    background-color: white;
    width: 500px;
    margin: auto;
`;

const Nav = styled.nav`
    text-align: right;
    width: 60px;
    text-decoration: none;
    margin: 50px;
`;

function App() {
    return (
        <Main>
            <Router>
                <nav>
                    <NavLink to="/">BMI APP</NavLink>
                    <NavLink to="/CatAge">Cat Age Converter</NavLink>
                    <NavLink to="/Transform">Transfrom Text APP</NavLink>
                </nav>

                <Route exact path="/">
                    <Bmi />
                </Route>

                <Route exact path="/CatAge">
                    <CatAge />
                </Route>

                <Route exact path="/Transform">
                    <Transform />
                </Route>
            </Router>
        </Main>
    );
}

export default App;
